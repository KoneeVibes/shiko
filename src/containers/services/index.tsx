import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { ServicesBox } from "./styled";
import { services } from "../../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "../../theme";

export const Services: React.FC<{}> = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <ServicesBox
            id="services"
        >
            <Box>
                <Box
                    maxWidth={{ mobile: 111, tablet: 189 }}
                    borderBottom={"4px solid #EDCD1F"}
                    sx={{
                        [theme.breakpoints.down(208)]: {
                            maxWidth: "unset",
                        }
                    }}
                >
                    <Typography
                        variant="h2"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={700}
                        fontSize={{ mobile: 25, miniTablet: 30, tablet: 40, laptop: 45, desktop: 50 }}
                        lineHeight={"normal"}
                        color={"#01126E"}
                        overflow={{ mobile: "visible" }}
                        sx={{
                            [theme.breakpoints.down(208)]: {
                                overflow: "hidden"
                            }
                        }}
                    >
                        Our Services
                    </Typography>
                </Box>
            </Box>
            <Carousel
                autoPlay={true}
                stopOnHover={false}
                infiniteLoop={true}
                interval={2000}
                emulateTouch={matches ? true : false}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                renderIndicator={(clickHandler, isSelected, index, label) => {
                    return (
                        <Stack
                            direction={"row"}
                            gap={".5rem"}
                            alignItems={"center"}
                            overflow={"hidden"}
                            onClick={clickHandler}
                        >
                            <ArrowOutwardIcon
                                sx={{
                                    display: isSelected ? "block" : "none"
                                }}
                            />
                            <Typography
                                variant="h3"
                                component={"h3"}
                                fontFamily={"Helvetica Neue"}
                                fontWeight={500}
                                fontSize={{ mobile: 20, tablet: 34, laptop: 34, desktop: 40 }}
                                lineHeight={"normal"}
                                color={isSelected ? "#505050" : "#C9C9C9"}
                                onClick={clickHandler}
                                sx={{
                                    cursor: "pointer"
                                }}
                            >
                                {services[index].name}
                            </Typography>
                        </Stack>
                    )
                }}
            >
                {services.map((service, key) => {
                    return (
                        <Stack
                            key={key}
                            direction={{ tablet: "row" }}
                            gap={"var(--flexGap)"}
                            justifyContent={"space-between"}
                            height={"100%"}
                        >
                            <Card
                                sx={{
                                    flex: { tablet: 1 },
                                    borderRadius: "10px",
                                    boxShadow: "none"
                                }}
                            >
                                <CardMedia
                                    image={service.thumbnail}
                                    sx={{
                                        borderRadius: "inherit",
                                        height: "100%",
                                        backgroundPosition: service.position,
                                        minHeight: "24.75rem"
                                    }}
                                />
                            </Card>
                            <Card
                                sx={{
                                    flex: 1,
                                    borderRadius: "10px",
                                    boxShadow: "none",
                                    background: "#D6DCFF",
                                    padding: "calc(1.5 * var(--sectionMargin)) var(--sectionMargin)",
                                    height: "100%"
                                }}
                            >
                                <CardContent
                                    sx={{
                                        padding: "0 !important"
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        fontFamily={"Helvetica Neue"}
                                        fontWeight={500}
                                        fontSize={{ mobile: 25, miniTablet: 30, tablet: 40 }}
                                        lineHeight={"normal"}
                                        color={"#2F2F2F"}
                                        textAlign={"left"}
                                        marginBlockEnd={"calc(1.5 * var(--sectionMargin))"}
                                        whiteSpace={"normal"}
                                    >
                                        {service.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        fontFamily={"PP Telegraph"}
                                        fontWeight={"400"}
                                        fontSize={{ mobile: 14 }}
                                        lineHeight={"28px"}
                                        color={"#000000"}
                                        textAlign={"left"}
                                        whiteSpace={"normal"}
                                        sx={{
                                            textWrap: "balance"
                                        }}
                                    >
                                        {service.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    )
                })}
            </Carousel>
        </ServicesBox >
    )
}