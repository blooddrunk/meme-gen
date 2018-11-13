import * as React from 'react';
import * as styledComponents from 'styled-components';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const ThemeContext = React.createContext(theme);

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
