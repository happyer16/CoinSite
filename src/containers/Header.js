import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    const loginButton = (
        <Link to="/login" className="ui inverted button">
          Log in
        </Link>
    );

    const logoutButton = (
        <a className="ui inverted button" onClick={this.props.onLogout}>
          Logout
        </a>
    );

    return (
      <div className="ui inverted menu">
        <div className="ui container">
         <a className="header item">
          <img className="logo" src="img/icon/login_title.png"/>
             투자내역
         </a>
         <div className="right item">
          { this.props.isLoggedIn ? logoutButton : loginButton }
         </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
