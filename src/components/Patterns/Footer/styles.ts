'use client'
import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  backgroundColor: '#00A3C4',
  width: '100%',
})
export const FooterWrapper = styled('section', {
  padding: '3.25rem 7rem ',
  display: 'flex',
  justifyContent: 'space-between',

  '@mobile': {
    padding: '3.25rem 1rem',

    flexDirection: 'column',
    gap: '4rem',
  },

  '@tablet': {
    padding: '3.25rem 1rem',

    flexDirection: 'column',
    gap: '4rem',
  },
})

export const FooterContactContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
})

export const FooterInforsContainer = styled('section', {})

export const FooterSocialNetworkContainer = styled('section', {})

export const FooterContactLogoWrapper = styled('div', {
  marginBottom: '2rem',
  backgroundColor: '$white',
  width: '103px',
  height: '104px',
})

export const FooterContactAddressWrapper = styled('div', {})

export const FooterContactInforsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.21rem',
})

export const Address = styled('address', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
  marginBottom: '2.093em',
})

export const ContactAddressText = styled('span', {
  display: 'block',
  color: '#fff',
  fontSize: '1.125rem',
  fontWeight: '400',

  letterSpacing: '6%  ',
})

export const InforsWrapperContent = styled('div', {
  gap: '1.18em',
  display: 'flex',
  alignItems: 'center',
})

export const InforsWrapperText = styled('span', {
  color: '#fff',
})

export const TitleInforContent = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: '700',
  letterSpacing: '4%',
  color: '#fff',
})

export const ListOptionsFooterContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
  marginTop: '2rem',
})
export const ListOptionsFooter = styled('li', {
  a: {
    color: '#Fff',
    display: 'block',
    fontSize: '1.125rem',

    '&:hover': {
      fontWeight: 700,
    },
  },
})

export const SectionActionWrapper = styled('section', {
  marginTop: '2em',
  maxWidth: '26rem',
})

export const SocialNetwork = styled('div', {
  display: 'flex',
  marginTop: '2em',
  gap: '1em',

  'svg:hover path': {
    transition: 'fill 300ms',
    fill: '$gray200',
  },
})
