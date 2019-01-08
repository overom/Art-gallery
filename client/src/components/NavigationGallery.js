import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NavPaper from './styled/NavPaper.js';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class NavigationGallery extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, history } = this.props;

    return (
      <NavPaper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Tout" onClick={() => history.push('/gallery')} />
          <Tab
            label="Personnages"
            onClick={() => history.push({ pathname: '/personnages', value: 1 })}
          />
          <Tab label="Tableaux" onClick={() => history.push({ pathname: '/tableaux', value: 2 })} />
          <Tab label="Hiboux" onClick={() => history.push({ pathname: '/hiboux', value: 3 })} />
        </Tabs>
      </NavPaper>
    );
  }
}

NavigationGallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavigationGallery));
