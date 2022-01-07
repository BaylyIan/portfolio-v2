import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, i'm Ian. <br />
        I build things that live on the internet.
      </SectionTitle>
      <SectionText>
      I’m a front-end developer based in Vancouver, BC specializing in building and designing exceptional, high quality websites and applications.
      </SectionText>
      <Button onClick={() => window.location = `https://www.google.com`}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;