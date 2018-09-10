import { h, Component } from 'preact';
import TextField from 'preact-material-components/TextField';
import style from './style';
import ChatWindow from '../chatWindow/';
import 'preact-material-components/TextField/style.css';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: 'இந்த பக்கம்',
      show: false
    };
  }
  updateValue = (input) => {
    if (input === '') {
      alert('எதையாச்சும் சொல்லிட்டு enter அடிங்கப்பா'); //eslint-disable-line
    }
    else {
      this.setState({
        message: input
      });
      this.state.messages.push(this.state.message);
    }
  }
  updateInputValue = (evt) => {
    let inputText;
    if(evt.type === 'click') {
      inputText = document.getElementById('inputText').value;
      this.updateValue(inputText);
    }
    if (evt.key === 'Enter') {
      inputText = evt.target.value;
      this.updateValue(inputText);
    }
  };
  showMore = () => {
    this.setState({
      show: !this.state.show
    });
  };


  render() {
    let { messages } = this.state;
    const isShowMore = this.state.show;
    let multiChat, showText;
    if (isShowMore) {
      showText = 'Show Less';
      multiChat = messages.map((v) => <ChatWindow inputValue={v} vadivu="false" />);
    }
    else {
      showText = 'Show More';
    }
    return (
      <div class={style.centerTag}>
        <TextField autoComplete="off" id="inputText" label="Chat With vadivelu" value={this.state.inputValue} onKeyPress={this.updateInputValue} />
        <button onClick={this.updateInputValue}> Click பண்ணு </button>
        <ChatWindow inputValue={this.state.message} vadivu="true" />
        <a onClick={this.showMore}> {showText} </a>
        {multiChat}
      </div>
    );
  }
}
