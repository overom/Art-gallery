import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PresentationPicture from '../assets/images/arttable.jpg';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
});

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Row
          className={`pt-5 pb-5 justify-content-center pr-0 pl-0 d-flex align-items-center ${
            classes.background
          }`}
        >
          <Col xs="12" sm="6">
            <Paper elevation={24}>
              <img
                width="100%"
                className="img-fluid"
                src={PresentationPicture}
                alt="presentation"
              />
            </Paper>
          </Col>
          <Col xs="12" md="6" className="mt-3">
            <Paper elevation={24} className="p-5">
              <Typography variant="h6">Galerie</Typography>
              <Typography variant="body1">
                Cette galerie d'art est née de l'envie de Patricia Denamur de faire partager sa
                passion des figurines. Depuis 3 ans elle confectionne des peties dames, petit sac à
                mains en bandoulière ou bras chargés de fleurs...
              </Typography>
              <Typography variant="body1">Venez les découvrir, elles vous attendent...</Typography>
              <Typography variant="h6">Technique utilisée</Typography>
              <Typography variant="body1">
                La figurine est réalisée en papier mâché, recouverte d'argile, sans utilisation de
                moules. Les cheveux sont en mohair naturel pour la plupart, les fleus sont
                naturelles (petits boutons de roses séchées). La figurine est uniquement créée à des
                fins décoratives, à traiter avec beaucoup d'attention et à protéger de l'humidité.
              </Typography>
              <Typography variant="body1">Chaque figurine est unique.</Typography>
              <Typography variant="h6">Biographie</Typography>
              <Typography variant="body1">Patricia Denamur est une artiste autodidacte.</Typography>
              <Typography variant="body1">
                Du pastel sec qu'elle a pratiqué durant des années elle est passée au papier mâché
                qu'elle affectionne aujourd'hui.
              </Typography>
              <Typography variant="body1">
                Guidé par le plaisir d'imaginer, de façonner, de décorer...elle donne vie à des
                personnages miniatures.
              </Typography>
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(Presentation);
