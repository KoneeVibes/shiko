import { styled } from "@mui/material";

export const BaseForm = styled("form")(
    ({ theme }) => {
        return {
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--flexGap)/2)",
            flex: 1,
            background: "#E5E5E5",
            padding: "var(--cardPadding)",
            borderRadius: "12px",
            "& input, & textarea": {
                borderRadius: "9px",
                border: "none",
                background: "#FFFFFF",
                padding: "var(--cardPadding)",
                outline: "none",
                fontFamily: "Manrope",
                fontWeight: "500",
                fontSize: 16,
                lineHeight: "normal",
                color: "#181433",
                overflow: "hidden",
                whiteSpace: "normal",
                textOverflow: "ellipsis",
            }
        }
    }
)