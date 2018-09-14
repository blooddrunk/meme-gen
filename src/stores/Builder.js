import { types } from 'mobx-state-tree';

import defaultImageSrc from '../assets/images/luxun_1.jpg';
import { randomDictum } from './helpers';

export const Builder = types
  .model({
    dictum: randomDictum(),
    author: '鲁迅',
    imageSrc: defaultImageSrc,
    imageLoading: false,
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

    changeImage(src) {
      self.imageSrc = src;
    },

    toggleLoading(loading) {
      self.imageLoading = loading;
    },

    toggleMultiline(multiline) {
      self.multiline = multiline;
    },

    reset() {
      self.imageSrc = defaultImageSrc;
      self.dictum = randomDictum();
      self.author = '鲁迅';
    },
  }));
