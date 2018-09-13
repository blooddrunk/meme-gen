import { types } from 'mobx-state-tree';

import defaultImageSrc from '../assets/images/luxun_1.jpg';
import { randomDictum } from './helpers';

export const Builder = types
  .model({
    dictum: randomDictum(),
    author: '鲁迅',
    imageSrc: defaultImageSrc,
    multiline: false,
  })
  .views(self => ({
    get authorVisible() {
      return !!self.author;
    },
  }))
  .actions(self => ({
    changeDictum(dictum) {
      self.dictum = dictum;
    },

    drawDictum() {
      self.dictum = randomDictum();
    },

    changeAuthor(author) {
      self.author = author;
    },

    changeImage(imageSrc) {
      self.imageSrc = imageSrc;
    },

    toggleMultiline(multiline) {
      self.multiline = multiline;
    },
  }));
