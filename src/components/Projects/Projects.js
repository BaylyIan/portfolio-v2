import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Container2, Title, Content } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ProjectCard from './ProjectCard';


const Projects = () => (
  <Section nopadding id='projects'>
    <Container2>

      <Content>

        {projects ? projects.map((o, i) => {
          return (
            <ProjectCard
            key={i}
              title={o.title}
              role={o.role}
              desc={o.desc}
              github={o.github}
              demo={o.demo}
              image={o.image}
              extra1={o.extra1}
              extra2={o.extra2}
            />
          )
        }) : null}
      </Content>
    </Container2>
  </Section>
);

export default Projects;