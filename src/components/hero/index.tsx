import { Box, Typography } from "@mui/material";

export const Hero: React.FC<{}> = () => {
    return (
        <Box
            padding={"calc(2* var(--sectionMargin)) var(--pagePadding)"}
            width={{ desktop: "60%" }}
        >
            <Typography
                variant="h1"
                fontFamily={"Helvetica Neue"}
                fontWeight={700}
                lineHeight={"normal"}
                fontSize={{ mobile: 35, miniTablet: 40, tablet: 50, laptop: 62, desktop: 70 }}
                color={"#FFFFFF"}
                whiteSpace={"normal"}
                sx={{
                    textWrap: "balance",
                }}
            >
                Leaders in Energy & Subsea Capabilities
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Inter"}
                fontWeight={400}
                lineHeight={"normal"}
                fontSize={{ mobile: 14 }}
                color={"#FFFFFF"}
                whiteSpace={"normal"}
                marginBlock={"2rem"}
                sx={{
                    textWrap: "balance",
                }}
            >
                Oil & Gas, Storage Facilities, Fire detections, Lift Equipment, Soft and steel wire ropes and fittings (Thalurites, Ferules and shackles), Downhole Tools, Valves, Flanges, Laboratory equipment etc
            </Typography>
        </Box >
    )
}