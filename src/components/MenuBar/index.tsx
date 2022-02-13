import React from 'react';
import Button from '../Button';

import { 
  Container, 
  Topside, 
  Logo, 
  MenuButton,
  HomeIcon,
  ExplorerIcon,
  BellIcon,
  EmailIcon,
  SaveItemsIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <ExplorerIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <SaveItemsIcon />
          <span>Itens Salvos</span>
        </MenuButton>

        <MenuButton>
          <ListIcon />
          <span>Listas</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Douglas Bernardo</strong>
          <span>@jkdouglas21</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;