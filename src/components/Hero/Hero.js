import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { BlogCard2, Img2, LeftSection, LinkItem2, Wrapper_Links, Hero_Wrapper } from './HeroStyles';
import { myprofile } from '../../constants/constants';
import { Img } from '../Projects/ProjectsStyles';


const Hero = (props) => (
  <Section row nopadding>
    <Hero_Wrapper>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio    
      </SectionTitle>
      <SectionText>
        My name is Juan Carlos Rodriguez. I was born in Havana, Cuba (10/23/1964). I graduated from Computer Science in CUJAE (1988).
        I've been working with several technologies like Asp.Net and C#. Lately my passion for frontend has increased a lot. 
        HTML, CSS, Javascript, React JS, Node, Figma, Tailwind and API are some of my more recent skills. 
        In this portfolio I want to show some projects I've made.
      </SectionText>
      <Link legacyBehavior href="#tech">
            <Button >Learn More</Button>      
      </Link>  
    </LeftSection>

    <div className='right_section'>
        <BlogCard2> 
          <Img2 src={myprofile.image}/>
          <Wrapper_Links>
          <LinkItem2 href='tel:786-444-6596'><span style={{color: '#9cc9e3'}}>phone:</span>&nbsp;&nbsp; <span>{myprofile.phone}</span></LinkItem2>
          <LinkItem2 href='mailto:jc.rdguez64@gmail.com'><span style={{color: '#9cc9e3'}}>email:</span>&nbsp;&nbsp;{myprofile.email}</LinkItem2>
          </Wrapper_Links>&nbsp;
        </BlogCard2>

    </div>
    </Hero_Wrapper>
    </Section>
    
);

export default Hero;