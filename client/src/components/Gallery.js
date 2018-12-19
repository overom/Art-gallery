import React, { Component } from 'react';
import OeuvreCard from './OeuvreCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Loader from './Loader';
import { Container, Row, Col } from 'reactstrap';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchOeuvre();
  }

  render() {
    const { oeuvres } = this.props;
    return (
      <Container>
        <Row className="justify-content-center mt-4">
          <h1>Galerie</h1>
        </Row>

        <Row className="justify-content-center mt-4">
          {!oeuvres ? (
            <Loader />
          ) : (
            oeuvres.map(oeuvre => {
              return (
                <Col key={oeuvre.id} xs="12" sm="6" md="6" lg="3" className="mb-3">
                  <OeuvreCard oeuvres={oeuvre} />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    );
  }
}
function mapStateToProps({ oeuvres }) {
  return { oeuvres };
}

export default connect(
  mapStateToProps,
  actions
)(Gallery);
