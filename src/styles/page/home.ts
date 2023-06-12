import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100%',
  padding: 0,
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ContainerBanner = styled('section', {
  position: 'relative',

  width: '100%',
  padding: '13rem 0 6.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    padding: '8rem 1rem 6.25rem',
  },

  '@tablet': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },

  '@laptop': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
})

export const MaxWidthBox = styled('div', {
  width: '100%',
  maxWidth: '76rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    responsiveBanner: {
      true: {
        '@mobile': {
          flexDirection: 'column',
          gap: '2rem',
        },

        '@tablet': {
          gap: '2rem',
        },

        '@laptop': {
          gap: '2rem',
        },
      },
    },
  },
})

export const BannerInfo = styled('div', {
  width: '100%',
  maxWidth: '33.875rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2.25rem',
    lineHeight: '130%',
    fontWeight: 700,
  },

  p: {
    fontSize: '1.25rem',
    lineHeight: '160%',
    fontWeight: 400,
    color: '$gray800',
  },

  '@mobile': {
    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1rem',
    },
  },

  '@tablet': {
    h2: {
      fontSize: '2rem',
    },
  },
})

export const ImageBox = styled('section', {
  position: 'relative',
  width: '39.0625rem',
  height: '34.5rem',

  '@mobile': {
    order: -1,
    width: '100%',
    height: '20rem',
  },
})

export const FirstContainer = styled('section', {
  width: '100%',
  maxWidth: '63rem',
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  div: {
    width: '100%',
    maxWidth: '100%',

    h2: {
      fontSize: '2rem',
      lineHeight: '130%',
      fontWeight: 700,
      letter: '4%',
    },

    p: {
      fontSize: '1.125rem',
      lineHeight: '160%',
      letter: '4%',
      marginTop: '1.875rem',
    },
  },

  '@mobile': {
    padding: '0 1rem',

    div: {
      h2: {
        fontSize: '1.5rem',
      },
    },
  },

  '@tablet': {
    padding: '0 1rem',
  },

  '@laptop': {
    padding: '0 1rem',
  },
})

export const ImageBolt = styled('section', {
  width: '206px',
  height: '128px',

  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const SecondContainer = styled('section', {
  width: '100%',
  maxWidth: '76rem',

  marginTop: '10rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    marginTop: '6.25rem',
    padding: '0 1rem',

    flexDirection: 'column',
    gap: '2rem',
  },

  '@tablet': {
    padding: '0 1rem',
    gap: '2rem',
  },

  '@laptop': {
    padding: '0 1rem',
  },
})

export const ImageKids = styled('section', {
  position: 'relative',

  width: '36.875rem',
  height: '28.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    heightEmployers: {
      true: {
        height: '25.625rem',

        '@mobile': {
          height: '16rem',
        },
      },
    },
  },

  '@mobile': {
    width: '100%',
    height: '20rem',
    order: -1,

    img: {
      objectFit: 'contain !important',
    },
  },

  '@tablet': {
    width: '100%',
    height: '20rem',

    img: {
      objectFit: 'contain !important',
    },
  },
})

export const BoxInfo = styled('div', {
  width: '100%',
  maxWidth: '36rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h2: {
    fontSize: '2.25rem',
    lineHeight: '130%',
    fontWeight: 700,
  },

  p: {
    fontSize: '1.25rem',
    lineHeight: '160%',
    color: '$gray800',
  },

  '@mobile': {
    h2: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },

    p: {
      fontSize: '1.125rem',
      textAlign: 'center',
    },
  },
})

export const ContainerTwins = styled('section', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
  },
})

export const BoxContentTwins = styled('section', {
  width: '100%',
  maxWidth: '76rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@mobile': {
    padding: '0 1rem',

    flexDirection: 'column',
    gap: '2rem',
  },

  '@tablet': {
    padding: '0 1rem',

    flexDirection: 'column',
    gap: '2rem',
  },

  '@laptop': {
    padding: '0 1rem',
  },
})

export const BoxInfoTwins = styled('div', {
  width: '100%',
  maxWidth: '35.875rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  variants: {
    widthSocial: {
      true: {
        maxWidth: '43.5rem',

        '@tablet': {
          maxWidth: '35.875rem',
        },
      },
    },
  },

  h3: {
    fontSize: '2rem',
    lineHeight: '130%',
  },

  p: {
    fontSize: '1.125rem',
    lineHeight: '160%',
    color: '$gray800',
  },

  '@mobile': {
    h3: {
      fontSize: '1.5rem',
    },

    p: {
      fontSize: '1.125rem',
    },
  },
})

export const PictureBox = styled('div', {
  position: 'relative',

  width: '100%',
  maxWidth: '36.625rem',
  height: '27.875rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    order: {
      true: {
        '@mobile': {
          order: '-1',
        },

        '@tablet': {
          order: '-1',
        },
      },
    },
    objectPosition: {
      true: {
        img: {
          objectPosition: '0 0',

          '@tablet': {
            objectPosition: 'initial',
          },

          '@laptop': {
            objectPosition: 'initial',
          },
        },
      },
    },
  },

  img: {
    width: '100%',
  },

  '@mobile': {
    height: '16rem',

    img: {
      height: '16rem',
      objectFit: 'contain !important',

      objectPosition: 'initial !important',
    },
  },
})

export const BackgroundSection = styled('div', {
  variants: {
    marginTop: {
      true: {
        marginTop: '10rem',
      },
    },
  },

  position: 'relative',
  width: '100%',
  height: '10rem',
})

export const DonateSectionContainer = styled('section', {
  width: '100%',
  marginTop: '6rem',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
    fontWeight: 700,
  },

  '@mobile': {
    padding: '0 1rem',
  },
})

export const DonateBoxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '4rem',

  '@mobile': {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
})

export const DonateBox = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  flexDirection: 'column',

  h3: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },

  svg: {
    color: '$orange500',
  },

  div: {
    backgroundColor: '#FE8824',
    background: 'linear-gradient(90deg, #FE8824 0%, #ffffff 100%)',
    height: '0.2rem',
  },

  '@mobile': {
    width: '100%',
  },
})

export const PartnerList = styled('section', {
  marginTop: '10rem',
  marginBottom: '10rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '6.25rem',

  h2: {
    fontSize: '2rem',
    textAlign: 'center',
    fontWeight: '2rem',
  },

  '@mobile': {
    width: '100%',
    padding: '0 1rem',

    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '4rem',
  },
})

export const ImagePartner = styled('section', {
  position: 'relative',

  width: '11rem',
  height: '6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    width: '6.5rem',
    height: '4.4rem',
  },
})
