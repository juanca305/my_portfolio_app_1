import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech' >
  <SectionDivider />
  <SectionTitle main>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies in the web development world. From Back-end To Design.
  </SectionText>
  <List>

    <ListItem>
      <DiReact size='3rem'/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with Html, CSS, Javascript, Tailwind CSS,  React, Redux ToolKit, Next.js
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size='3rem'/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with Node, Express, MERN Stack, Mongoose, JWT, REST APIs and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size='3rem'/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with<br />
          tools like Figma 
        </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
 </Section>
);

export default Technologies;
