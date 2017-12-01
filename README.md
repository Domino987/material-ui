
#### Note

For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-next)
instead of Github issues. There is a StackOverflow tag called "material-next"
that you can use to tag your questions.

# [Material-Next](https://material-ui-next.com/)
[![npm package](https://img.shields.io/npm/v/@material-next/core/master.svg)](https://www.npmjs.org/package/@material-next/core)
[![CircleCI](https://img.shields.io/circleci/project/github/material-next/material-next/master.svg)](https://circleci.com/gh/material-next/material-next/tree/master)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-f81a65.svg)](https://gitter.im/callemall/material-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Coverage Status](https://img.shields.io/codecov/c/github/material-next/material-next/master.svg)](https://codecov.io/gh/material-next/material-next/branch/master)

[![PeerDependencies](https://img.shields.io/david/peer/material-next/material-next.svg)](https://david-dm.org/material-next/material-next#info=peerDependencies&view=list)
[![Dependencies](https://img.shields.io/david/material-next/material-next.svg)](https://david-dm.org/material-next/material-next)
[![DevDependencies](https://img.shields.io/david/dev/material-next/material-next.svg)](https://david-dm.org/material-next/material-next#info=devDependencies&view=list)

> Extensible [React](http://facebook.github.io/react/) components that implement [Material Design UI](https://material.io/).

## This is a fork

We've have forked the repo from `mui-org/material-ui` to `material-next/material-next`. [Find out more](https://medium.com/).

## Installation

Material-Next is available as an [npm package](https://www.npmjs.org/package/@material-next/core).

**Stable channel**
```sh
npm install --save @material-next/core
```

**Pre-release channel**
```sh
npm install --save @material-next/core@next
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Usage

Here is a quick example to get you started, it's all you need:

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from '@material-next/core/Button';

function App() {
  return (
    <Button>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Examples

Are you looking for an example project to get started?
[We host some](https://github.com/material-next/material-next/blob/master/docs/src/pages/getting-started/example-projects.md).

## Documentation

Check out our [documentation website](https://material-ui-next.com/).

## Contributing

We'd greatly appreciate any [contribution](https://github.com/material-next/material-next/blob/master/CONTRIBUTING.md) you make. :)

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/material-next/material-next/releases).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](https://github.com/material-next/material-next/blob/master/ROADMAP.md) file.

## Thanks

[<img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" width="120">](https://www.browserstack.com/)

Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers.

## License

This project is licensed under the terms of the
[MIT license](https://github.com/material-next/material-next/blob/master/LICENSE).
