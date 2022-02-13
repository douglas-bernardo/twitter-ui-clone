import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Douglas Bernardo</strong>
            <span>@jkdouglas21</span>

            <Dot />
            <time>12 de fev</time>
          </Header>

          <Description>
            Never stop learning 🚀
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              199
            </Status>
            <Status>
              <RetweetIcon />
              888
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;