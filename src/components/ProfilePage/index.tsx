import React from 'react';
import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  PrifileData, 
  LocationIcon, 
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <PrifileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Douglas Bernardo</h1>
        <h2>@jkdouglas</h2>

        <p>Full Stack Web Developer at <a href="">LinkedIn</a> </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 11 de Dez
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>619</strong>
          </span>

          <span>
            <strong>100 </strong> seguifores
          </span>
        </Followage>
      </PrifileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;