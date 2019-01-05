import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import ChristamsTab from './styled/ChristmasTab';

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
          <ChristamsTab label="Accueil" onClick={() => history.push('/')} />
          <ChristamsTab label="Nouveautés" onClick={() => history.push('/news')} />
          <ChristamsTab label="Galerie" onClick={() => history.push('/gallery')} />
          <ChristamsTab label="Contact" onClick={() => history.push('/contact')} />
        </Tabs>
      </Paper>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
