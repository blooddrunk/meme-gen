import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import RootStore from './stores';
import registerServiceWorker from './registerServiceWorker';

const store = RootStore.create();
ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
