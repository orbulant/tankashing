import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container, Box } from "theme-ui"

const portfolio = ({ data }) => {
  const portfolioContent = data.markdownRemark.html

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
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: portfolioContent }} />
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const PortfolioQuery = graphql`
  query PortfolioQuery {
    markdownRemark(frontmatter: { id: { eq: 3 } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default portfolio
