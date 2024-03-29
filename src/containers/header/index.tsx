import { Box } from "@mui/material";
import { Navbar } from "../../components/navigation";
import { Hero } from "../../components/hero";
import headerBg from "../../assets/headerBg.svg";

export const Header: React.FC<{}> = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${headerBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: { mobile: "top left", tablet: "top right"},
            }}
        >
            <Navbar />
            <Hero />
        </Box>
    )
}