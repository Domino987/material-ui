import React from 'react';
import Paper from '@material-next/core/Paper';
import Tabs, { Tab } from '@material-next/core/Tabs';
import PhoneIcon from '@material-next/icons/Phone';
import FavoriteIcon from '@material-next/icons/Favorite';
import PersonPinIcon from '@material-next/icons/PersonPin';

export default class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="accent"
          textColor="accent"
        >
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
      </Paper>
    );
  }
}
