import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.secondary.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class GridListPictures extends Component {
  componentDidMount() {
    this.props.fetchOeuvre();
  }

  render() {
    const { classes, oeuvres } = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          <div />
          {oeuvres &&
            oeuvres.map(oeuvres => (
              <GridListTile key={oeuvres.name}>
                <img
                  src={`http://localhost:5001/api/pictures/${oeuvres.picture}`}
                  alt={oeuvres.name}
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

GridListPictures.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ oeuvres }) {
  return { oeuvres };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    actions
  )(GridListPictures)
);
