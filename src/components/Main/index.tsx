import React from 'react';
import ProfilePage from '../ProfilePage';

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo,
  BottonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Douglas Bernardo</strong>
          <span>400 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottonMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottonMenu>
    </Container>
  );
}

export default Main;