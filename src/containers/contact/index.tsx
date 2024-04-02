import { Stack, Typography } from "@mui/material"

export const Contact: React.FC<{}> = () => {
    return (
        <Stack
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
                src="https://www.google.com/maps/embed/v1/place?q=Focus+Group+Limited,+Fola+Osibo+Road,+Lekki,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                style={{
                    borderRadius: "14px",
                    minHeight: 365
                }}
            >
            </iframe>
        </Stack>
    )
}