import React, { useState, useRef, Suspense} from "react"
import Layout from "../components/Layout"
import { Canvas, useFrame } from "react-three-fiber"
import { OrbitControls, useTexture } from "@react-three/drei"
import { Heading, Box, Button } from "theme-ui"

const ChanieMesh = () => {
  const props = useTexture({
    map: "/chanie.jpg",
  })
  return <meshStandardMaterial {...props} />
}

const ChanieShape = props => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [10, 2, 3] : [8, 3, 3]}
      onClick={e => setActive(!active)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <ChanieMesh />
    </mesh>
  )
}

const Chanie = () => {
  const [showChanie, setShowChanie] = useState(false)

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Heading as={"h2"}>Hi Chanie! XOXOXOX LMAOOOOOOOO</Heading>
        <div style={{ width: "80%", height: "40vh"}}>
          {showChanie && (
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.3} />
              <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Suspense fallback={"Loading...."}>
                <ChanieShape />
              </Suspense>
            </Canvas>
          )}
        </div>
        <div>
          <Button
            style={{ color: "black", position: "relative"}}
            onClick={e => {
              e.preventDefault()
              setShowChanie(!showChanie)
            }}
          >
            Click here for a surprise!
          </Button>
        </div>
      </Box>
    </Layout>
  )
}

export default Chanie
