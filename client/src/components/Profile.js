import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Button } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  headband: { backgroundColor: theme.palette.secondary.main },
});
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleRedirect() {
    return this.props.history.push('/');
  }
  render() {
    const { classes } = this.props;
    const user = this.props.auth;
    if (!user || user === null) {
      return (
        <Container>
          <Row className="mt-5 justify-content-center">
            <h4>Vous devez être connecté(e) pour avoir accès à votre compte</h4>
          </Row>
          <Row className="justify-content-center mt-5 ">
            <div className="d-flex justify-content-end" style={{ pointerEvents: 'none' }}>
              <SocialIcon className="mr-2" url="http://google.com" />
            </div>
            <div className="d-flex justify-content-start">
              <Button color="primary" variant="contained" href="/auth/google">
                Se connecter avec Google
              </Button>
            </div>
          </Row>
        </Container>
      );
    }

    return (
      <Container>
        <Row>
          <h1>Mon compte</h1>
        </Row>
        <Row className={classes.headband}>
          <Col xs="5">
            <h6>{`Bonjour ${user.name}`}</h6>
          </Col>
          <Col xs="7">
            <p> Bienvenue sur votre espace client</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default withStyles(styles)(connect(mapStateToProps)(Profile));
