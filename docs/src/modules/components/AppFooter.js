import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import Typography from '@material-next/core/Typography';
import Grid from '@material-next/core/Grid';
import Link from 'docs/src/modules/components/Link';

const styleSheet = theme => ({
  root: {
    overflow: 'auto',
  },
  layout: {
    padding: theme.spacing.unit * 6,
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.layout}>
        <Typography type="title" gutterBottom>
          Quick Links
        </Typography>
        <Typography type="subheading" component="div">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="https://github.com/material-next/material-next">GitHub</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="https://twitter.com/MaterialNext">Twitter</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="https://github.com/material-next/material-next/tree/master/examples">
                    Examples
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link href="/discover-more/community">Community</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="/discover-more/roadmap">Roadmap</Link>
                </li>
                <li className={classes.listItem}>
                  <Link href="/discover-more/team">Team</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppFooter);
