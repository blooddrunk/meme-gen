import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { randomDictum } from '../components/helpers';
import ImageCard from '../components/ImageCard';
import DictumEdit from '../components/DictumEdit';

const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding-top: 24px;
`;

export default class Home extends Component {
  state = {
    dictum: randomDictum(),
    author: '鲁迅',
  };

  render() {
    const { dictum, author } = this.state;

    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={12} md>
            <ImageCard dictum={dictum} author={author} />
          </Grid>
          <Grid item xs={12} md>
            <DictumEdit />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
