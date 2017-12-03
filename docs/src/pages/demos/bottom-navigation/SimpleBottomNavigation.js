import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import BottomNavigation, { BottomNavigationButton } from '@material-next/core/BottomNavigation';
import RestoreIcon from '@material-next/icons/Restore';
import FavoriteIcon from '@material-next/icons/Favorite';
import LocationOnIcon from '@material-next/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);
