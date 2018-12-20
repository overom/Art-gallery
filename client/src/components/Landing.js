import React, { Component } from 'react';
import Loader from './Loader';
import GridListPictures from './GridListPictures';
import PresentationPicture from '../assets/images/brush.jpg';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withStyles } from '@material-ui/core/styles';

import { Container, Row, Col } from 'reactstrap';
import { Typography, Paper } from '@material-ui/core';
import Presentation from './Presentation';
import SnackBarMessage from './SnackBarMessage';
const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
});
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    this.props.fetchOeuvre();
  }
  componentWillReceiveProps() {
    this.setState({ isLoading: false });
  }
  render() {
    const { classes } = this.props;
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');

    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div>
        <Container fluid className=" mb-5">
          <Row className="justify-content-center mt-3">
            <GridListPictures />
          </Row>
          <Row
            className={`pt-3 justify-content-center pr-0 pl-0 d-flex align-items-center ${
              classes.background
            }`}
          >
            <Col xs="12" sm="6" className="mb-4 pt-3">
              <Paper elevation={24} className="p-5">
                <Typography align="center" variant="h6">
                  Figurines en papier mâché, subtiles et légères ou dodues et revrêches...leur point
                  commun : se faire admirer !
                </Typography>
              </Paper>
            </Col>
            <Col xs="12" sm="6">
              <Paper elevation={24}>
                <img
                  width="100%"
                  className="img-fluid"
                  src={PresentationPicture}
                  alt="presentation"
                />
              </Paper>
            </Col>
          </Row>
          <Presentation />
        </Container>
        {this.props.location.message ? <SnackBarMessage /> : null}
      </div>
    );
  }
}

function mapStateToProps({ oeuvres }) {
  return { oeuvres };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    actions
  )(Landing)
);
