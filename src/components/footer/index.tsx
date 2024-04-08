import React from "react";
import { smIcons } from "../../data";
import { Box, Stack, Typography } from "@mui/material";
import { contactInfo } from "../../data";

export const Footer: React.FC<{}> = () => {
    return (
        <Stack
            borderTop={".5px solid #A9A9A9"}
            padding={"var(--sectionMargin) var(--pagePadding)"}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                fontSize={24}
                lineHeight={"normal"}
                color={"#1E2D3B"}
                marginBlockEnd={"1rem"}
                whiteSpace={"normal"}
            >
                Follow us on Social Media
            </Typography>
            <Stack
                direction={"row"}
                gap={"calc(var(--flexGap) / 2)"}
                overflow={"hidden"}
            >
                {smIcons.map((icon, key) => {
                    return (
                        <React.Fragment key={key}>
                            {icon}
                        </React.Fragment>
                    )
                })}
            </Stack>
            <Stack
                direction={{ laptop: "row" }}
                gap={{ mobile: "var(--flexGap)", laptop: "calc(2 * var(--flexGap))" }}
                padding={"var(--sectionMargin) 0"}
            >
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={500}
                        fontSize={24}
                        lineHeight={"normal"}
                        color={"#1E2D3B"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"1rem"}
                    >
                        Employment
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"normal"}
                        color={"#3B3A3A"}
                        whiteSpace={"normal"}
                    >
                        To apply for a job with Shiko LZ, please
                        send a cover letter together with your C.V.
                        to: info@slzltd.com
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={500}
                        fontSize={24}
                        lineHeight={"normal"}
                        color={"#324158"}
                        whiteSpace={"normal"}
                        marginBlockEnd={"1rem"}
                    >
                        Office
                    </Typography>
                    <Typography
                        variant="body1"
                        fontFamily={"Helvetica Neue"}
                        fontWeight={400}
                        fontSize={16}
                        lineHeight={"normal"}
                        color={"#3B3A3A"}
                        whiteSpace={"normal"}
                    >
                        1-7 Muri Okonla Street,
                        Victoria Island
                        Lagos
                    </Typography>
                </Box>
                <Stack>
                    {Object.entries(contactInfo).map((info, index) => {
                        return (
                            <Typography
                                key={index}
                                variant="body1"
                                fontFamily={"Helvetica Neue"}
                                fontWeight={400}
                                fontSize={16}
                                lineHeight={"normal"}
                                color={"#3B3A3A"}
                                whiteSpace={"normal"}
                            >
                                {info.map((detail, k) => {
                                    return (
                                        <Typography
                                            key={k}
                                            component={"span"}
                                        >
                                            {`${detail}  `}
                                        </Typography>
                                    );
                                })}
                            </Typography>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    )
}