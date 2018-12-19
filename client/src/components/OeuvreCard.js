import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class OeuvreCard extends Component {
  state = { open: false };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, oeuvres } = this.props;
    console.log('====================================');
    console.log(oeuvres);
    console.log('====================================');

    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea onClick={this.handleClickOpen}>
            <CardMedia
              className={classes.media}
              image={`/api/pictures/${oeuvres.picture}`}
              title={oeuvres.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {oeuvres.name}
              </Typography>

              <Typography component="p" variant="subtitle1">
                {`${oeuvres.price} €`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" onClick={this.handleClickOpen}>
              Détails
            </Button>
            <Button size="large" color="primary">
              Acheter
            </Button>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {oeuvres.name}
              </Typography>
              <Button color="inherit">Acheter</Button>
            </Toolbar>
          </AppBar>
          <img src={`/api/pictures/${oeuvres.picture}`} alt={oeuvres.name} />
          <List>
            <ListItem button>
              <ListItemText className="text-center" primary="Details" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Taille" secondary={`${oeuvres.size} cm`} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Description" secondary={oeuvres.description} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Prix" secondary={`${oeuvres.price} €`} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Matériaux Utilisées" secondary={`${oeuvres.meterials}`} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Créé le" secondary={`${oeuvres.date}`} />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

OeuvreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OeuvreCard);
