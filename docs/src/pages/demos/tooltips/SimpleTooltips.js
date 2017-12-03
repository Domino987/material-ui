import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import AddIcon from '@material-next/icons/Add';
import Button from '@material-next/core/Button';
import DeleteIcon from '@material-next/icons/Delete';
import IconButton from '@material-next/core/IconButton';
import Typography from '@material-next/core/Typography';
import Tooltip from '@material-next/core/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
});

function SimpleTooltips(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip id="tooltip-icon" title="Delete" placement="bottom">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip id="tooltip-fab" className={classes.fab} title="Add" placement="bottom">
        <Button fab color="primary" aria-label="Add">
          <AddIcon />
        </Button>
      </Tooltip>
      <br />
      <br />
      <Typography>The fab on the right is absolutly positionned:</Typography>
      <Tooltip placement="bottom" title="Position absolute">
        <Button fab color="accent" className={props.classes.absolute}>
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTooltips);
