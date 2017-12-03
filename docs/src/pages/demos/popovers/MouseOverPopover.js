import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-next/core/Popover';
import Typography from '@material-next/core/Typography';
import { withStyles } from '@material-next/core/styles';
import Grow from '@material-next/core/transitions/Grow';
import Paper from '@material-next/core/Paper';
import { Manager, Target, Popper } from 'react-popper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class MouseOverPopover extends Component {
  state = {
    anchorEl: null,
    popperOpen: false,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePopperOpen = () => {
    this.setState({ popperOpen: true });
  };

  handlePopperClose = () => {
    this.setState({ popperOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, popperOpen } = this.state;
    const open = !!anchorEl;

    return (
      <div className="wrapper">
        <Typography
          onFocus={this.handlePopoverOpen}
          onMouseOver={this.handlePopoverOpen}
          onBlur={this.handlePopoverClose}
          onMouseOut={this.handlePopoverClose}
        >
          Hover with a Popover.
        </Typography>
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onRequestClose={this.handlePopoverClose}
        >
          <Typography>I use Popover.</Typography>
        </Popover>
        <Manager>
          <Target>
            <Typography
              aria-describedby="react-popper-tooltip"
              onFocus={this.handlePopperOpen}
              onMouseOver={this.handlePopperOpen}
              onMouseOut={this.handlePopperClose}
              onBlur={this.handlePopperClose}
            >
              Hover with react-popper.
            </Typography>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={popperOpen}
            className={!popperOpen ? classes.popperClose : ''}
          >
            <Grow in={popperOpen} style={{ transformOrigin: '0 0 0' }}>
              <Paper
                id="react-popper-tooltip"
                className={classes.paper}
                role="tooltip"
                aria-hidden={!popperOpen}
                elevation={8}
              >
                <Typography>I use react-popper.</Typography>
              </Paper>
            </Grow>
          </Popper>
        </Manager>
      </div>
    );
  }
}

MouseOverPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MouseOverPopover);
