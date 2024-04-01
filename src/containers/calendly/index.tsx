import { Card, CardContent, Stack, Typography } from "@mui/material"

export const Calendly: React.FC<{}> = () => {
    return (
        <Stack>
            <Card>
                <CardContent>
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                    >
                        Still uncertain? <span>Schedule a convenient online appointment with us.</span>
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}