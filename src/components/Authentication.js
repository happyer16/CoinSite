import React from 'React';
import PropTypes from 'prop-types';

class Authentication extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

Authentication.propTypes = {
  mode : PropTypes.bool,
  onLogin : PropTypes.func,
  onRegister : PropTypes.func
};

Authentication.defaultProps = {
  mode : true,
  onLogin : (id,pw) => { console.error("login function not defined"); },
  onRegister : (id,pw) => { console.error("register function not defined"); }
}

export default Authentication;
