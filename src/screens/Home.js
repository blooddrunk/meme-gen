import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import ImageCard from '../components/ImageCard';
import DictumEdit from '../components/DictumEdit';

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
          <Grid item xs={12} md>
            <ImageCard />
          </Grid>
          <Grid item xs={12} md>
            <DictumEdit />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
