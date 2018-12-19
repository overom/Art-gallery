import React, { Component } from 'react';
import FormContact from './Form/FormContact';
import { Container, Row } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-2">
          <h1>Contact</h1>
        </Row>
        <FormContact />
      </Container>
    );
  }
}

export default Contact;
