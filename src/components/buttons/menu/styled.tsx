import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../context";

export const Hamburger = styled(Box)(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            backgroundColor: "#F0F8FF",
            border: "none",
            borderRadius: 2,
            "& span": {
                display: "block",
                width: "25px",
                height: "3px",
                margin: "5px auto",
                transition: "all 0.3s ease -in -out",
                background: "#01126E"
            },
            "& span:nth-of-type(2)": {
                opacity: openMenu ? 0 : 1,
            },
            "& span:nth-of-type(1)": {
                transform: openMenu ? "translateY(8px) rotate(45deg)" : "unset",
            },
            "& span:nth-of-type(3)": {
                transform: openMenu ? "translateY(-8px) rotate(-45deg)" : "unset",
            },
            [theme.breakpoints.between("mobile", "tablet")]: {
                flex: "41px 0 1",
                minWidth: "0 !important",
                "& span": {
                    width: "auto"
                }
            },
            [theme.breakpoints.up("tablet")]: {
                display: "none",
            },
        }
    }
)