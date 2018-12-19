import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/fr';
import OeuvreCard from './OeuvreCard';
import CarouselSteppers from './CarouselSteppers';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getNewOeuvres = this.getNewOeuvres.bind(this);
  }
  componentDidMount() {
    this.props.fetchOeuvre();
  }

  getNewOeuvres() {
    const { oeuvres } = this.props;
    if (oeuvres) {
      const day = moment()
        .format('L')
        .split('/');
      const newCreation = oeuvres.filter(oeuvre => {
        const date = oeuvre.date.split('/');
        return date[2] > day[2] - 1;
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
    const { oeuvres } = this.props;
    if (oeuvres) {
      const day = moment()
        .format('L')
        .split('/');
      const newCreation = oeuvres.filter(oeuvre => {
        const date = oeuvre.date.split('/');
        return date[2] > day[2] - 1;
      });
      switch (newCreation.length) {
        case 0:
          return <div> {oeuvres[0].name}</div>;
        case 1:
          return <div>{newCreation[0].description}</div>;
        default:
          return newCreation.map(oeuvre => (
            <div className="mb-2" key={oeuvre.name}>
              Créé le {oeuvre.date} : <strong>{oeuvre.name}</strong>
            </div>
          ));
      }
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Nouveautés</h1>
          </Row>
          <Paper elevation={24}>
            <Row>
              <Col xs="12" md="6">
                {this.getNewOeuvres()}
              </Col>
              <Col xs="12" md="6">
                <Typography className="text-center mt-5" variant="h5">
                  Découvrez les dernieres creations
                </Typography>

                <Typography variant="h6" className="text-center mt-5">
                  {this.getNewOeuvresInfo()}
                </Typography>
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

export default connect(
  mapStateToProps,
  actions
)(News);
