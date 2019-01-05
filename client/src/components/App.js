import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NavBarMain from './NavBarMain';
import Profile from './Profile';
import News from './News';
import Gallery from './Gallery';
import Contact from './Contact';
import Landing from './Landing';
import { Helmet } from 'react-helmet';
import '../assets/styles/main.css';
import 'typeface-roboto';
import Details from './Details';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <style>
              {'body { background-color: #90a4ae; font-family: HelveticaNeue-Light, Helvetica }'}
            </style>
          </Helmet>
          <NavBarMain />
          <Route exact path="/" component={Landing} />

          <Route path="/news" component={News} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/gallery/:name" component={Details} />
          <Route path="/myaccount" component={Profile} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
