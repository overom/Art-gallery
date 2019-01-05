import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PresentationPicture from '../assets/images/work-shop.jpg';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ChristmasTypography from './styled/ChristmasTypography';
import PresentationPaper from './styled/PresentationPaper.js.js';

const styles = theme => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
  fontsize: {
    fontSize: '50px',
  },
  typo: {
    color: '#A31438',
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
          className={`pt-5 pb-5 justify-content-center pr-0 pl-0 d-flex mt-5 ${classes.background}`}
        >
          <Col className="justify-content-center d-flex align-items-center mt-3" xs="12" md="4">
            <Paper style={{ maxHeight: '390px', maxWidth: '390px' }} elevation={24}>
              <img
                style={{ maxHeight: '390px', maxWidth: '390px' }}
                className=" img-fluid"
                src={PresentationPicture}
                alt="presentation"
              />
            </Paper>
          </Col>
          <Col className="justify-content-center d-flex align-items-center mt-3" xs="12" md="8">
            <PresentationPaper elevation={24} className="p-5">
              <ChristmasTypography className={classes.typo} variant="h6">
                Galerie
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                Cette galerie d'art est née de l'envie de Patricia Denamur de faire partager sa
                passion des figurines. Depuis 3 ans elle confectionne des peties dames, petit sac à
                mains en bandoulière ou bras chargés de fleurs...
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                Venez les découvrir, elles vous attendent...
              </ChristmasTypography>
              <ChristmasTypography className={classes.typo} variant="h6">
                Technique utilisée
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                La figurine est réalisée en papier mâché, recouverte d'argile, sans utilisation de
                moules. Les cheveux sont en mohair naturel pour la plupart, les fleus sont
                naturelles (petits boutons de roses séchées). La figurine est uniquement créée à des
                fins décoratives, à traiter avec beaucoup d'attention et à protéger de l'humidité.
              </ChristmasTypography>
              <ChristmasTypography variant="body1">Chaque figurine est unique.</ChristmasTypography>
              <ChristmasTypography className={classes.typo} variant="h6">
                Biographie
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                Patricia Denamur est une artiste autodidacte.
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                Du pastel sec qu'elle a pratiqué durant des années elle est passée au papier mâché
                qu'elle affectionne aujourd'hui.
              </ChristmasTypography>
              <ChristmasTypography variant="body1">
                Guidé par le plaisir d'imaginer, de façonner, de décorer...elle donne vie à des
                personnages miniatures.
              </ChristmasTypography>
            </PresentationPaper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(Presentation);
