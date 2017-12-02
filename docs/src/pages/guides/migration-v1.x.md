# Migration from Material-UI v1.x

## FAQ

### What's the difference with Material-UI v1.x?

Material-Next is a drop in replacement for `material-ui@1.0.0-beta.22`.
The migration is a simple as the following change:

**package.json**
```diff
  "dependencies": {
-   "material-ui": "^1.0.0-beta.22",
-   "material-ui-icons": "^1.0.0-beta.17",
+   "@material-next/core": "^1.0.0-beta.22",
+   "@material-next/icons": "^1.0.0-beta.22",
    "react": "^16.2.0"
  },
```

The sooner the migration is done, the simpler it's going to be. We will try to keep this repository in sync with future releases of Material-UI v1.x. However, the changes than doesn't align with the vision of the project won't be cherry-picked.
We will also keep the breaking changes as minimal as possible here to let people the time to migrate.

### What motivated such fork?

[Find out more](https://medium.com/).
