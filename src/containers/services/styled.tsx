import { Box, styled } from "@mui/material";

export const ServicesBox: React.FC<{ children: React.ReactNode }> = styled(Box)(
    ({ theme }) => {
        return {
            padding: "var(--sectionMargin) var(--pagePadding) calc(1.5 * var(--sectionMargin))",
            [theme.breakpoints.up("tablet")]: {
                padding: "calc(2 * var(--sectionMargin)) var(--pagePadding) calc(3 * var(--sectionMargin))",
            },
            "& .control-dots": {
                position: "static",
                margin: 0,
                textAlign: "left",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                zIndex: "unset",
                gap: "var(--flexGap)",
                padding: "calc(1.5 * var(--sectionMargin)) 0 calc(2 * var(--sectionMargin))",
                [theme.breakpoints.down("tablet")]: {
                    padding: "var(--sectionMargin) 0",
                },
                [theme.breakpoints.down("laptop")]: {
                    flexDirection: "column"
                }
            }
        }
    }
)