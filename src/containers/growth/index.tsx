import { Box, Grid, Stack, Typography } from "@mui/material";
import { growth } from "../../data";
import CountUp from 'react-countup';

export const Growth: React.FC<{}> = () => {
    return (
        <Stack
            direction={{ tablet: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ mobile: "calc(var(--flexGap)/2)", tablet: "calc(2.5 * var(--flexGap))", laptop: "calc(4 * var(--flexGap))" }}
            padding={{ mobile: "var(--sectionMargin) var(--pagePadding)", tablet: "calc(2 * var(--sectionMargin)) calc(1.5 * var(--pagePadding))" }}
        >
            <Box
                width={"100%"}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Helvetica Neue"}
                    fontWeight={500}
                    fontSize={{ mobile: 25, miniTablet: 30, tablet: 35, laptop: 45, desktop: 50 }}
                    lineHeight={"normal"}
                    color={"#000000"}
                    whiteSpace={"normal"}
                    marginBlockEnd={"1rem"}
                >
                    Facilitating growth via our ecosystem network
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={14}
                    lineHeight={"normal"}
                    color={"#3B3A3A"}
                    whiteSpace={"normal"}
                >
                    Oil & Gas, Storage Facilities, Fire detections, Lift Equipment, Soft and steel wire ropes and fittings (Thalurites, Ferules and shackles), Downhole Tools, Valves, Flanges, Laboratory equipment etc
                </Typography>
            </Box>
            <Grid
                container
                gap={{ mobile: "calc(var(--flexGap)/4)", tablet: "var(--flexGap)" }}
                justifyContent={{ mobile: "space-between", laptop: "flex-end" }}
            >
                {Object.entries(growth).map((data, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            mobile={12}
                            tablet={5}
                        >
                            <CountUp
                                end={data[1]}
                                enableScrollSpy={true}
                            >
                                {({ countUpRef }) => (
                                    <Typography
                                        ref={countUpRef}
                                        variant="h3"
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={500}
                                        fontSize={{ mobile: 25, tablet: 40, laptop: 45, desktop: 50 }}
                                        lineHeight={"normal"}
                                        color={"#060606"}
                                    >
                                        {data[1]}
                                    </Typography>
                                )}
                            </CountUp>
                            <Typography
                                variant="body1"
                                component={"p"}
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={{ mobile: 15 }}
                                lineHeight={"normal"}
                                color={"#3D5975"}
                                whiteSpace={"normal"}
                            >
                                {data[0]}
                            </Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    )
}