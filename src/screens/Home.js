import React, { Component } from 'react';
import styled from 'styled-components';

import ImageCard from '../components/ImageCard';
import DictumEdit from '../components/DictumEdit';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 24px;
  align-items: start;
  max-width: 1200px;
  min-width: 300px;
  margin: auto;
  padding-top: 24px;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ImageCard />
        <DictumEdit />
      </Container>
    );
  }
}
