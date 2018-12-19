import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Navigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, history } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          fullWidth
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Accueil" onClick={() => history.push('/')} />
          <Tab label="Nouveauté" onClick={() => history.push('/news')} />
          <Tab label="Galerie" onClick={() => history.push('/gallery')} />
          <Tab label="Contact" onClick={() => history.push('/contact')} />
        </Tabs>
      </Paper>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
