import { h, Component } from 'preact';
import { provide } from 'preact-context-provider';
import { withIntl } from '../../enhancers';
import ZeroBar from '../zeroBar';
import ZeroHeader from '../zeroHeader';
import ZeroText from '../zeroText';
import wire from 'wiretie';

export default function createAction(context) {

	@withIntl
	@provide({ zimbraComponents: context.components })
	@wire('zimbraComponents', null, ({ ActionButton, Popover }) => ({ ActionButton, Popover }))

	
	class ZeroAction extends Component {

		
		render({
			ActionButton,
			Popover,
			onDone,
			onRespond,
			onDelete,
			onDelegate,
			onDefer,
			to,
			from,
			body,
			all,
			title,
			relativeDate,
			inboxCount
		}) {
			return (
				<div>
					<ZeroHeader
						inboxCount={inboxCount}
						title={title}
						from={from}
						to={to}
						relativeDate={relativeDate}
					/>
					<ZeroText
						body={body}
					/>
					<ZeroBar
						ActionButton={ActionButton}
						Popover={Popover}
						onDone={onDone}
						onRespond={onRespond}
						onDelete={onDelete}
						onDelegate={onDelegate}
						onDefer={onDefer}
						from={from}
						all={all}
						to={to}
					/>
					
				</div>
			);
		}
	}

	return ZeroAction;

}
