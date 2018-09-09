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

  updateInputValue = (evt) => {
    if (evt.key === 'Enter') {
      if (evt.target.value === '') {
        alert('எதையாச்சும் சொல்லிட்டு enter அடிங்கப்பா'); //eslint-disable-line
      }
      else {
        this.setState({
          message: evt.target.value,
        });
        this.state.inputValue = '';
        this.state.messages.push(this.state.message);
        this.setState(
          this.state
        );
      }
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
        <TextField autoComplete="off" label="Chat With vadivelu" value={this.state.inputValue} onKeyPress={this.updateInputValue} />
        <ChatWindow inputValue={this.state.message} vadivu="true" />
        <a onClick={this.showMore}> {showText} </a>
        {multiChat}
      </div>
    );
  }
}
