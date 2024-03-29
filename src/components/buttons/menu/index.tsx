import { useContext } from "react";
import { Context } from "../../../context";
import { Typography } from "@mui/material";
import { Hamburger } from "./styled";

export const Menu: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    return (
        <Hamburger
            component={"button"}
            onClick={() => setOpenMenu(!openMenu)}
        >
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
            <Typography variant="button"></Typography>
        </Hamburger>
    )
}