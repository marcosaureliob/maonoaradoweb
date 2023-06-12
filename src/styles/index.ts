import { createStitches } from '@stitches/react'

export const { styled, globalCss, css } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      background: '#fafafa',

      gray100: '#f2f2f2',
      gray200: '#e0e0e0',
      gray600: '#bdbdbd',
      gray700: '#828282',
      gray800: '#4f4f4f',
      gray900: '#333333',

      orange500: '#fe8824',
      orange700: '#ff5400',

      turquoise500: '#00a3c4',
      turquoise700: '#0077b6',
    },
  },
  media: {
    mobileS: '(min-width: 200px) and (max-width: 413px)',
    mobile: '(min-width: 200px) and (max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    laptop: '(min-width: 1024px) and (max-width: 1439px)',
  }, // se fizer alguma alteração necessária aqui, suba a alteração e nos avise no grupo.
})
