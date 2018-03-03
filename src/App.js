import React from 'react';
import { connect } from 'react-redux';

import { Coin, CoinList, Main, AddCoinDialog } from './components';
import { Header, Setting, AddCoin, VisibleCoinList } from './containers';
import { addCoin } from './actions';

import { getStatusRequest, logoutRequest } from 'actions/authentication';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutRequest().then(
      () => {
        Materialize.toast('Good Bye!', 2000);

        // Empties the session
        let loginData = {
          isLoggedIn: false,
          username: ''
        };

        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
      }
    );
  }

  componentDidMount() {
      // get cookie by name
      function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if( parts.length == 2 ) return parts.pop().split(";").shift();
      }
      // get loginData from cookie
      let loginData = getCookie('key');

      // if loginData is undefined, do nothing
      if( typeof loginData === "undefined" ) return;

      // decode base64 & parse json
      loginData = JSON.parse(atob(loginData));

      // if not logged in, do nothing
      if( !loginData.isLoggedIn ) return;

      // page refreshed & has a session in cookie,
      // check whether this cookie is valid or not
      this.props.getStatusRequest().then(
        () => {
          console.log(this.props.status);

          // if session is not valid
          if(!this.props.status.valid) {
            // logout the session
            loginData = {
              isLoggedIn: false,
              username: ''
            };

            document.cookie='key=' + btoa(JSON.stringify(loginData));

            // and notify
            let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
            Materialize.toast($toastContent, 4000);
          }
        }
      );
    }

    render(){
      /* Check whether current route is login or register using regax */
      let re = /(login|register)/;
      let isAuth = re.test(this.props.location.pathname);

      const { dispatch, visibleTodos } = this.props;

      return (
        <div>
          { isAuth ?
            undefined :
            <div>
              <Header isLoggedIn={this.props.status.isLoggedIn}
                      onLogout={this.handleLogout}/>
              <AddCoinDialog />
              <VisibleCoinList />
            </div>
          }
          { this.props.children }
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStatusRequest: () => dispatch(getStatusRequest()),
    logoutRequest: () => dispatch(logoutRequest())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
