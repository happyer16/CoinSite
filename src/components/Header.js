import React from 'react';
import Websocket from 'react-websocket';

class Header extends React.Component {

  constructor(props){
    super(props);

    this.state={
      result: "Websocket 동작과정"
    }
  }
  handleData(data){
    let result=JSON.parse(data);
    console.log(data);
    this.setState({
      result: result +"\\n data"
    });
  }
  render() {
    return (
      <div>
           <nav>
               <div className="nav-wrapper blue darken-1">
                   <a className="brand-logo center">코인가즈아</a>

                   <ul>
                       <li><a><i className="material-icons">search</i></a></li>
                   </ul>

                   <div className="right">
                       <ul>
                           <li>
                               <a><i className="material-icons">vpn_key</i></a>
                           </li>
                           <li>
                               <a><i className="material-icons">lock_open</i></a>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>

          <Websocket url='ws://localhost:80' onMessage={this.handleData.bind(this)} onOpen={this.handleData.bind(this)} />

          <p>결과 : </p>
          <div id="result">{this.state.result}</div>
      </div>
       );
  }
}

export default Header;
