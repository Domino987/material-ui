/* eslint-disable no-underscore-dangle */

import { create, SheetsRegistry } from 'jss';
import rtl from 'jss-rtl';
import { preset } from '@material-next/core/styles/withStyles';
import { createMuiTheme } from '@material-next/core/styles';
import blue from '@material-next/core/colors/blue';
import pink from '@material-next/core/colors/pink';
import createGenerateClassName from '@material-next/core/styles/createGenerateClassName';

export function getTheme(theme) {
  return createMuiTheme({
    direction: theme.direction,
    palette: {
      primary: blue,
      secondary: pink,
      type: theme.paletteType,
    },
  });
}

const theme = getTheme({
  direction: 'ltr',
  paletteType: 'light',
});

// Configure JSS
const jss = create({ plugins: [...preset().plugins, rtl()] });
jss.options.createGenerateClassName = createGenerateClassName;
jss.options.insertionPoint = 'insertion-point-jss';

function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: jss.options.createGenerateClassName(),
  };
}

export default function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
