import React from 'react'
import { Container, Cover, Info, CardInfo, HeaderThree } from './ProjectsStyles'
// import defaultPic from '../../icons/default.png'

import {FiGithub} from 'react-icons/fi';
import {FiPlay} from 'react-icons/fi';
import {FiLayers} from 'react-icons/fi';

const ProjectCard = ({ title, image, role, desc, github, demo, extra1, extra2}) => {
    return (
        <Container>
            <Cover>
                <img src={image} />
            </Cover>
            <Info>
                <HeaderThree>{title}</HeaderThree>
                <h3 style={{ fontStyle: "italic", fontWeight: "300", fontSize: '16px' }}>{role}</h3>
                <CardInfo>{desc}</CardInfo>
                <p style={{ fontStyle: "italic", fontWeight: "300", fontSize: '14px', marginTop:'10px' }}>{extra1}</p>
                <p style={{ fontStyle: "italic", fontWeight: "300", fontSize: '14px' }}>{extra2}</p>

                <div style={{ marginTop:'20px' }}>
                <a target="_blank" style={{ textDecoration: "none" }} href={github}>
                    <FiGithub size={27} style={{ color: "white" }} />
                </a>
                <a target="_blank" style={{ textDecoration: "none" }} href={demo}>
                    <FiPlay size={27} style={{ color: "white", marginLeft: "20px" }} />
                </a>

                </div>
            </Info>
        </Container>
    )
}

ProjectCard.defaultProps = {
    title: 'Project title',
    // image: defaultPic,
    role: 'Developer',
    desc: 'in this project...'
}

export default ProjectCard;