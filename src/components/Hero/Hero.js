import React from 'react';
import Link from 'next/link'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, i'm Ian. <br />
        I build things that live on the <br />internet.
      </SectionTitle>
      <SectionText>
        I’m a front-end developer based in Vancouver, BC specializing in building and designing exceptional, high quality websites and applications.
      </SectionText>
      <Button>
        Contact me!
      <a href="mailto:ianbaylyy@gmail.com?body=Hi Ian!" />
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;