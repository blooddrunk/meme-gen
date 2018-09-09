import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../components/ImageCard';

const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding-top: 24px;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={12} lg>
            <ImageCard />
          </Grid>
          <Grid item xs={12} lg>
            Holder
          </Grid>
        </Grid>
      </Container>
    );
  }
}
