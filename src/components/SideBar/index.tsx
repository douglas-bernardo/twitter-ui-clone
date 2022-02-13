import React from 'react';

import StickyBox from "react-sticky-box";

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='Jackson Douglas'
                nickname='@jkdouglas'
              />,
              <FollowSuggestion
                name='Jackson Douglas'
                nickname='@jkdouglas'
              />,
              <FollowSuggestion
                name='Jackson Douglas'
                nickname='@jkdouglas'
              />
            ]}
          />
          <List
            title='O que esta acontecendo'
            elements={[
              <News
                title='#Node.JS'
                description='New release of @nodejs v16 today! 🥳'
              />,
              <News
                title='JavaScript Daily'
                description='Writing My Own Build System'
              />,
              <News
                title='CSS-Tricks'
                description='Your CSS reset needs text-size-adjust (probably)'
              />
            ]}
          />
          <List
            title='O que esta acontecendo'
            elements={[
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />,
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />,
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />
            ]}
          />
          <List
            title='O que esta acontecendo'
            elements={[
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />,
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />,
              <News
                title='Assuntos do momento no Brasil'
                description='Novos cursos na área de TI'
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;