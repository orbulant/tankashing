import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Heading } from "theme-ui"

const Navbar = () => {
  const querydata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Box
      bg="black"
      p={3}
      sx={{display: "flex", flexWrap: "wrap", alignItems: "center" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Heading sx={{ color: "white" }}>
          {querydata.site.siteMetadata.title}
        </Heading>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2}>
          <Link
            to="/"
            style={{ color: "white" }}
            activeStyle={{ color: "white", fontWeight: "800" }}
          >
            Home
          </Link>
        </Box>
        <Box p={2}>
          <Link
            to="/about"
            style={{ color: "white" }}
            activeStyle={{ color: "white", fontWeight: "800" }}
          >
            About Me
          </Link>
        </Box>
        <Box p={2}>
          <Link
            to="/contact"
            style={{ color: "white" }}
            activeStyle={{ color: "white", fontWeight: "800" }}
          >
            Contact Me
          </Link>
        </Box>
        <Box p={2}>
          <Link
            to="/portfolio"
            style={{ color: "white" }}
            activeStyle={{ color: "white", fontWeight: "800" }}
          >
            Portfolio
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
