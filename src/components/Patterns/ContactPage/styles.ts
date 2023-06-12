import { styled } from '@stitches/react'

export const ContactPageContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: '9.81rem',
})

export const ContactPageInfors = styled('section', {
  textAlign: 'center',
})

export const ContactPageHowToFind = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const TitlePageContact = styled('h1', {
  fontSize: '2em',
  fontWeight: '700',
  letterSpacing: '4%',
  color: '#333333',
  marginBottom: '2.5rem',
  marginTop: '1rem',
})
export const ParagraphPageContact = styled('p', {
  color: '#4F4F4F',
  fontSize: '1.375rem',
  lineHeight: '35.2px',
  letterSpacing: '6%',
  fontWeight: '400',
  marginBottom: '6.75rem',
})

export const ContactInformations = styled('section', {
  display: 'flex',
  flexDirection: 'column',
})

export const InforMationsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '6.25rem',
})

export const TitleInformationWrapper = styled('h2', {
  fontSize: '1.25rem',
  fontWeight: '700',
  lineHeight: '32px',
  letterSpacing: '6% ',
})
export const ContainerInformations = styled('div', {
  background: 'linear-gradient(90deg, #FE8824 0%, rgba(254, 136, 36, 0) 100%)',
  backgroundSize: '100% 3px',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  paddingTop: '1.25rem',
  paddingLeft: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})
export const Contact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  variants: {
    socialMedia: {
      true: {
        'svg:hover path': {
          transition: 'fill 300ms',
          fill: '$orange500',
        },
      },
    },
  },
})

export const TextContact = styled('p', {
  fontSize: '1.625rem',
  fontWeight: '700',
  lineHeight: '41.6px',
  letterSpacing: '6%',
  margin: '0',
})

export const TitleHowToFind = styled('h2', {
  fontSize: '2rem',
  fontWeight: '700',
  textAlign: 'center',
  letterSpacing: '4%',
  marginBottom: '2rem',
})

export const SectionMap = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
})

export const AddressContainer = styled('section', {
  marginTop: '2rem',
})

export const Address = styled('address', {
  display: 'flex',
  flexDirection: 'column',
})

export const AddressText = styled('span', {
  font: 'normal 700 1.12rem Roboto',
  letterSpacing: '6%',
})
