import { h } from 'preact';
import PropTypes from 'prop-types';

import style from './style';

const ZeroBar = ({
	ActionButton,
	Popover,
	onDone,
	onRespond,
	onDelete,
	onDelegate,
	onDefer,
	onSend,
	onCancel,
	all,
	to,
	from,
	...rest
}) => {
	const onRespondAll = onRespond ? onRespond(all) : null;
	const onRespondTo = onRespond ? onRespond(to) : null;
	
	return (
		<div class={style.wrapper}>
			<ul>
				{onDone && (
					<li>
						<ActionButton class={style.button}
							onClick={onDone}
						>Done</ActionButton>
					</li>
				)}
				{onRespond && (
					<li>
						<Popover
							placement="top"
							anchor="center"
							text="Respond"
							toggleClass={style.button}
						>
							<ul>
								<li>
									<ActionButton class={style.subbutton}
										onClick={onRespondTo}
									>To {from}</ActionButton>
								</li>
								<li>
									<ActionButton class={style.subbutton}
										onClick={onRespondAll}
									>To all</ActionButton>
								</li>
							</ul>
						</Popover>
					</li>
				)}
				{onDelete && (
					<li>
						<ActionButton class={style.button}
							onClick={onDelete}
						>Delete</ActionButton>
					</li>
				)}
				{onDelegate && (
					<li>
						<ActionButton class={style.button}
							onClick={onDelegate}
						>Delegate</ActionButton>
					</li>
				)}
				{onDefer && (
					<li>
						<ActionButton class={style.button}
							onClick={onDefer}
						>Defer</ActionButton>
					</li>
				)}
				{onSend && (
					<li>
						<ActionButton class={style.button}
							onClick={onSend}
						>Send</ActionButton>
					</li>
				)}
				{onCancel && (
					<li>
						<ActionButton class={style.button}
							onClick={onCancel}
						>Cancel</ActionButton>
					</li>
				)}
			</ul>
		</div>
	);
};

ZeroBar.propTypes = {
	ActionButton: PropTypes.func.isRequired,
	onDone: PropTypes.func.isRequired,
	onRespond: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
	onDelegate: PropTypes.func.isRequired,
	onDefer: PropTypes.func.isRequired
};

export default ZeroBar;