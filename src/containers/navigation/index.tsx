import React from "react";
import { Box } from "@mui/material";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { HashLink } from "react-router-hash-link";

export const Navbar: React.FC<{}> = () => {
    return (
        <Box>
            <Logo />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                        >
                            <HashLink
                                to={link.url}
                            >
                                {link.name}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
        </Box>
    )
}