import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { capabilities } from "../../data";
import { CapabilitiesBox } from "./styled";

export const Capabilities: React.FC<{}> = () => {
    return (
        <CapabilitiesBox
            id="capabilities"
            padding={"var(--sectionMargin)"}
            margin={"0 var(--pagePadding)"}
            sx={{
                backgroundColor: "#01126E",
                borderRadius: "13px"
            }}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={700}
                fontSize={{ mobile: 25, tablet: 40, laptop: 45, desktop: 50 }}
                lineHeight={"normal"}
                color={"#FFFFFF"}
                marginBlockEnd={"2rem"}
                whiteSpace={"normal"}
            >
                Subsea Capabilities
            </Typography>
            <Typography
                variant="body1"
                fontFamily={"Inter"}
                fontWeight={400}
                fontSize={14}
                lineHeight={"normal"}
                color={"#FFFFFFC4"}
                marginBlockEnd={"3rem"}
                whiteSpace={"normal"}
            >
                Shiko LZ global network and consortium of deepwater subsea companies enable us to deliver world-class EPCI (Engineering, Procurement, construction and Installation) of deepwater Subsea Structures, Umbilical, Riser, and Flowline (SURF) systems and Life-of-Field projects.
            </Typography>
            <Grid
                container
                gap={"var(--flexGap)"}
                justifyContent={"space-between"}
            >
                {capabilities.map((capability, key) => {
                    return (
                        <Grid
                            item
                            key={key}
                            mobile={12}
                            tablet={5.6}
                            laptop={3.6}
                        >
                            <Card
                                sx={{
                                    backgroundColor: "#162B9C",
                                    borderRadius: "12px",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "&:hover": {
                                        backgroundColor: "#7A8FFF",
                                    }
                                }}
                            >
                                <CardHeader
                                    avatar={capability.img}
                                    title={
                                        <Typography
                                            variant="h3"
                                            fontFamily={"Helvetica Neue"}
                                            fontWeight={500}
                                            fontSize={{ mobile: 25, miniTablet: 30 }}
                                            lineHeight={"normal"}
                                            color={"#FFFFFF"}
                                            whiteSpace={"normal"}
                                        >
                                            {capability.title}
                                        </Typography>
                                    }
                                    sx={{
                                        padding: "2rem",
                                        flexDirection: "column",
                                        gap: "1rem",
                                        alignItems: "stretch",
                                        "& .MuiCardHeader-content": {
                                            width: "100%",
                                            overflow: "hidden",
                                        }
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        padding: "2rem"
                                    }}
                                >
                                    <ul>
                                        {capability.items.map((item, key) => {
                                            return (
                                                <li
                                                    key={key}
                                                >
                                                    {item}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </CapabilitiesBox>
    )
}