import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BuilderStore } from './stores/Builder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={BuilderStore} />, document.getElementById('root'));

registerServiceWorker();
