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

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

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
          <ChristamsTab
            label="Nouveautés"
            onClick={() => history.push({ pathname: '/news', value: 1 })}
          />
          <ChristamsTab
            label="Galerie"
            onClick={() => history.push({ pathname: '/gallery', value: 2 })}
          />
          <ChristamsTab
            label="Contact"
            onClick={() => history.push({ pathname: '/contact', value: 3 })}
          />
        </Tabs>
      </Paper>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Navigation));
