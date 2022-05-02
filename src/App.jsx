import React from 'react'
import { useRef } from 'react';
import { Cartesian3, Color } from 'cesium'
import { Viewer, Entity } from 'resium'

function App() {

  const ref = useRef(null);

  return (
    <Viewer full
        ref={ref}
        baseLayerPicker={true}
        infoBox={true}
        homeButton={false}
        timeline={false}
        scene3DOnly={true}
        shadows={true}
        fullscreenButton={false}
        animation={false}  
    >
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.WHITE }}
        description="Tokyo"
      />
    </Viewer>
  )
}

export default App