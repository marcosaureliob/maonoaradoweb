'use client'

import { GalleryContainer } from '@/styles/page/gallery'
import ImageGallery from './components/ImageGallery/page'
import { createContext, useState } from 'react'

interface ImageQuantityContextType {
  getImageQuantity: (value: number) => void
}

export const ImageQuantityContext = createContext(
  {} as ImageQuantityContextType,
)

export default function Gallery() {
  const [imageQuantity, setImageQuantity] = useState(0)

  function getImageQuantity(value: number) {
    setImageQuantity(value)
  }

  return (
    <GalleryContainer>
      <h2>Fotos da nossa comunidade</h2>

      {imageQuantity !== 0 && <span>{imageQuantity} imagens</span>}

      <ImageQuantityContext.Provider value={{ getImageQuantity }}>
        <ImageGallery />
      </ImageQuantityContext.Provider>
    </GalleryContainer>
  )
}
