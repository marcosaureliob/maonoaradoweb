'use client'

import { styled } from '..'

export const ProjectContainer = styled('div', {
  width: '100%',
  margin: '0 auto',
  paddingBottom: '10rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '@mobile': {
    paddingBottom: '6.25rem',
  },
})

export const ProjectBanner = styled('section', {
  position: 'relative',

  width: '100%',
  padding: '13rem 0 6.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@mobile': {
    padding: '8rem 1rem 6.25rem',
  },
})

export const ImageBox = styled('section', {
  position: 'relative',

  width: '40.125rem',
  height: '28.125rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    padding: '1rem',
    width: '21.875rem',
    height: '15.625rem',

    img: {
      objectFit: 'contain !important',
    },
  },
})

export const BackgroundSection = styled('div', {
  variants: {
    marginTop: {
      true: {
        marginTop: '10rem',

        '@mobile': {
          marginTop: '6.25rem',
        },
      },
    },
  },

  position: 'relative',
  width: '100%',
  height: '10rem',
})

export const ProjectBox = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
    letterSpacing: '0.04em',
  },

  div: {
    width: '44.125rem',
  },

  '@mobile': {
    padding: '0 1rem',

    div: {
      width: '100%',
    },
  },
})

export const BoxTags = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '4rem 1rem',

  '@mobile': {
    gap: '1rem 1rem',
  },
})

export const Tag = styled('span', {
  variants: {
    color: {
      turquoise: {
        border: '0.8px solid $turquoise500',
      },
      orange: {
        border: '0.8px solid $orange500',
      },
    },
  },

  fontSize: '1.125rem',
  borderRadius: '50px',
  fontWeight: '700',
  padding: '1rem 2rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',

  '@mobile': {
    fontSize: '0.625rem',
    padding: '0.375rem 0.75rem',
  },
})

export const BenefitBox = styled('section', {
  maxWidth: '64.5rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
    letterSpacing: '0.04em',
  },
})
