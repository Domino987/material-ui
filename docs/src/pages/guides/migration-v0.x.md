# Migration from Material-UI v0.x

## FAQ

### Woah - the API is way different! Does that mean 1.0 is completely different, I’ll have to learn the basics all over again, and migrating will be practically impossible?

I’m glad you asked! The answer is no. The core concepts haven’t changed.
You will notice that the API provides more flexibility, but this has a cost.
We have been making lower-level components, abstracting less complexity.

### What motivated such large change?

Material-UI was started [3 years ago](https://github.com/material-next/material-next/commit/28b768913b75752ecf9b6bb32766e27c241dbc46).
The ecosystem has evolved a lot since then, we have also learned a lot.
[@nathanmarks](https://github.com/nathanmarks/) started an ambitious task, rebuilding Material-UI from the **ground-up**
taking advantage of this knowledge to address long-standing issues. To name some of the major changes:
- New styling solution using CSS-in-JS (better [customization](/customization/overrides) power, better performance)
- New [theme handling](/customization/themes) (nesting, self-supporting, etc.)
- Blazing fast documentation thanks to [Next.js](https://github.com/zeit/next.js)
- Way better [test coverage](/guides/testing) (99%+, run on all the major browsers, [visual regression tests](https://www.argos-ci.com/material-next/material-next))
- Full [server-side rendering](/guides/server-rendering) support
- Wide range of [supported browsers](/getting-started/supported-platforms)

Curious to learn more about it? You can checkout our [Q&A on the v1 version](/discover-more/roadmap#q-amp-a-with-the-v1-version).

### Where should I start in a migration?

1. Start by installing the v1.x version of Material-Next along side the v0.x version of Material-UI.

```sh
npm install --save material-ui @material-next/core
```
then
```js
import FlatButton from 'material-ui/FlatButton'; // Material-UI v0.x
import Button from '@material-next/core/Button'; // Material-Next v1.x
```

2. Run [the migration helper](https://github.com/material-next/material-next/tree/master/packages/material-next-codemod) on your project.
3. After that, you are free to migrate one component instance at the time.

## Components

### Svg Icon

First, run [the migration helper](https://github.com/material-next/material-next/tree/master/packages/material-ui-codemod) on your project.

### Flat Button

```diff
-import FlatButton from 'material-ui/FlatButton';
+import Button from '@material-next/core/Button';

-<FlatButton />
+<Button />
```

### Raised Button

```diff
-import RaisedButton from 'material-ui/RaisedButton';
+import Button from '@material-next/core/Button';

-<RaisedButton />
+<Button raised />
```

### To be continued…

You successfully migrated your app and wish to help the community?
Please help us! We need to finish this migration guide. Any pull request is welcomed 😊.
