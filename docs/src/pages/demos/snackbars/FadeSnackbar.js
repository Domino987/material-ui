import React from 'react';
import Button from '@material-next/core/Button';
import Snackbar from '@material-next/core/Snackbar';
import Fade from '@material-next/core/transitions/Fade';

class FadeSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Open with Fade Transition</Button>
        <Snackbar
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Fade}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default FadeSnackbar;
