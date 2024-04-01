import { Card, CardContent, Stack, Typography } from "@mui/material";

export const Form: React.FC<{}> = () => {
    return (
        <Stack
            direction={"row"}
            margin={"var(--sectionMargin) var(--pagePadding)"}
        >
            <Card
                sx={{
                    background: "#01126E",
                    borderRadius: "12px"
                }}
            >
                <CardContent>
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={500}
                        fontSize={{ mobile: 40 }}
                        lineHeight={"normal"}
                        color={"#FFFFFF"}
                        whiteSpace={"normal"}
                    >
                        You want to book an appointment with us?
                    </Typography>
                </CardContent>
            </Card>
            <form>

            </form>
        </Stack>
    )
}