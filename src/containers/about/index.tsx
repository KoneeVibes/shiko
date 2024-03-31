import { Card, CardMedia, Stack, Typography } from "@mui/material";
import about from "../../assets/about.svg";

export const About: React.FC<{}> = () => {
    return (
        <Stack
            direction={{ tablet: "row" }}
        >
            <Card
                sx={{
                    flex: 0.4,
                    backgroundColor: "#01126E",
                    borderRadius: 0,
                    boxShadow: "none",
                    padding: "calc(2* var(--sectionMargin)) var(--pagePadding)",
                }}
            >
                <Typography
                    variant="h2"
                    fontFamily={"Helvetica Neue"}
                    fontWeight={500}
                    fontSize={{ mobile: 30, tablet: 40 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    marginBlockEnd={"2rem"}
                    sx={{
                        textDecoration: "underline"
                    }}
                >
                    About
                </Typography>
                <Typography
                    variant="body1"
                    fontFamily={"Helvetica Neue"}
                    fontWeight={400}
                    fontSize={{ mobile: 16 }}
                    lineHeight={"normal"}
                    color={"#FFFFFF"}
                    whiteSpace={"normal"}
                >
                    We at Shiko LZ Subsea are specialist of innovative instruments, services and solutions for measurement, monitoring and communication underwater.
                    We provide solutions for all water environments, including offshore structures and pipelines, oceans, estuaries, rivers and marine. <br /><p style={{ height: "0.5rem" }}></p>

                    We work with the best industry design equipment to withstand deep-water environments, extreme sea withstand deep-water environments, extreme sea states and heavy-duty loading. <br /> <p style={{ height: "0.5rem" }}></p>

                    We carry out engineering in line with the most stringent maritime and industrial standards to ensure continuous safe and reliable operation. <br /> <p style={{ height: "0.5rem" }}></p>

                    Our capabilities extend from pipeline, jumpers and risers design to dedicated installation aids or more complex subsea structures design including Flow Assurance typically during conceptual / pre-FEED engineering and during life of field on maintenance & repair jobs.
                </Typography>
            </Card>
            <Card
                sx={{
                    flex: 0.6,
                    borderRadius: 0,
                }}
            >
                <CardMedia
                    component={"img"}
                    src={about}
                    sx={{
                        borderRadius: "inherit",
                        height: "100%",
                    }}
                />
            </Card>
        </Stack>
    )
}