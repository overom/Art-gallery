import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Loader from './Loader';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Paper } from '@material-ui/core';
import OeuvreCard from './OeuvreCard';
import CarouselSteppers from './CarouselSteppers';
import illustationImage from '../assets/images/owl.png';
import { withStyles } from '@material-ui/core/styles';
import ChristmasTypography from './styled/ChristmasTypography';
import Navigation from './Navigation';

const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
});
class News extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.getNewOeuvres = this.getNewOeuvres.bind(this);
  }
  componentDidMount() {
    this.props.fetchOeuvre();
  }
  componentWillReceiveProps() {
    this.setState({ isLoading: false });
  }

  getNewOeuvres() {
    const { oeuvres } = this.props;
    const tab = [];
    if (oeuvres) {
      oeuvres.map(oeuvre =>
        tab.push(
          oeuvre.date
            .split('/')
            .reverse()
            .join('')
        )
      );
      const ThreeLastOeuvres = tab.sort((a, b) => b - a).slice(0, 3);
      const newCreation = oeuvres.filter(oeuvre => {
        const dateOeuvre = oeuvre.date
          .split('/')
          .reverse()
          .join('');
        return (
          dateOeuvre === ThreeLastOeuvres[0] ||
          dateOeuvre === ThreeLastOeuvres[1] ||
          dateOeuvre === ThreeLastOeuvres[2]
        );
      });

      switch (newCreation.length) {
        case 0:
          return (
            <img
              className="d-block w-100"
              src={`/api/pictures/${oeuvres[0].picture}`}
              alt={oeuvres[0].name}
            />
          );
        case 1:
          return <OeuvreCard oeuvres={newCreation[0]} />;
        default:
          return <CarouselSteppers oeuvres={newCreation} />;
      }
    }
  }

  getNewOeuvresInfo() {
    const { oeuvres, history } = this.props;
    const tab = [];
    if (oeuvres) {
      oeuvres.map(oeuvre =>
        tab.push(
          oeuvre.date
            .split('/')
            .reverse()
            .join('')
        )
      );
      const ThreeLastOeuvres = tab.sort((a, b) => b - a).slice(0, 3);
      const newCreation = oeuvres.filter(oeuvre => {
        const dateOeuvre = oeuvre.date
          .split('/')
          .reverse()
          .join('');
        return (
          dateOeuvre === ThreeLastOeuvres[0] ||
          dateOeuvre === ThreeLastOeuvres[1] ||
          dateOeuvre === ThreeLastOeuvres[2]
        );
      });
      switch (newCreation.length) {
        case 0:
          return <div> {oeuvres[0].name}</div>;
        case 1:
          return <div>{newCreation[0].description}</div>;
        default:
          return newCreation.map(oeuvre => (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push({ pathname: `/gallery/${oeuvre.id}`, id: oeuvre.id })}
              className="mb-2"
              key={oeuvre.name}
            >
              Créé le {oeuvre.date} : <strong>{oeuvre.name}</strong>
            </div>
          ));
      }
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div className={this.props.classes.background}>
        <Navigation value={this.props.location.value ? this.props.location.value : 1} />
        <Container fluid>
          <Row className="mt-4 mb-2 justify-content-center">
            <h1>Nouveautés</h1>
          </Row>
          <Row className={`justify-content-center`}>
            <img
              style={{ zIndex: '10' }}
              className="img-fluid"
              src={illustationImage}
              alt="illustation"
            />
          </Row>

          <Paper style={{ position: 'relative', bottom: '99px' }} elevation={24}>
            <Row>
              <Col xs="12" md="8">
                {this.getNewOeuvres()}
              </Col>
              <Col xs="12" md="4">
                <ChristmasTypography className="text-center mt-5" variant="h5">
                  Découvrez les dernieres creations
                </ChristmasTypography>

                <ChristmasTypography variant="h6" className="text-center mt-5">
                  {this.getNewOeuvresInfo()}
                </ChristmasTypography>
                <ChristmasTypography className="text-center mt-5" variant="subtitle2">
                  Retrouvez toutes les oeuvres dans la{' '}
                  <span onClick={() => this.props.history.push('/gallery')}>galerie</span>
                </ChristmasTypography>
              </Col>
            </Row>
          </Paper>
        </Container>
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
  )(News)
);
