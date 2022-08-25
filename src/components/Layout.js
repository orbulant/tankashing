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
    <Flex sx={{ flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        <Canvas style={{ position: "fixed", minHeight: "100%" }}>
          <Suspense fallback={"Loading..."}>
            <Stars
              radius={300}
              depth={50}
              count={20000}
              factor={6}
              saturation={0}
              speed={1}
              fade
            />
          </Suspense>
        </Canvas>
        {children}
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Text>{querydata.site.siteMetadata.copyright}</Text>
      </Box>
    </Flex>
  )
}

export default Layout
