import React from 'react';
import Paper from '@material-next/core/Paper';
import Tabs, { Tab } from '@material-next/core/Tabs';
import PhoneIcon from '@material-next/icons/Phone';
import FavoriteIcon from '@material-next/icons/Favorite';
import PersonPinIcon from '@material-next/icons/PersonPin';

export default class IconTabs extends React.Component {
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
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<PhoneIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<PersonPinIcon />} />
        </Tabs>
      </Paper>
    );
  }
}
