import * as React from 'react';
import { addMiddleware, types } from 'mobx-state-tree';
import { actionLogger } from 'mst-middlewares';

import { Builder } from './Builder';

export const RootStore = types.model({
  builder: types.optional(Builder, {}),
});

export const rootStore = RootStore.create();

export const StoreContext = React.createContext(rootStore);

export type RootStoreType = typeof rootStore;

addMiddleware(rootStore, actionLogger);
