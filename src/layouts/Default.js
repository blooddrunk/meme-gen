import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SubTitle = styled(Typography)`
  padding-left: 24px;
`;

const Content = styled.section`
  flex-grow: 1;
  padding: 24px;
`;

const Root = ({ children }) => (
  <Container>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <TitleLink to="/">MEME</TitleLink>
        </Typography>
        <SubTitle color="inherit">For modern browsers only</SubTitle>
      </Toolbar>
    </AppBar>
    <Content>{children}</Content>
  </Container>
);

export default Root;
