import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonProps } from "../../types/app.type";

export const BaseButton: React.FC<BaseButtonProps & Omit<ButtonProps, keyof BaseButtonProps>> = styled(Button)<{ submitformbutton?: string }>(
    ({ theme, submitformbutton }) => {
        const submitform = submitformbutton === "true";
        return {
            fontFamily: submitform ? "Montserrat" : "Helvetica Neue",
            fontWeight: 500,
            fontSize: submitform ? 22 : 14,
            lineHeight: "normal",
            color: "#FFFFFF",
            background: submitform ? "#01126E" : "none",
            border: submitform ? "none" : "1px solid #FFFFFF",
            borderRadius: submitform ? "9px" : "8px",
            padding: "0.6rem 2.375rem",
            textTransform: "capitalize",
            "&:hover": {
                background: submitform ? "#01126E" : "none",
            }
        }
    }
)