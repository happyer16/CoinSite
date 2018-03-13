import React from 'react';
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
      modalIsOpen: false,
      buyAvg: '',
      buySum: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.changePriceInput = this.changePriceInput.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    $('.ui.dropdown').dropdown();
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      buyAvg: '',
      buySum: ''
    });
  }

  handlePost() {

      // get values
      var name = $('.ui.dropdown').dropdown('get value');
      var amount = $('#amount').val();
      var buyAvg = $('#buyAvg').val();
      var buySum = $('#buySum').val();


      this.props.onPost({name:name, amount:amount, buyAvg:buyAvg, buySum:buySum}).then(
        () => {
          console.log('AddCoinDialog - Coin 등록 도전!');
        }
      )
      this.closeModal();
  }

  changePriceInput(e) {
    var amount = $('#amount').val();
    if(amount != null){
      switch(e.target.id){
        case 'buyAvg':
          this.setState({
            buyAvg: e.target.value,
            buySum: amount*e.target.value
          });
          break;
        case 'buySum':
          this.setState({
            buyAvg: e.target.value / amount,
            buySum: e.target.value
          });
          break;
      }
      console.log(e.target.id);
      console.log(e.target.value);
    }
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
            <div className="field">
            <h4 className="ui dividing header"> 투자 코인 더하기 </h4>
            </div>
              {/* 투자코인 입력창 */}
              <div className="field">
                <label>투자코인</label>
                <div className="ui simple fluid selection dropdown">
                  <input type="hidden" name="name"/>
                  <div className="default text">Name</div>
                  <i className="dropdown icon"></i>
                  <div id="name" className="menu">
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

              {/* 투자코인 수량*/}
              <div className="field">
                <label>보유수량</label>
                <div className="ui right labeled input">
                  <input id="amount" type="text" placeholder="보유 수량을 입력하세요..."/>
                  <div className="ui basic label">
                    개
                  </div>
                </div>
              </div>


              {/* 투자코인 매수평균가*/}
              <div className="field">
                <label> 매수평균가 </label>
                <div className="ui right labeled input">
                  <label className="ui label">￦</label>
                  <input id="buyAvg" type="text" onChange={this.changePriceInput} value={this.state.buyAvg} placeholder="매수 평균가를 입력하세요..." />
                  <div className="ui basic label">원</div>
                </div>
              </div>

              {/* 투자코인 매수 금액*/}
              <div className="field">
                <label> 총매수금액 </label>
                <div className="ui right labeled input">
                  <label className="ui label">￦</label>
                  <input id="buySum" type="text" onChange={this.changePriceInput} value={this.state.buySum} placeholder="매수 총 금액을 입력하세요..." />
                  <div className="ui basic label">원</div>
                </div>
              </div>
          </form>

          <button className="ui tiny blue button" onClick={this.handlePost}>OK</button>
          <button className="ui tiny button" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default AddCoinDialog;
