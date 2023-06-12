import { styled } from '@stitches/react'

export const MapWrapper = styled('section', {
  border: '1px solid',

  variants: {
    zIndex1: {
      true: {
        position: 'relative',
        zIndex: '-1 !important',
      },
    },
  },
})
