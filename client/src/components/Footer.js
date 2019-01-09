import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const style = {
  backgroundColor: 'rgb(52,58,63)',
  textAlign: 'center',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

const phantom = {
  display: 'block',
  maxHeight: '200px',
  width: '100%',
  padding: '20px',
};

export default () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <Container fluid className="text-light">
          <Row className="bg-light p-0 text-dark text-center">
            <Col style={{ fontSize: '55%' }}>
              <span>
                Copyright © 2019 - patriciadenamur.com created by{' '}
                <a
                  href="http://www.romaindenamur.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Romain Denamur
                </a>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
