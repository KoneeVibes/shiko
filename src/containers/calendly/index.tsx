import { Card, CardContent, Typography } from "@mui/material";
import { InlineWidget } from "react-calendly";
import { CalendlyStack } from "./styled";
import { CalendlyRef } from "../../types/app.type";

export const Calendly: React.FC<CalendlyRef> = ({ calendlyRef }) => {
    const URL = process.env.REACT_APP_CALENDLY;
    if (!URL) {
        return (
            <Typography
                variant="body1"
                fontFamily={"Helvetica Neue"}
                fontWeight={400}
                fontSize={18}
                lineHeight={"normal"}
                color={"#525252"}
                whiteSpace={"normal"}
            >
                Unavailable
            </Typography>
        );
    }
    return (
        <CalendlyStack
            ref={calendlyRef}
            component={"div"}
            direction={{ laptop: "row" }}
            margin={"calc(2 * var(--sectionMargin)) 0 var(--sectionMargin)"}
            gap={{ mobile: "var(--flexGap)", laptop: "calc(2 * var(--flexGap))" }}
            padding={{ mobile: "calc(1.5 * var(--sectionMargin)) var(--pagePadding)", laptop: "calc(2 * var(--sectionMargin)) var(--pagePadding)" }}
            sx={{
                backgroundColor: "#D6DCFF",
            }}
        >
            <Card
                sx={{
                    background: "none",
                    boxShadow: "none",
                    flex: 1,
                }}
            >
                <CardContent
                    sx={{
                        padding: "0 !important"
                    }}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={500}
                        fontSize={{ mobile: 35, tablet: 40 }}
                        lineHeight={"normal"}
                        marginBlockEnd={"2rem"}
                        color={"#3F3F3F"}
                        whiteSpace={"normal"}
                    >
                        Still uncertain? <span style={{ color: "#162B9C" }}>Schedule a convenient online appointment with us.</span>
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={18}
                        lineHeight={"normal"}
                        color={"#525252"}
                        whiteSpace={"normal"}
                    >
                        By the end of this audit call, you will have a clear understanding of the next steps you can take for your business to build and scale a human-centric product . <br /><span style={{ display: "block", height: "2rem" }}></span>
                        Find a time on Shiko (our Executive Assistance) calendar to schedule your call today and we look forward to speaking to you soon!
                    </Typography>
                </CardContent>
            </Card>
            <Card
                sx={{
                    background: "none",
                    boxShadow: "none",
                    flex: 1
                }}
            >
                <InlineWidget
                    url={URL}
                    pageSettings={{
                        backgroundColor: 'none',
                        primaryColor: '#004FCA',
                        textColor: '#FFFFFF'
                    }}
                />
            </Card>
        </CalendlyStack>
    )
}