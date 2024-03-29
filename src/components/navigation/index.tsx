import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import { Logo } from "../../assets";
import { navLinks } from "../../data";
import { HashLink } from "react-router-hash-link";
import { Nav } from "./styled";
import { Typography } from "@mui/material";
import { Menu } from "../buttons/menu";

export const Navbar: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };
    return (
        <Nav>
            <Logo
                className="logo"
                onClick={handleLogoClick}
            />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                            onClick={() => setOpenMenu(false)}
                        >
                            <HashLink
                                to={link.url}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Helvetica Neue"}
                                    fontWeight={500}
                                    lineHeight={"normal"}
                                    fontSize={15}
                                    color={{ mobile: "#01126E", tablet: "#FFFFFF" }}
                                >
                                    {link.name}
                                </Typography>
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
            <Menu />
        </Nav>
    )
}