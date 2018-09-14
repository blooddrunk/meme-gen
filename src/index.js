import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './stores';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
