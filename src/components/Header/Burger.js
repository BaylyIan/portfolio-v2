import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "./Nav";

import {StyledBurger} from './HeaderStyles'

const Burger = ({ }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <StyledBurger open={open} onClick={handleOpen}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Nav
                open={open}
                handleOpen={handleOpen}
            />
        </>
    )
}

export default Burger;