import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Authentication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleLogin() {
    let id = this.state.username;
    let pw = this.state.password;

    this.props.onLogin(id, pw).then(
      (success) => {
        if(!success) {
          this.setState({
            password: ''
          });
        }
      }
    );
  }

  handleRegister() {
    let id = this.state.username;
    let pw = this.state.password;

    this.props.onRegister(id,pw).then(
      (result) => {
        if(!result) {
          this.setState({
            username: '',
            password: ''
          });
        }
      }
    );
  }

  handleKeyPress(e) {
    if(e.charCode==13) {
      if(this.props.mode) {
        this.handleLogin();
      } else {
        this.handleRegister();
      }
    }
  }
  render() {
    const inputBoxes = (
      <div className="ui stacked segment">
        <div className="field">
          <div className="ui left icon input">
            <i className="user icon"/>
            <input
              name="username"
              type="text"
              placeholder="E-mail address"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="ui left icon input">
            <i className="lock icon"/>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}/>
          </div>
        </div>
      </div>
    );

    const loginView = (
      <div>
        <div className="card-content">
          <div className="row">
            {inputBoxes}
            <div className="ui fluid large teal submit button"
                onClick={this.handleLogin}>LOGIN</div>
          </div>
        </div>

        <div className="ui message">
           <div className="right" >
              New Here? <Link to="/register">Create an account</Link>
           </div>
        </div>

      </div>
    );

    const registerView = (
       <div className="card-content">
         <div className="row">
           {inputBoxes}
           <div className="ui fluid large teal submit button"
               onClick={this.handleRegister}>CREATE</div>
         </div>
       </div>
    );

    return (
      <div className="column">
        {/* <Link className="logo" to="/">코인지갑</Link> */}
        {/* Header */}
        <h2 className="ui teal image header">
          <img src="img/icon/login_title.png" className="image"/>
          <div className="content">
            {this.props.mode ? "LOGIN" : " REGISTER" }
          </div>
        </h2>
        { this.props.mode ? loginView : registerView }
      </div>
    );
  }
};

Authentication.propTypes = {
  mode: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

Authentication.defaultProps = {
  mode : true,
  onLogin : (id,pw) => { console.error("login function not defined"); },
  onRegister : (id,pw) => { console.error("register function not defined"); }
};

export default Authentication;
