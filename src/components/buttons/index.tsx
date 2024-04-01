import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonProps } from "../../types/app.type";

export const BaseButton: React.FC<BaseButtonProps & Omit<ButtonProps, keyof BaseButtonProps>> = styled(Button)<{ isiconbutton?: string }>(
    ({ theme, isiconbutton }) => {
        const isIcon = isiconbutton === "true";
        return {
            fontFamily: isIcon ? "PP Telegraph" : "Helvetica Neue",
            fontWeight: isIcon ? 400 : 500,
            fontSize: 14,
            lineHeight: isIcon ? "1.75" : "normal",
            color: isIcon ? "#111111" : "#FFFFFF",
            background: isIcon ? "#EDCD1F" : "none",
            border: isIcon ? "none" : "1px solid #FFFFFF",
            borderRadius: isIcon ? "110px" : "8px",
            padding: "0.6rem 2.375rem",
            textTransform: "capitalize",
            "&:hover": {
                background: isIcon ? "#EDCD1F" : "none",
            }
        }
    }
)