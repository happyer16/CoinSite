import React from 'React';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-10%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px',
    height                 : '500px'
  }
};

class AddCoinDialog extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="ui basic button" onClick={this.openModal}>
          <i className="money bill alternate icon"/>
          Add Coin
        </button>

        {/* Dialog */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          {/* Dialog Content */}
          <form className="ui form">
            <h4 className="ui dividing header"> 투자 코인 더하기 </h4>

            <div className="field">

              {/* 투자코인 입력창 */}
              <label>투자코인</label>
              <div className="ui simple fluid selection dropdown">
                <input type="hidden" name="name"/>
                <div className="default text">Name</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div className="item" data-value="BTC">
                    <img className="ui mini avatar image" src="./img/icon/coin/bitcoin.png"></img>
                    비트코인
                  </div>
                  <div className="item" data-value="ETH">
                    <img className="ui mini avatar image" src="./img/icon/coin/ethereum.png"></img>
                    이더리움
                  </div>
                  <div className="item" data-value="XRP">
                    <img className="ui mini avatar image" src="./img/icon/coin/ripple.webp"></img>
                    리플
                  </div>
                  <div className="item" data-value="BCH">
                    <img className="ui mini avatar image" src="./img/icon/coin/bitcoin_cash.webp"></img>
                    비트코인캐시
                  </div>
                  <div className="item" data-value="LTC">
                    <img className="ui mini avatar image" src="./img/icon/coin/litecoin.png"></img>
                    라이트코인
                  </div>
                  <div className="item" data-value="NEO">
                    <img className="ui mini avatar image" src="./img/icon/coin/neo.webp"></img>
                    네오
                  </div>
                  <div className="item" data-value="ADA">
                    <img className="ui mini avatar image" src="./img/icon/coin/cardano.jpg"></img>
                    에이다
                  </div>
                  <div className="item" data-value="XLM">
                    <img className="ui mini avatar image" src="./img/icon/coin/stellar_lumens.webp"></img>
                    스텔라루멘
                  </div>
                  <div className="item" data-value="XMR">
                    <img className="ui mini avatar image" src="./img/icon/coin/monero.webp"></img>
                    모네로
                  </div>
                  <div className="item" data-value="EOS">
                    <img className="ui mini avatar image" src="./img/icon/coin/eos.png"></img>
                    이오스
                  </div>
                  <div className="item" data-value="IOT">
                    <img className="ui mini avatar image" src="./img/icon/coin/iota.png"></img>
                    아이오타
                  </div>
                  <div className="item" data-value="DASH">
                    <img className="ui mini avatar image" src="./img/icon/coin/dash.webp"></img>
                    대시
                  </div>
                  <div className="item" data-value="XEM">
                    <img className="ui mini avatar image" src="./img/icon/coin/nem.png"></img>
                    뉴이코노미무브먼트
                  </div>
                  <div className="item" data-value="ETC">
                    <img className="ui mini avatar image" src="./img/icon/coin/ethereum_classic.webp"></img>
                    이더리움클래식
                  </div>
                  <div className="item" data-value="QTUM">
                    <img className="ui mini avatar image" src="./img/icon/coin/qtum.png"></img>
                    퀀텀
                  </div>
                  <div className="item" data-value="OMG">
                    <img className="ui mini avatar image" src="./img/icon/coin/omisego.png"></img>
                    오미세고
                  </div>
                </div>
              </div>

            </div>
          </form>

          <button className="ui tiny blue button">OK</button>
          <button className="ui tiny button" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default AddCoinDialog;
