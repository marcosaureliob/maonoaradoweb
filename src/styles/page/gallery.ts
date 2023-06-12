import { css, styled } from '..'

export const GalleryContainer = styled('section', {
  width: '100%',
  maxWidth: '1216px',
  margin: '0 auto',
  padding: '13rem 0 2rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 32,

  h2: {
    letterSpacing: '0.04em',
    fontSize: '2rem',
  },

  span: {
    backgroundColor: '$orange700',
    fontSize: '0.875rem',
    color: '$white',
    borderRadius: '50px',
    padding: '6px 12px',
  },

  '@mobile': {
    padding: '8rem 1rem 6.25rem',

    h2: {
      fontSize: '1.625rem',
      textAlign: 'center',
    },
  },

  '@mobileS': {
    h2: {
      padding: '0 0.5rem',
    },
  },
})

export const ImageContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '8px 8px',

  a: {
    position: 'relative',

    borderRadius: '16px',
    display: 'block',
    width: '200px',
    height: '200px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'filter 200ms',

    '&:hover': {
      filter: 'brightness(60%)',
    },

    '@mobileS': {
      borderRadius: '8px',
      width: '80px',
      height: '80px',
    },
  },

  '@mobileS': {
    gap: '3px 3px',
  },
})
