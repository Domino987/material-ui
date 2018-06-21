// @inheritedComponent ButtonBase

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { fade } from '../styles/colorManipulator';
import ButtonBase from '../ButtonBase';
import { capitalize } from '../utils/helpers';

export const styles = theme => ({
  root: {
    ...theme.typography.button,
    lineHeight: '1.4em', // Improve readability for multiline button.
    boxSizing: 'border-box',
    minWidth: theme.spacing.unit * 11,
    minHeight: 36,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    borderRadius: 4,
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  },
  label: {
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  text: {},
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  flat: {}, // legacy
  flatPrimary: {}, // legacy
  flatSecondary: {}, // legacy
  outlined: {
    border: `1px solid ${
      theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
    }`,
  },
  contained: {
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    '&$focusVisible': {
      boxShadow: theme.shadows[6],
    },
    '&:active': {
      boxShadow: theme.shadows[8],
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    },
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.grey[300],
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  raised: {}, // legacy
  raisedPrimary: {}, // legacy
  raisedSecondary: {}, // legacy
  fab: {
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    '&:active': {
      boxShadow: theme.shadows[12],
    },
  },
  extendedFab: {
    borderRadius: theme.spacing.unit * 3,
    padding: `0 ${theme.spacing.unit * 2}px`,
    width: 'initial',
    minWidth: theme.spacing.unit * 6,
    height: theme.spacing.unit * 6,
  },
  focusVisible: {},
  disabled: {},
  colorInherit: {
    color: 'inherit',
  },
  mini: {
    width: 40,
    height: 40,
  },
  sizeSmall: {
    padding: `${theme.spacing.unit - 1}px ${theme.spacing.unit}px`,
    minWidth: theme.spacing.unit * 8,
    minHeight: 32,
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
    minWidth: theme.spacing.unit * 14,
    minHeight: 40,
    fontSize: theme.typography.pxToRem(15),
  },
  fullWidth: {
    width: '100%',
  },
});

function Button(props) {
  const {
    children,
    classes,
    className: classNameProp,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    focusVisibleClassName,
    mini,
    size,
    variant,
    ...other
  } = props;

  const fab = variant === 'fab' || variant === 'extendedFab';
  const contained = variant === 'contained' || variant === 'raised';
  const text = variant === 'text' || variant === 'flat' || variant === 'outlined';
  const className = classNames(
    classes.root,
    {
      [classes.fab]: fab,
      [classes.mini]: fab && mini,
      [classes.extendedFab]: variant === 'extendedFab',
      [classes.text]: text,
      [classes.textPrimary]: text && color === 'primary',
      [classes.textSecondary]: text && color === 'secondary',
      [classes.flat]: variant === 'flat',
      [classes.flatPrimary]: variant === 'flat' && color === 'primary',
      [classes.flatSecondary]: variant === 'flat' && color === 'secondary',
      [classes.contained]: contained || fab,
      [classes.containedPrimary]: (contained || fab) && color === 'primary',
      [classes.containedSecondary]: (contained || fab) && color === 'secondary',
      [classes.raised]: variant === 'raised' || fab,
      [classes.raisedPrimary]: (variant === 'raised' || fab) && color === 'primary',
      [classes.raisedSecondary]: (variant === 'raised' || fab) && color === 'secondary',
      [classes.outlined]: variant === 'outlined',
      [classes[`size${capitalize(size)}`]]: size !== 'medium',
      [classes.disabled]: disabled,
      [classes.fullWidth]: fullWidth,
      [classes.colorInherit]: color === 'inherit',
    },
    classNameProp,
  );

  return (
    <ButtonBase
      className={className}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={classNames(classes.focusVisible, focusVisibleClassName)}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
}

Button.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * @ignore
   */
  type: PropTypes.string,
  /**
   * The type of button.
   */
  variant: PropTypes.oneOf([
    'text',
    'flat',
    'outlined',
    'contained',
    'raised',
    'fab',
    'extendedFab',
  ]),
};

Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text',
};

export default withStyles(styles, { name: 'MuiButton' })(Button);
