import React from 'react';
import Authentication from 'components';

import { connect } from 'react-redux';
import { registerRuquest } from 'actions/authentication';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.handleRegister=this.handleRegister.bind(this);
  }

  handleRegister(id,pw) {
    return this.props.handleRegister(id,pw).then(
      () => {
        if(this.props.status === "SUCCESS") {
          Materialize.toast('Success! Please log in.', 2000);
          browserHistory.push('/login');
          return true;
        } else {
          /*
            ERROR CODE:
              1: BAD USERNAME
              2: BAD PASSWORFD
              3: USERNAME EXISTS
          */
          let errorMessage = [
            'Invalide username',
            'Password is too short',
            'Username already exists'
          ];

          let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.errorCode - 1] + '</span>');
          Materialize.toast($toastContent, 2000);
          return false;
        }
      }
    )
  }
  render() {
    return (
      <div>
        <Authentication mode={false}
          onRegister={this.handleRegister}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.register.status,
    errorCode: state.authentication.register.error
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    registerRuquest: (id,pw) => {
      return dispatch(registerRuquest(id,pw));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
