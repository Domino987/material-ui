import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from '@material-next/core/Menu';
import Paper from '@material-next/core/Paper';
import { withStyles } from '@material-next/core/styles';
import { ListItemIcon, ListItemText } from '@material-next/core/List';
import InboxIcon from '@material-next/icons/MoveToInbox';
import DraftsIcon from '@material-next/icons/Drafts';
import SendIcon from '@material-next/icons/Send';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      background: theme.palette.primary[500],
      '& $text, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  text: {},
  icon: {},
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <Paper>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Sent mail" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Drafts" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText classes={{ text: classes.text }} inset primary="Inbox" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);
