import { Box } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Hero } from "../../components/hero";
import headerBg from "../../assets/headerBg.svg";
import mobileHeaderBg from "../../assets/headerMobile.svg";
import { CalendlyRef } from "../../types/app.type";

export const Header: React.FC<CalendlyRef> = ({ calendlyRef }) => {
    return (
        <Box
            sx={{
                backgroundImage: { mobile: `url(${mobileHeaderBg})`, tablet: `url(${headerBg})` },
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