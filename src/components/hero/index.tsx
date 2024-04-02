import { Box, Stack, Typography } from "@mui/material";
import { BaseButton } from "../buttons";

export const Hero: React.FC<{}> = () => {
    return (
        <Box
            padding={{ mobile: "var(--sectionMargin) var(--pagePadding) calc(2* var(--sectionMargin))", tablet: "calc(2* var(--sectionMargin)) var(--pagePadding)" }}
            width={{ desktop: "60%" }}
            minHeight={{ mobile: "23.375rem", laptop: "32.375rem" }}
        >
            <Stack
                overflow={"hidden"}
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
                <BaseButton
                    sx={{
                        width: { mobile: "100%", miniTablet: "fit-content" },
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
                        Work with us
                    </Typography>
                </BaseButton>
            </Stack>
        </Box >
    )
}