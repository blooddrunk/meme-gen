import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({ test: '奇子是猪🐷' });

ReactDOM.render(<App store={store} />, document.getElementById('root'));

registerServiceWorker();
