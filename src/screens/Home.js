import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { decorate, observable } from 'mobx';
import compose from 'recompose/compose';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ImageCard from '../components/ImageCard';
import DictumEdit from '../components/DictumEdit';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 24px;
  align-items: start;
  max-width: 1200px;
  min-width: 300px;
  margin: auto;
  padding-top: 24px;

  @media (max-width: 800px) {
    grid-template-columns: none;
  }
`;

const Alert = styled(SnackbarContent)`
  grid-column: 1 / span 2;
  width: 100%;
  max-width: 100%;
  background-color: ${props => props.theme.palette.error.light};

  @supports (display: grid) {
    display: none;
  }
`;

class Home extends Component {
  isAlertVisible = true;

  handleAlertClose = () => {
    this.isAlertVisible = false;
  };

  render() {
    const { theme } = this.props;

    return (
      <Container>
        {this.isAlertVisible && (
          <Alert
            message="Your browser seems to be out of date so that it lacks support of CSS Grid Layout."
            theme={theme}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleAlertClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        )}
        <ImageCard />
        <DictumEdit />
      </Container>
    );
  }
}

decorate(Home, {
  isAlertVisible: observable,
});
const enhance = compose(
  withTheme(),
  observer
);
export default enhance(Home);
