import { h, Component } from 'preact';
import { provide } from 'preact-context-provider';
import { withIntl } from '../../enhancers';
import ZeroHeader from '../zeroHeader';
import ZeroBar from '../zeroBar';
import wire from 'wiretie';
import style from './style';


export default function createCompose(context) {

	@withIntl
	@provide({ zimbraComponents: context.components })
	@wire('zimbraComponents', null, ({ ActionButton, Popover }) => ({ ActionButton, Popover }))

	
	class ZeroCompose extends Component {
		defaults = {
			inboxCount: 105,
			title: 'Power Outage In Buffalo - Update #2'
		}
		render({
			ActionButton,
			Popover,
			onChange,
			onSend,
			onCancel,
			onBodyChange,
			to,
			body
		}) {
			return (
				<div class={style.wrapper}>
					<ZeroHeader
						inboxCount={this.defaults.inboxCount}
						title={this.defaults.title}
						to={to}
						onChange={onChange}
					/>
				<div class={style.inputwrapper}>
					<div class={style.input} type="text" name="body" value={body} onChange={onBodyChange} contentEditable />
				</div>
				
					<ZeroBar
						ActionButton={ActionButton}
						Popover={Popover}
						onSend={onSend}
						onCancel={onCancel}
					/>
				</div>
			)
		}
	}

	return ZeroCompose;

}