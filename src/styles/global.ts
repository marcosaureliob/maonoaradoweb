'use client'
import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',

    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '12px',
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: '20px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$orange500',
      borderRadius: '20px',
    },

    '@mobile': {
      '&::-webkit-scrollbar': {
        width: '6px',
      },
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    margin: 0,
    letterSpacing: '0.04em',
  },

  a: {
    textDecoration: 'none',
  },
})
