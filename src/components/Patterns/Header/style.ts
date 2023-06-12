'use client'
import { styled } from '@/styles'
import Link from 'next/link'
export const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,

  zIndex: 1,

  width: '100%',

  padding: '2.375rem 0',
  transition: 'background 300ms, padding 300ms',

  display: 'flex',
  justifyContent: 'center',

  '&.scrolled': {
    backgroundColor: '$background',
    padding: '1rem 0 0',
    zIndex: '2',

    '@mobile': {
      padding: '1rem 1rem 0',
    },

    '@tablet': {
      padding: '1rem 1rem 0',
    },

    '@laptop': {
      padding: '1rem 1rem 0',
    },
  },

  '@mobile': {
    padding: '1rem 1rem 0',
  },

  '@tablet': {
    padding: '1rem 1rem 0',
  },

  '@laptop': {
    padding: '2.375rem 1rem 0',
  },
})

export const HeaderWrapper = styled('div', {
  width: '100%',
  maxWidth: '1216px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const LogoWrapper = styled('div', {
  position: 'relative',

  width: '103px',
  height: '104px',

  '@mobile': {
    width: '60px',
    height: '61px',
  },
})

export const MobileMenu = styled('nav', {
  cursor: 'pointer',
  display: 'none',

  div: {
    width: '2rem',
    height: '0.1875rem',
    borderRadius: '50px',
    backgroundColor: '$gray900',
    margin: '0.5rem',
    transition: '200ms',

    '&.line1-active': {
      transform: 'rotate(-45deg) translate(-8px, 8px)',
    },
    '&.line2-active': {
      opacity: 0,
    },
    '&.line3-active': {
      transform: 'rotate(45deg) translate(-7px, -7px)',
    },
  },

  '&:hover': {
    div: {
      backgroundColor: '$orange700',
    },
  },

  '@mobile': {
    display: 'initial',
  },
})

export const NavHeaderWrapper = styled('nav', {
  display: 'flex',
  gap: '2em',
  transition: 'transform 0.3s ease-in',

  a: {
    borderBottom: '3px solid transparent',
    padding: '0.5rem',

    transition: 'border 300ms, color 200ms',

    '&.active': {
      color: '$orange700',
    },

    '&:hover': {
      color: '$orange500',
      borderBottom: '3px solid $orange500',
    },
  },

  '@mobile': {
    width: '100%',
    height: '100vh',
    backgroundColor: '$background',
    padding: '2rem 1rem',

    position: 'fixed',
    top: '4.8125rem',
    right: 0,

    transform: 'translateX(100%)',

    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },

  '&.navHeader-active': {
    transform: 'translateX(0)',
  },
})
export const NavLinkLogo = styled(Link, {
  background: "url('../../../assets/logo.svg')",
})

export const NavLink = styled(Link, {
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '$gray900',

  '@mobile': {
    width: '100%',
    textAlign: 'center',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid transparent',
    transition: 'border-bottom 300ms, color 200ms',

    '&:hover': {
      color: '$orange500',
      paddingBottom: '0.5rem',
      borderBottom: '3px solid $orange500',
    },
  },
})

export const ButtonSupportMobile = styled('a', {
  display: 'none',

  '@mobile': {
    width: '100%',
    textTransform: 'uppercase',
    color: '$white',
    borderRadius: '6px',
    padding: '1rem 0',
    fontSize: '1.25rem',
    fontWeight: '700',
    backgroundColor: '$orange500',
    transition: 'background-color 300ms',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',

    '&:hover': {
      backgroundColor: '$orange700',
    },
  },
})

export const Support = styled('div', {
  '@mobile': {
    display: 'none',
  },
})
