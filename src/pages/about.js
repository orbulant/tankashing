import React from "react"
import Layout from "../components/Layout"
import { Container, Box, Divider, Text } from "theme-ui"
import AnimatedText from "react-animated-text-content"

const About = () => {
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
            }}
          >
            <AnimatedText
              type="words"
              interval={0.1}
              duration={0.8}
              animation={{
                y: "100px",
                ease: "ease",
                scale: 2.26,
              }}
            >
              "I use Vim and Arch btw..." let's not be elitists and work
              together okay? fellow software developers :)
            </AnimatedText>
            <Box p={4}>
              <Text>
                Hello there! I'm currently working on several projects for
                various different clients and i'm also working fulltime as a
                Frontend Developer/FullStack Developer. I love what i do and i
                really wanna be good at it so i try endless going out of my way
                to learn new things.
              </Text>
            </Box>
            <Divider />
            <Box p={3}>
              <Text>
                I'm ISTJ-A in the MBTI test and "The Skeptic - Cd" in the DISC
                test. If that matters to anyone :O
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default About
