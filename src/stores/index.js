import { addMiddleware, types } from 'mobx-state-tree';
import { actionLogger } from 'mst-middlewares';

import { Builder } from './Builder';

const RootStore = types.model({
  builder: types.optional(Builder, {}),
});

const store = RootStore.create();

addMiddleware(store, actionLogger);

export default store;
