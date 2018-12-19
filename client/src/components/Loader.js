import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container, Row, Col } from 'reactstrap';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

function Loader(props) {
  return (
    <Container fluid style={{ position: 'absolute', bottom: '50%' }}>
      <Row className="align-items-center h-100">
        <Col className="mx-auto text-center">
          <h1 className="mb-3">Chargement...</h1>
          <CircularProgress size={80} color="primary" />
        </Col>
      </Row>
    </Container>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);
