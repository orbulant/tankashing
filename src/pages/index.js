import { graphql } from "gatsby"
import React, { useState, useRef, Suspense } from "react"
import { Container, Heading, Text } from "theme-ui"
import Layout from "../components/Layout"
import Typewriter from "typewriter-effect"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useTexture } from "@react-three/drei"

const MeshedUp = () => {
  const props = useTexture({
    map: "/cubeface.jpeg",
  })
  return <meshStandardMaterial {...props} />
}

const Cube = props => {
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
      scale={active ? [5, 5, 5] : [4, 4, 4]}
      onClick={e => setActive(!active)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <MeshedUp />
    </mesh>
  )
}

export default function Home({ data }) {
  const homepage = data.markdownRemark
  return (
    <Layout>
      <Container p={4}>
        <div style={{ width: "100%", height: "30vh" }}>
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.6} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={"Loading..."}>
              <Cube />
            </Suspense>
          </Canvas>
        </div>
        <Heading
          sx={{ fontSize: 32 }}
          style={{ marginTop: 16, marginBottom: 16 }}
        >
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Tan Ka-Shing")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Welcomes you :)")
                .start()
            }}
            options={{
              loop: true,
            }}
          />
        </Heading>
        <Text sx={{ fontSize: 22 }}>{homepage.frontmatter.description}</Text>
        <div dangerouslySetInnerHTML={{ __html: homepage.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { id: { eq: 1 } }) {
      html
      frontmatter {
        slogan
        description
      }
    }
  }
`
