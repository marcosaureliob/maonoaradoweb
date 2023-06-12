import React from 'react'
import dynamic from 'next/dynamic'

export default function MapContainer() {
  const MapWithNoSSR: any = dynamic(() => import('./Map'), {
    ssr: false,
  })

  return (
    <main>
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  )
}
