import { types } from 'mobx-state-tree';

import { Builder } from './Builder';

export default types.model({
  builder: types.optional(Builder, {}),
});
