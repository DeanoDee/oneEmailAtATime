import { h } from 'preact';
import { Text } from 'preact-i18n';
import { ACTIONSLUG, ACTIONCOMPOSE } from './constants';
import { withIntl } from './enhancers';
import App from './components/App';

export default function Zimlet(context) {
	const { plugins, components } = context;
	const exports = {};
	
	exports.init = function init() {
		plugins.register('slot::menu', MenuItem);
		plugins.register('slot::routes', Router);
	};

	// Register a new route with the preact-router instance
	function Router() {
		return [
			<App path={`/${ACTIONSLUG}`} action context={context}/>,
			<App path={`/${ACTIONCOMPOSE}`} compose context={context}/>
		];
	}

	// Create a main nav menu item
	const MenuItem = withIntl(() => (
		<components.MenuItem
			responsive
			icon="fa:tachometer"
			href={`/${ACTIONSLUG}`}
		>
			<Text id="oneEmailAtATime.menuItem" />
		</components.MenuItem>
	));

	return exports;
}
