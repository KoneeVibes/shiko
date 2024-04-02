import React from "react";
import { smIcons } from "../../data";
import { Box, Stack, Typography } from "@mui/material";

export const Footer: React.FC<{}> = () => {
    return (
        <Box
            borderTop={".5px solid #A9A9A9"}
            padding={"var(--sectionMargin) var(--pagePadding)"}
        >
            <Typography
                variant="h2"
                fontFamily={"Helvetica Neue"}
                fontWeight={500}
                fontSize={25}
                lineHeight={"normal"}
                color={"#1E2D3B"}
                marginBlockEnd={"2rem"}
            >
                Follow us on Social Media
            </Typography>
            <Stack
                direction={"row"}
                gap={"calc(var(--flexGap) / 2)"}
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
                direction={"row"}
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
                        to: info@shikolzltd.com
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}