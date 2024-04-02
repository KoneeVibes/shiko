import { Stack, Typography } from "@mui/material"

export const Contact: React.FC<{}> = () => {
    return (
        <Stack
            id="contact"
            component={"div"}
            padding={{ mobile: "0 var(--pagePadding) var(--sectionMargin)", laptop: "var(--sectionMargin) var(--pagePadding) calc(2 * var(--sectionMargin))" }}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                fontSize={{ mobile: 30, tablet: 40 }}
                lineHeight={"normal"}
                color={"#01126E"}
                textAlign={"center"}
                marginBlockEnd={"2rem"}
            >
                Contact us
            </Typography>
            <iframe
                title="location of firm"
                src="https://www.google.com/maps/embed/v1/place?q=1-7+Muri+Okonla+Street,+Victoria+Island+Lagos&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                style={{
                    borderRadius: "14px",
                    minHeight: 365
                }}
            >
            </iframe>
        </Stack>
    )
}