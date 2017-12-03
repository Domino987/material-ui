import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import BottomNavigation, { BottomNavigationButton } from '@material-next/core/BottomNavigation';
import RestoreIcon from '@material-next/icons/Restore';
import FavoriteIcon from '@material-next/icons/Favorite';
import LocationOnIcon from '@material-next/icons/LocationOn';
import FolderIcon from '@material-next/icons/Folder';

const styles = {
  root: {
    width: 500,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationButton label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationButton label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationButton label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationButton label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
