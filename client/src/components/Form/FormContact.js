import React, { Component } from 'react';
import { Row } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Button } from '@material-ui/core';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';
import SnackBarMessage from '../SnackBarMessage';

const sujet = [
  {
    value: 'Acheter une oeuvre',
  },
  {
    value: 'Question technique',
  },
  {
    value: 'Autre',
  },
];

class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      sujet: '',
      message: '',
      state: false,
      date: moment().format('LLL'),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(e) {
    const { name, email, sujet, message, date, state } = this.state;
    e.preventDefault();
    axios.post('/api/contact', { name, email, sujet, message, date, state });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row className="justify-content-center">
            <TextField
              fullWidth
              required
              label="Votre nom"
              value={this.state.name}
              onChange={this.handleChange('name')}
            />
          </Row>
          <Row className="mt-3">
            <TextField
              fullWidth
              required
              label="Votre Email"
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
          </Row>
          <Row>
            <TextField
              className="mt-3"
              fullWidth
              required
              select
              label="Sujet du message"
              value={this.state.sujet}
              onChange={this.handleChange('sujet')}
              helperText="Merci de choisir un sujet"
              margin="normal"
            >
              {sujet.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Row>
          <Row className="mt-3">
            <TextField
              multiline
              required
              fullWidth
              variant="outlined"
              rows="4"
              label="Votre message"
              value={this.state.message}
              onChange={this.handleChange('message')}
            />
          </Row>
          <Row className="justify-content-center">
            <Button type="submit" className="mt-3" variant="contained" color="primary">
              Envoyé
            </Button>
          </Row>
        </form>
        <SnackBarMessage />
      </div>
    );
  }
}

export default FormContact;
