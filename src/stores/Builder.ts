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
      changeDictum(dictum: string) {
        self.dictum = dictum;
      },

      drawDictum() {
        self.dictum = randomDictum();
      },

      changeAuthor(author: string) {
        self.author = author;
      },

      changeImage(src: string) {
        self.imageSrc = src;
      },

      changeExternalImage(src: string) {
        self.externalImageSrc = src;
      },

      changeTextColor(color: string) {
        self.textColor = color;
      },

      toggleLoading(loading: boolean) {
        self.imageLoading = loading;
      },

      toggleMultiline(multiline: boolean) {
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
          const response = yield fetch(
            `https://api.unsplash.com/photos/random/?client_id=${
              process.env.REACT_APP_UNSPLASH_ACCESS_KEY
            }`,
            {
              signal,
            }
          );
          const {
            urls: { regular },
          } = yield response.json();
          self.externalImageSrc = regular;
          self.imageSrc = regular;
        } catch (error) {
          // TODO haven't decided what to do yet
          console.error(error);
        } finally {
          self.externalImageFetching = false;
        }
      }),
    };
  });

export type BuilderType = typeof Builder;
