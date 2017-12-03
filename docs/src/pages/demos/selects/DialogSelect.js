import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-next/core/Button';
import { withStyles } from '@material-next/core/styles';
import Dialog, { DialogActions, DialogContent, DialogTitle } from '@material-next/core/Dialog';
import Input, { InputLabel } from '@material-next/core/Input';
import { MenuItem } from '@material-next/core/Menu';
import { FormControl } from '@material-next/core/Form';
import Select from '@material-next/core/Select';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class DialogSelect extends React.Component {
  state = {
    open: false,
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open select dialog</Button>
        <Dialog
          ignoreBackdropClick
          ignoreEscapeKeyUp
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                  native
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  input={<Input id="age-native-simple" />}
                >
                  <option value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Age</InputLabel>
                <Select
                  value={this.state.age}
                  onChange={this.handleChange('age')}
                  input={<Input id="age-simple" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);
