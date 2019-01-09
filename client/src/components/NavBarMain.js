import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router';
import ChristmasTypography from './styled/ChristmasTypography';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBarMain extends Component {
  state = {
    anchorEl: null,
  };
  handleMoreInfo = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  renderContent() {
    const { anchorEl } = this.state;
    const { history } = this.props;

    const open = Boolean(anchorEl);
    switch (this.props.auth) {
      case null:
        return <Button color="inherit">Verification de connexion...</Button>;

      case false:
        return (
          <div>
            <a style={{ textDecoration: 'none' }} href="/auth/google">
              <Button variant="contained" color="primary">
                Se connecter avec Google
              </Button>
            </a>
          </div>
        );
      default:
        return (
          <div>
            <IconButton
              color="inherit"
              aria-label="My account"
              onClick={() => history.push('/myaccount')}
            >
              <AccountCircle />
            </IconButton>

            <IconButton color="inherit" aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>

            <IconButton aria-haspopup="true" color="inherit" onClick={this.handleMoreInfo}>
              <MoreIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem>
                <Button color="inherit" href="/api/logout">
                  Deconnexion
                </Button>
              </MenuItem>
            </Menu>
          </div>
        );
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" style={{ backgroundColor: '#EFC49A' }}>
            <Toolbar>
              <Typography variant="subtitle1" className={classes.grow} />
              <ChristmasTypography variant="h5" className={classes.grow}>
                Galerie d'Art Patricia Denamur
              </ChristmasTypography>

              {/* <div>{this.renderContent()}</div> */}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

NavBarMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(NavBarMain)));
