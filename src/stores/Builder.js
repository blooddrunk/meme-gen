import { types, flow } from 'mobx-state-tree';

import defaultImageSrc from '../assets/images/luxun_1.jpg';
import { randomDictum } from './helpers';

export const Builder = types
  .model({
    dictum: randomDictum(),
    author: '鲁迅',
    imageSrc: defaultImageSrc,
    imageLoading: false,
    externalImageSrc: '',
    externalImageFetching: false,
    multiline: false,
    textColor: '#FFF',
  })
  .views(self => ({
    get authorVisible() {
      return !!self.author;
    },
  }))
  .actions(self => {
    let controller = new window.AbortController();
    let { signal } = controller;

    return {
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

      changeExternalImage(src) {
        self.externalImageSrc = src;
      },

      changeTextColor(color) {
        self.textColor = color;
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
        self.textColor = '#FFF';
      },

      pickExternalImage: flow(function* pickExternalImage() {
        if (self.externalImageFetching) {
          controller.abort();
          controller = new window.AbortController();
          signal = controller.signal;
        } else {
          self.externalImageFetching = true;
        }

        try {
          const response = yield fetch('https://www.splashbase.co/api/v1/images/random', {
            signal,
          });
          const { url } = yield response.json();
          self.externalImageSrc = url;
          self.imageSrc = url;
        } catch (error) {
          // TODO haven't decided what to do yet
          console.error(error);
        } finally {
          self.externalImageFetching = false;
        }
      }),
    };
  });
