const DEFAULT_DICTIONARY = [
  '晚睡的人，没有对象',
  '表情包多的人，没有对象',
  '我没说过这些话',
  'no zuo no die',
  '我就静静地看着你们装逼',
];

export const randomDictum = () =>
  DEFAULT_DICTIONARY[Math.floor(Math.random() * DEFAULT_DICTIONARY.length)];
