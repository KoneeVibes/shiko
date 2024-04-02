import { Card, CardContent, Stack, Typography } from "@mui/material";
import { BaseForm } from "./styled";
import { BaseButton } from "../../components/buttons";

export const Form: React.FC<{}> = () => {
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
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={15}
                        lineHeight={"normal"}
                        color={"#FFFFFF"}
                        whiteSpace={"normal"}
                    >
                        We consider a range of options for you. Using our understanding and knowledge of the current market, we look at different loans.
                    </Typography>
                </CardContent>
            </Card>
            <BaseForm>
                <input placeholder="Your Name" />
                <input placeholder="Your email address" />
                <input placeholder="Your Phone Number" />
                <textarea placeholder='Send us an email' name='message' required></textarea>
                <BaseButton
                    submitformbutton="true"
                    type="submit"
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
            </BaseForm>
        </Stack>
    )
}