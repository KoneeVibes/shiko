import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Hero } from "../../components/hero";
import headerBg from "../../assets/headerBg.svg";
import mobileHeaderBg from "../../assets/headerMobile.svg";
import { CalendlyRef } from "../../types/app.type";
import { LazyBg } from "../../configs/lazyBg";

export const Header: React.FC<CalendlyRef> = ({ calendlyRef }) => {
    const matches = useMediaQuery('(max-width:768px)');
    const bgImage = matches ? LazyBg(mobileHeaderBg) : LazyBg(headerBg);
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: { mobile: "center", tablet: "bottom right" },
            }}
        >
            <Navbar />
            <Hero calendlyRef={calendlyRef} />
        </Box>
    )
}