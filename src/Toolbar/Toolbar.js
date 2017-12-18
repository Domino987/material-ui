import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import withStyles from '../styles/withStyles';

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
  },
  gutters: theme.mixins.gutters({}),
});

function Toolbar(props) {
  const { children, classes, className: classNameProp, disableGutters, ...other } = props;

  const className = classNames(
    classes.root,
    {
      [classes.gutters]: !disableGutters,
    },
    classNameProp,
  );

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
}

Toolbar.propTypes = {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: PropTypes.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: PropTypes.bool,
};

Toolbar.defaultProps = {
  disableGutters: false,
};

export default withStyles(styles, { name: 'MuiToolbar' })(Toolbar);
