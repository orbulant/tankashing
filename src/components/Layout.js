import React, { Suspense } from "react"
import Navbar from "./Navbar"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Box, Text } from "theme-ui"
import { Canvas } from "react-three-fiber"
import { Stars } from "@react-three/drei"

const Layout = ({ children }) => {
  const querydata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)

  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <Navbar />
      <Canvas style={{ position: "absolute", minHeight: "100%", zIndex: -1 }}>
        <Suspense fallback={"Loading... wait for Ka-Shing to wake up and generate this incessantly HAHA"}>
          <Stars
            radius={300}
            depth={50}
            count={20000}
            factor={7}
            saturation={2}
            speed={1}
            fade
          />
        </Suspense>
      </Canvas>
      <Box
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        {children}
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Text>{querydata.site.siteMetadata.copyright}</Text>
      </Box>
    </Flex>
  )
}

export default Layout
