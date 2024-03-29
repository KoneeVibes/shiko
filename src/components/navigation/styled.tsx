import { useContext } from "react";
import { styled } from "@mui/material";
import { Context } from "../../context";

export const Nav = styled("nav")(
    ({ theme }) => {
        const { openMenu } = useContext(Context);
        return {
            display: "flex",
            alignItems: "center",
            gap: "var(--flexGap)",
            justifyContent: "space-between",
            padding: "var(--sectionMargin) var(--pagePadding)",
            "& ul": {
                paddingInlineStart: 0,
                marginBlock: 0,
                display: "flex",
                gap: "var(--flexGap)",
                "& li": {
                    listStyleType: "none",
                },
                "& a": {
                    textDecoration: "none",
                },
                [theme.breakpoints.down(768)]: {
                    display: openMenu ? "flex" : "none",
                    flexDirection: "column",
                    gap: "calc(2 * var(--flexGap))",
                    position: "fixed",
                    left: "0%",
                    top: "calc(60px + calc(2 * var(--sectionMargin)))",
                    width: "stretch",
                    height: "stretch",
                    padding: "var(--cardPadding)",
                    background: "#F0F8FF",
                    "& li": {
                        textAlign: "center"
                    }
                }
            },
            [theme.breakpoints.down("tablet")]: {
                "& .logo": {
                    flex: "166px 0 1",
                },
            },
            [theme.breakpoints.down(93)]: {
                justifyContent: "center",
                "& .logo": {
                    display: "none",
                },
            }
        }
    }
)