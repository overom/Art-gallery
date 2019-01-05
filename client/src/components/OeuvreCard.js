import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import ChristmasTypography from './styled/ChristmasTypography';
import ChristmasButton from './styled/ChristmasButton';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import ChristmasCardContent from './styled/ChristmasCardContent';

const styles = theme => ({
  card: {
    maxWidth: 645,
  },
  media: {
    height: 650,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  background: {
    backgroundColor: theme.palette.secondary.main,
  },
});

class OeuvreCard extends Component {
  state = { open: false };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    console.log('====================================');
    console.log(this.props);
    console.log('====================================');
    const { classes, oeuvres, history } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea
            onClick={() => history.push({ pathname: `/gallery/${oeuvres.id}`, id: oeuvres.id })}
          >
            <CardMedia
              className={classes.media}
              image={`http://localhost:5001/api/pictures/${oeuvres.picture}`}
              title={oeuvres.name}
            />
            <ChristmasCardContent>
              <ChristmasTypography gutterBottom variant="h5">
                {oeuvres.name}
              </ChristmasTypography>
            </ChristmasCardContent>
          </CardActionArea>
          <CardActions className="d-flex justify-content-between">
            <div>
              <ChristmasButton
                size="medium"
                color="primary"
                onClick={() => history.push({ pathname: `/gallery/${oeuvres.id}`, id: oeuvres.id })}
              >
                Détails
              </ChristmasButton>
              <ChristmasButton
                onClick={() => history.push({ pathname: '/contact', oeuvre: oeuvres })}
                size="medium"
                color="primary"
              >
                Acheter
              </ChristmasButton>
            </div>
            <div className="d-flex flex-row">
              <FacebookShareButton
                hashtag="figurine"
                className="mr-2"
                url={`http://localhost:3000/${this.props.match.url}/${oeuvres.id}`}
              >
                <FacebookIcon size={30} round />
              </FacebookShareButton>
              <TwitterShareButton className="mr-2" url="#">
                <TwitterIcon size={30} round />
              </TwitterShareButton>
              <WhatsappShareButton url="https://juliendenamur.com">
                <WhatsappIcon size={30} round />
              </WhatsappShareButton>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

OeuvreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(OeuvreCard));
