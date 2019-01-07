import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { AppBar, Toolbar, IconButton, ListItemText, ListItem, Divider } from '@material-ui/core';
import ChristmasTypography from './styled/ChristmasTypography';
import ChristmasButton from './styled/ChristmasButton';
import ChristmasList from './styled/ChristmasList';

const styles = theme => ({
  card: {
    maxWidth: 645,
  },
  media: {
    height: 450,
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

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, oeuvres: '' };
  }

  componentDidMount() {
    axios
      .get(
        this.props.location.id
          ? `/api/oeuvre/${this.props.location.id}`
          : `/api/oeuvre/${this.props.match.params.name}`
      )
      .then(res => this.setState({ oeuvres: res.data }));
  }

  handleClose = () => {
    this.props.history.goBack();
  };

  material(materiaux) {
    return materiaux.split(',').join(', ');
  }

  render() {
    const { oeuvres } = this.state;
    const { classes, history } = this.props;
    return (
      oeuvres && (
        <div>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <ChristmasTypography variant="h6" color="inherit" className={classes.flex}>
                {oeuvres.name}
              </ChristmasTypography>
              <ChristmasButton
                onClick={() => history.push({ pathname: '/contact', oeuvre: oeuvres })}
                color="inherit"
              >
                Acheter
              </ChristmasButton>
            </Toolbar>
          </AppBar>
          <div className={classes.background}>
            <img
              width="100%"
              style={{
                maxWidth: '900px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              src={`/api/pictures/${oeuvres.picture}`}
              alt={oeuvres.name}
            />
          </div>
          <ChristmasList>
            <ListItem button>
              <ListItemText disableTypography className="text-center" primary="Details" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText disableTypography secondary={`${oeuvres.name}`} />
            </ListItem>

            <ListItem button>
              <ListItemText
                disableTypography
                primary="Taille : "
                secondary={`${oeuvres.size} cm`}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                disableTypography
                primary="Description : "
                secondary={oeuvres.description}
              />
            </ListItem>

            <ListItem button>
              <ListItemText
                disableTypography
                primary="Matériaux Utilisées : "
                secondary={`${this.material(oeuvres.materials)}`}
              />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary="Créé le " secondary={`${oeuvres.date}`} />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary="Prix : " secondary={`${oeuvres.price} €`} />
            </ListItem>
          </ChristmasList>
        </div>
      )
    );
  }
}

export default withStyles(styles)(Details);
