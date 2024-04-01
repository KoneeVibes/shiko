import { Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import { capabilities } from "../../data";
import { CapabilitiesBox } from "./styled";
import { BaseButton } from "../../components/buttons";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const Capabilities: React.FC<{}> = () => {
    return (
        <CapabilitiesBox
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
            >
                Subsea Capabilities
            </Typography>
            <Stack
                direction={{ laptop: "row" }}
                gap={"var(--flexGap)"}
                justifyContent={"space-between"}
            >
                {capabilities.map((capability, key) => {
                    return (
                        <Card
                            key={key}
                            sx={{
                                backgroundColor: "#162B9C",
                                borderRadius: "12px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                "&:hover": {
                                    backgroundColor: "#7A8FFF",
                                }
                            }}
                        >
                            <CardContent
                                sx={{
                                    padding: "2rem"
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Helvetica Neue"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 25, miniTablet: 30 }}
                                    lineHeight={"normal"}
                                    color={"#FFFFFF"}
                                    marginBlockEnd={"2rem"}
                                    whiteSpace={"normal"}
                                >
                                    {capability.title}
                                </Typography>
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
                            <CardActions
                                sx={{
                                    padding: "4rem 2rem"
                                }}
                            >
                                <BaseButton
                                    isiconbutton={"true"}
                                    endIcon={<ArrowOutwardIcon />}
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
                                        More info
                                    </Typography>
                                </BaseButton>
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>
        </CapabilitiesBox>
    )
}