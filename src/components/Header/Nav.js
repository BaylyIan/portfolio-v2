import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Nav = ({ open, handleOpen }) => (
  <>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '15px' }}>
          <DiCssdeck size='3rem' /><Span>Ian Bayly</Span>
        </a>
      </Link>
    </Div1>
    <Div2 open={open}>
      <li onClick={handleOpen}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li onClick={handleOpen}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li onClick={handleOpen}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume">
          <a href={'/IanBayly_Resume.pdf'} target="_blank" style={{ textDecoration: "none" }}><NavLink>Resume</NavLink></a>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/BaylyIan'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/ian-bayly-635829204/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='#https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </>
);

Nav.defaultProps = {
  handleOpen: () => { }
}

export default Nav;
