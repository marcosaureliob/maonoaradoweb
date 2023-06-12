import { styled } from '@stitches/react'
import Link from 'next/link'
export const ButtonSupportWrapper = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 2rem',

  backgroundColor: '$orange500',
  gap: '1rem',
  color: '#FFF',
  borderRadius: '6px',
  transition: 'background-color 300ms',

  '&:hover': {
    backgroundColor: '$orange700',
  },
})

export const TextButton = styled('span', {
  textTransform: 'uppercase',
  fontSize: '1.25rem',
  fontWeight: '700',
})
