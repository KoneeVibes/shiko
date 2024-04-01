import { Box, styled } from "@mui/material";

export const CapabilitiesBox = styled(Box)(
    ({ theme }) => {
        return {
            "& ul": {
                overflow: "hidden",
                "& li": {
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "normal",
                    color: "#FFFFFF",
                    whiteSpace: "normal",
                    textOverflow: "ellipsis"
                }
            }
        }
    }
)