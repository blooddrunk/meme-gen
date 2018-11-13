import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { create, JSSOptions } from 'jss';
import { JssProvider } from 'react-jss';
import { createGenerateClassName, jssPreset, MuiThemeProvider } from '@material-ui/core/styles';

import { theme, ThemeContext } from './theme';
import { rootStore, StoreContext } from './stores';
import { Root } from './screens/Root';

// const styleNode = document.createComment('jss-insertion-point');
// document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
} as JSSOptions);

export class App extends Component {
  render() {
    return (
      <StoreContext.Provider value={rootStore}>
        <ThemeContext.Provider value={theme}>
          <MuiThemeProvider theme={theme}>
            <JssProvider jss={jss} generateClassName={generateClassName}>
              <Fragment>
                <Root />
                <CssBaseline />
              </Fragment>
            </JssProvider>
          </MuiThemeProvider>
        </ThemeContext.Provider>
      </StoreContext.Provider>
    );
  }
}
