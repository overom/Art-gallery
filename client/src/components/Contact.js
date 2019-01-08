import React, { Component } from 'react';
import FormContact from './Form/FormContact';
import { Container, Row } from 'reactstrap';
import Navigation from './Navigation';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navigation value={this.props.location.value ? this.props.location.value : 3} />
        <Container>
          <Row className="justify-content-center mt-2">
            <h1>Contact</h1>
          </Row>
          <FormContact oeuvre={this.props.location.oeuvre} />
        </Container>
      </div>
    );
  }
}

export default Contact;
