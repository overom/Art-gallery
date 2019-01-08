import React, { Component } from 'react';
import OeuvreCard from './OeuvreCard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loader from './Loader';
import { Container, Row, Col } from 'reactstrap';
import NavigationGallery from './NavigationGallery';
import Navigation from './Navigation';

class HibouxGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchHiboux();
  }

  render() {
    const { hiboux } = this.props;

    return (
      <div>
        <Navigation value={2} />
        <NavigationGallery value={this.props.location.value ? this.props.location.value : 3} />
        <Container fluid>
          <Row className="justify-content-center mt-4">
            <h1>Galerie</h1>
          </Row>

          <Row className="justify-content-center mt-4">
            {!hiboux ? (
              <Loader />
            ) : (
              hiboux.reverse().map(hibou => {
                return (
                  <Col key={hibou.id} xs="12" sm="6" md="6" lg="4" className="mb-3">
                    <OeuvreCard oeuvres={hibou} />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
function mapStateToProps({ hiboux }) {
  return { hiboux };
}

export default connect(
  mapStateToProps,
  actions
)(HibouxGallery);
