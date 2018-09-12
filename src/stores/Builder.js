import { types } from 'mobx-state-tree';

import defaultImageSrc from '../assets/images/luxun_1.jpg';

export const BuilderStore = types
  .model({
    dictum: '',
    author: '',
    imageSrc: defaultImageSrc,
    multiline: false,
  })
  .views(self => ({
    get authorVisible() {
      return !!self.author;
    },
  }));
