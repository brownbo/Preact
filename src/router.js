import { h, Component } from 'preact';
import { Router } from 'preact-router';

import App from './routes/app';
import Templete from './routes/templete/index';
import Index from './routes/index/index';
import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory();
export default class RouterApp extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		//this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router history={hashHistory} onChange={this.handleRoute}>
					{/* <App path="/">
						
					</App> */}
					<Index path="/" />
					<Templete path="/temp" />
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>
			</div>
		);
	}
}
