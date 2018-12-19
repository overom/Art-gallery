import React, { Component } from 'react';
import FormContact from './Form/FormContact';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <FormContact />
      </div>
    );
  }
}

export default Contact;
