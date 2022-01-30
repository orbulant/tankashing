import React from "react"
import Navbar from "./Navbar"
import { graphql, useStaticQuery } from "gatsby"
import { Flex, Box, Text} from "theme-ui"

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
        {children}
      </Box>
      <Box sx={{ alignSelf: "center" }}>
        <Text>{querydata.site.siteMetadata.copyright}</Text>
      </Box>
    </Flex>
  )
}

export default Layout
