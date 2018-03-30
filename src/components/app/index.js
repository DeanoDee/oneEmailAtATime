import { h, Component } from 'preact';
import createAction from '../zeroAction';
import createCompose from '../zeroCompose';
import { ACTIONCOMPOSE } from '../../constants';
import style from './style';
import stubData from '../../stubData';
class App extends Component {

	onDone = () => {
		this.movePastEmail();
		console.log('moving to done');
	}
	
	onRespondBuild = (route) => {
		return (sendTo) => {
			console.log(sendTo);
			return() => {
				console.log("buddy", sendTo);
				this.setState({ sendTo, sendBody: null, compose: true });
			}
		}
	};

	onDelete = () => {
		this.movePastEmail();
		console.log('delete that');
	};

	onDelegate = () => {
		this.setState({ sendTo: null, sendBody:null, compose: true});
	};

	onDefer = () => {
		this.movePastEmail();
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
		this.movePastEmail();
	}
	
	onCancel = () => {
		this.setState({ compose: false });
	}
	
	movePastEmail = () => {
		const index = this.state.index + 1;
		const inboxCount = this.state.inboxCount - 1;
		const {to, all, from, body, title, relativeDate} = stubData[index];
		this.setState({ to, all, from, body, inboxCount, relativeDate, title, index, sendTo: null, sendBody: null, inboxCount, action:true, compose:null });
	}
	
	constructor() {
		super();
		this.state = { to: null, all:null, from: null, body: null, sendTo: null, sendBody: null, index: 0, inboxCount:0 };
	}
    
	componentWillMount() {
		const inboxCount = stubData.length;
		const {to, all, from, body, title, relativeDate} = stubData[this.state.index];
		
		this.setState({ to, all, from, body, inboxCount, relativeDate, title, action:null, compose:null, context:null });
		console.log(this.state);
	}
    
	render(props) {
		const { action, context } = props;
		const {  to, from, body, all, title, sendTo, sendBody, compose, inboxCount, relativeDate } = this.state;
		const ZeroAction = createAction(context);
		const ZeroCompose = createCompose(context);
		const onRespond = this.onRespondBuild(context.route);
		const reTitle = `re: ${title}`;
		return (
			<div class={style.wrapper}>
				<div class={style.main}>
					{!compose && action && (
						<ZeroAction
							to={to}
							from={from}
							body={body}
							all={all}
							title={title}
							inboxCount={inboxCount}
							relativeDate={relativeDate}
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
							title={reTitle}
							inboxCount={inboxCount}
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