import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Heading, Container, Box, Divider } from "theme-ui"

const contact = ({ data }) => {
  const contactInfoBasic = data.markdownRemark.frontmatter
  const contactInfoLinks = data.markdownRemark.html
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
        <Box>
          <Heading as="h2">{contactInfoBasic.title}</Heading>
        </Box>
        <Divider />
        <Box>
          <Heading as="h4">{contactInfoBasic.location}</Heading>
        </Box>
        <Divider />
        <Box>
          <Heading as="h5" sx={{ wordWrap: "break-word" }}>
            {contactInfoBasic.email}
          </Heading>
        </Box>
        <Divider/>
        <Container>
          <Box sx={{display: "flex", flexDirection: "column", alignItems:"center"}}>
            <div dangerouslySetInnerHTML={{__html: contactInfoLinks}}/>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const ContactInfoQuery = graphql`
  query ContactInfoQuery {
    markdownRemark(frontmatter: { id: { eq: 2 } }) {
      html
      frontmatter {
        email
        location
        title
      }
    }
  }
`

export default contact
