# Frequently Asked Questions

Stuck on a particular problem? Check some of these common gotchas first.

If you still can't find what you're looking for, you can ask the community on [Discord](https://discord.gg/MwT5uvA).
For how-to questions and other non-issues, please use [StackOverflow](https://stackoverflow.com/questions/tagged/material-next) instead of Github issues. There is a StackOverflow tag called `material-next` that you can use to tag your questions.

## Why do the fixed positioned elements move when a modal is opened?

We block the scroll as soon as a modal is opened.
This prevents interacting with the background when the modal should be the only interactive content, however, removing the scrollbar can make your **fixed positioned elements** move.
In this situation, you can apply a global `.mui-fixed` class name to tell Material-Next to handle those elements.

## How can I disable the ripple effect on the whole app?

The best solution at present is to write wrapping components for all the Material-Next components showing a ripple.
The ripple effect is exclusively coming from the `BaseButton` component.
You can find the components using the BaseButton [here](https://github.com/material-next/material-next/search?utf8=%E2%9C%93&q=%22%2F%2F+%40inheritedComponent+ButtonBase%22).
Then, all you have to do is to provide the `disableRipple` property.

## When should I use inline-style vs `withStyles()`?

As a rule of thumb, only use inline-style for dynamic style properties. The CSS alternative provides more advantages, such as:
- auto-prefixing
- better debugging
- media queries
- keyframes

## How do I combine the `withStyles()` and `withTheme()` HOCs?

There are a number of different options:

- `withTheme` option:

```js
export default withStyles(styles, { withTheme: true })(Modal);
```

- `compose()` helper function:

```js
import { compose } from 'recompose';

export default compose(
  withTheme(),
  withStyles(styles)
)(Modal);
```

- raw function chaining:

```js
export default withTheme()(withStyles(styles)(Modal));
```

## Material-Next is awesome. How can I support the project?

There are a lot of ways to support Material-Next:
- Improve [the documentation](https://github.com/material-next/material-next/tree/master/docs).- Help others to get started.- [Spread the word](https://twitter.com/MaterialNext).- Answer [StackOverflow questions](https://stackoverflow.com/questions/tagged/material-next).If you use Material-Next in a commercial project and would like to support its continued development by becoming a **Sponsor**,
or in a side or hobby project and would like to become a backer, you can do so through [OpenCollective](https://opencollective.com/material-next).

All funds raised are managed transparently, and Sponsors receive recognition in the README and on the Material-Next home page.
