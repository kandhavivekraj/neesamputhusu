import { h, Component } from 'preact';
import style from './style';
import noimage from '../../assets/noimage.png';
import vadivu from '../../assets/vadivelu.jpg';

export default class chatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vadivu: this.props.vadivu
    };
  }
	render() {
    let renderThis;
    if(this.state.vadivu === 'true') {
      renderThis = <div style="width:100%;">
        <div class={style.vadivuDiv}>
          <img class={style.vadivuImg} src={vadivu} alt={'vadivu'} />
          <div class={style.text}>
            என்ன {this.props.inputValue}
          </div>
        </div>
      </div>
    } else {
      renderThis =	<div style="width:100%;">
  				<div class={style.personDiv}>
  					<img class={style.noImg} src={noimage} alt={'noimage'} />
  					<div class={style.text}>
  				   {this.props.inputValue}
  					</div>
  				</div>
  				<div class={style.vadivuDiv}>
  					<img class={style.vadivuImg} src={vadivu} alt={'vadivu'} />
  					<div class={style.text}>
              என்ன {this.props.inputValue}
  					</div>
  				</div>
    		</div>
    }
		return (
      <div>
        {renderThis}
      </div>
		);
	}
}
