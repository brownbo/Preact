// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './stylesheet/css/style.css';

let root;
function init() {
	let RouterApp = require('./router').default;
	root = render(<RouterApp />, document.body, root);
}

// register ServiceWorker via OfflinePlugin, for prod only:
// if (process.env.NODE_ENV==='production') { //用于移动程序的pwa，我暂时注释掉
// 	require('./pwa');
// }

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./router', () => requestAnimationFrame(init) );
}

init();
