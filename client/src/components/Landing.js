import React, { Component } from 'react';
import Loader from './Loader';
import GridListPictures from './GridListPictures';
import PresentationPicture from '../assets/images/brush.jpg';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'reactstrap';
import { Paper } from '@material-ui/core';
import Presentation from './Presentation';
import SnackBarMessage from './SnackBarMessage';
import ChristmasTypography from './styled/ChristmasTypography';
import PresentationPaper from './styled/PresentationPaper.js';
import Navigation from './Navigation';
const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
  typo: {
    color: '#A31438',
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

    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div>
        <Navigation />
        <Container fluid className=" mb-5">
          <Row className="justify-content-center mt-3">
            <GridListPictures />
          </Row>
          <Row className={`pt-3 pb-3 pr-0 pl-0 d-flex align-items-center ${classes.background}`}>
            <Col className=" pt-3">
              <PresentationPaper elevation={24} className="p-5">
                <ChristmasTypography className={classes.typo} align="center" variant="h6">
                  Figurines en papier mâché, subtiles et légères ou dodues et revrêches...leur point
                  commun : se faire admirer !
                </ChristmasTypography>
              </PresentationPaper>
            </Col>
            <Col xs="12" sm="4" className="pt-3">
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
          <Row className={`pt-5 pr-0 pl-0 d-flex justify-content-center align-items-center `}>
            <Col xs="10">
              <PresentationPaper elevation={24} className="p-5">
                <ChristmasTypography align="center" variant="h6">
                  Figurines faites à la main, sans utilisation de moules. Papier mâché et technique
                  mixte. Parfois sur socle. Recouvertes de papier vernis ou tissus teinté, peintes
                  avec des peintures acryliques et vernies, conçues uniquement à des fins
                  décoratives. Chaque modèle est unique.
                </ChristmasTypography>
              </PresentationPaper>
            </Col>
          </Row>
          <Presentation typo={classes.typo} />
        </Container>
        {this.props.location.message ? (
          <SnackBarMessage name={this.props.location.message} />
        ) : null}
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
