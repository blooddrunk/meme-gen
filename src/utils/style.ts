import { SimpleInterpolation, InterpolationValue } from 'styled-components';

import { css } from '../theme';

export const truncate = (width: string) => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
};

const sizes: { [index: string]: number } = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    acc[label] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
      @media (min-width: ${emSize}em) {
        ${css(strings, ...interpolations)};
      }
    `;
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => InterpolationValue[]
  >
);
