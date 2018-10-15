/* eslint-disable no-console */

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { create, SheetsRegistry } from 'jss';
import jssCache from '@material-ui/core/styles/jssCache';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import Pricing from 'docs/src/pages/page-layout-examples/pricing/Pricing';

function renderFullPage(html, css) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Material-UI</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
      </body>
    </html>
  `;
}

const sheetsCache = null;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

// Configure JSS
const jss = create({
  plugins: [jssCache(), ...jssPreset().plugins],
});

function handleRender(req, res) {
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  const html = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()} sheetsCache={sheetsCache}>
        <Pricing />
      </MuiThemeProvider>
    </JssProvider>,
  );
  const css = sheetsRegistry.toString();
  res.send(renderFullPage(html, css));
}

const app = express();
app.use(handleRender);

const port = 3010;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
