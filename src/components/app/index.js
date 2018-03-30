import { h, Component } from 'preact';
import createAction from '../zeroAction';
import createCompose from '../zeroCompose';
import { ACTIONCOMPOSE } from '../../constants';
import style from './style';

class App extends Component {

	onDone = () => {
		console.log('moving to done');
	}
	
	onRespondBuild = (route) => {
		return (sendTo) => {
			console.log(sendTo);
			return() => {
				console.log("buddy", sendTo);
				this.setState({ sendTo, sendBody: null, compose: true });
				// route(`/${ACTIONCOMPOSE}`);
			}
		}
	};

	onDelete = () => {
		console.log('delete that');
	};

	onDelegate = () => {
		this.setState({ sendTo: null, sendBody:null, compose: true});
	};

	onDefer = () => {
		console.log('go next');
	};
	
	onChange = (sendTo) => {
		event.preventDefault();
		this.setState({ sendTo });
	}
	
	onBodyChange = (sendBody) => {
		event.preventDefault();
		this.setState({ sendBody });
	}
	
	onSend = () => {
		this.setState({ compose: false });
	}
	
	onCancel = () => {
		this.setState({ compose: false });
	}
	
	constructor() {
		super();
		this.state = { to: null, all:null, from: null, body: null, sendTo: null, sendBody: null };
	}
    
	componentWillMount() {
		
		this.setState({ action:null, compose:null, context:null });
	}
    
	render(props) {
		const { action, context } = props;
		const {  to, from, body, all, sendTo, sendBody, compose } = this.state;
		const ZeroAction = createAction(context);
		const ZeroCompose = createCompose(context);
		const onRespond = this.onRespondBuild(context.route);
		return (
			<div class={style.wrapper}>
				<div class={style.main}>
					{!compose && action && (
						<ZeroAction
							to={to}
							from={from}
							body={body}
							all={all}
							onDone={this.onDone}
							onRespond={onRespond}
							onDelete={this.onDelete}
							onDelegate={this.onDelegate}
							onDefer={this.onDefer}
						/>
					)}
					{compose && (
						<ZeroCompose
							to={sendTo}
							from={from}
							body={sendBody}
							onChange={this.onChange}
							onSend={this.onSend}
							onCancel={this.onCancel}
							onBodyChange={this.onBodyChange}
						 />
					)}
				</div>
			</div>
		);
	}
}

export default App;