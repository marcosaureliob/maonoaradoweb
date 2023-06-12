import { useContext, useEffect } from 'react'

import Image from 'next/image'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

import LightGallery from 'lightgallery/react'
import lgVideo from 'lightgallery/plugins/video'

import { imageDatabase } from '@/database/index'

import { ImageContainer } from '@/styles/page/gallery'
import { ImageQuantityContext } from '../../page'

const invertImageDatabase = imageDatabase.slice(0).reverse()

const containImage = invertImageDatabase.length !== 0

interface ImageProps {
  title: string
  src: string
}

export default function ImageGallery() {
  const imageQuantity = invertImageDatabase.length
  const { getImageQuantity } = useContext(ImageQuantityContext)

  useEffect(() => {
    getImageQuantity(imageQuantity)
  }, [getImageQuantity, imageQuantity])

  return (
    <>
      {containImage ? (
        <LightGallery
          elementClassNames={ImageContainer()}
          plugins={[lgVideo]}
          mode="lg-fade"
        >
          {invertImageDatabase.map((image: ImageProps) => {
            return (
              <a
                key={image.title}
                className="gallery-item"
                data-src={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  style={{ objectFit: 'cover' }}
                  fill
                />
              </a>
            )
          })}
        </LightGallery>
      ) : (
        <h3>Em breve teremos novas fotos da nossa comunidade</h3>
      )}
    </>
  )
}
