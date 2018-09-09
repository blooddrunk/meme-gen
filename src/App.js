import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import theme from './theme';
import Root from './screens/Root';

// const styleNode = document.createComment('jss-insertion-point');
// document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Fragment>
            <Root />
            <CssBaseline />
          </Fragment>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;
