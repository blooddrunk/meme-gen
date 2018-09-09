import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
          MEME
        </Typography>
      </Toolbar>
    </AppBar>
    <Content>{children}</Content>
  </Container>
);

export default Root;
