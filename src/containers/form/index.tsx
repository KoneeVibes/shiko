import React, { useRef } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { BaseForm } from "./styled";
import { BaseButton } from "../../components/buttons";
import emailjs from '@emailjs/browser';

export const Form: React.FC<{}> = () => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMP_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLICKEY_ID;
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!SERVICE_ID || !TEMP_ID || !PUBLIC_KEY || !form.current) return
        emailjs.sendForm(SERVICE_ID, TEMP_ID, form.current, PUBLIC_KEY)
            .then((result: any) => {
                console.log(result.text);
            }, (error: any) => {
                console.log(error.text);
            });
        e.currentTarget.reset();
    };
    return (
        <Stack
            direction={{ laptop: "row" }}
            gap={"var(--flexGap)"}
            margin={"var(--sectionMargin) var(--pagePadding) calc(2 * var(--sectionMargin))"}
            overflow={"hidden"}
        >
            <Card
                sx={{
                    background: "#01126E",
                    borderRadius: "12px",
                    flex: 1,
                    padding: { mobile: "var(--cardPadding)", tablet: "calc(2 * var(--cardPadding))" }
                }}
            >
                <CardContent
                    sx={{
                        padding: "0px"
                    }}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={500}
                        fontSize={{ mobile: 30, tablet: 40 }}
                        lineHeight={"normal"}
                        color={"#FFFFFF"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"2rem"}
                    >
                        You want to book an appointment with us?
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Montserrat"}
                        fontWeight={500}
                        fontSize={15}
                        lineHeight={1.87}
                        color={"#FFFFFF"}
                        whiteSpace={"normal"}
                    >
                        We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans.
                    </Typography>
                </CardContent>
            </Card>
            <BaseForm ref={form} onSubmit={sendEmail}>
                <input placeholder="Your Name" />
                <input placeholder="Your email address" />
                <input placeholder="Your Phone Number" />
                <textarea placeholder='Send us an email' name='message' required></textarea>
                <Box
                    overflow={"hidden"}
                    marginLeft={{ miniTablet: "auto" }}
                >
                    <BaseButton
                        submitformbutton="true"
                        type="submit"
                        sx={{
                            width: { mobile: "100%", miniTablet: "fit-content" }
                        }}
                    >
                        <Typography
                            variant="button"
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Submit
                        </Typography>
                    </BaseButton>
                </Box>
            </BaseForm>
        </Stack>
    )
}