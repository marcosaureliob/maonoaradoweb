import { styled } from '..'

export const HistoryContainer = styled('div', {
  width: '100%',
  margin: '0 auto',
  paddingBottom: '10rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const HistoryContent = styled('section', {
  position: 'relative',

  padding: '13rem 0 6.25rem',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    width: '49.68rem',
    textAlign: 'center',
  },

  h2: {
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '2rem',
    color: '$gray900',
  },

  p: {
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '160%',
    letterSpacing: '0.04em',
    color: '$gray-800',
  },

  '@mobile': {
    padding: '8rem 1rem 6.25rem',
    h2: { fontSize: '2rem' },
    p: { fontSize: '1.125rem' },
  },

  '@tablet': { padding: '13rem 1rem 6.25rem' },
})

export const CardsContainer = styled('section', {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap',
  justifyContent: 'center',

  marginTop: '10rem',
  position: 'relative',

  '@mobile': {
    padding: '0 1rem',
  },
})

export const Card = styled('div', {
  zIndex: '1',

  textAlign: 'left',
  alignItems: 'flex-end',
  padding: '2rem',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '36.88rem',
  height: '19.5rem',
  paddingBlock: '2rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  filter: 'drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.06))',

  div: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },

  h3: {
    fontWeight: '700',
    fontSize: '2rem',
    margin: '0',
    marginLeft: '1.25rem',
    color: '$gray-900',
  },

  p: {
    fontWeight: '400',
    fontSize: '1.125rem',
    letterSpacing: ' 0.06em',
    color: '$gray-900',
    lineHeight: '160%',
  },

  '@mobile': {
    height: 'auto',
  },
})

export const CardPresident = styled('section', {
  width: '100%',
  maxWidth: '50rem',
  marginTop: '10rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontWeight: '700',
    fontSize: '2rem',
    letterSpacing: '0.04em',
    color: '$gray-900',
  },

  '@mobile': {
    padding: '0 1rem',
  },

  '@tablet': {
    padding: '0 1rem',
  },
})

export const Wrapper = styled('div', {
  overflow: 'hidden',

  backgroundColor: '$white',
  display: 'flex',
  width: '100%',
  borderRadius: '16px',

  div: {
    textAlign: 'left',
    padding: '2rem',
  },

  img: {
    width: '19.875rem',
    height: 'auto',
  },

  h3: {
    fontWeight: '700',
    fontSize: '2.25rem',
    color: '$gray900',
    letterSpacing: '0.04em',
    marginBottom: '2rem',
  },

  p: {
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '160%',
    letterSpacing: '0.06em',

    '&:nth-child(2)': {
      marginBottom: '2rem',
    },
  },

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      width: '100%',
      borderRadius: '8px',
    },

    h3: {
      fontSize: '1.75rem',
    },

    p: {
      fontSize: '1.125rem',
    },
  },

  // '@tablet': {
  //   img: {
  //     width: '6rem',
  //     objectFit: 'cover',
  //   },
  // },
})
