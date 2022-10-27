import React from "react"
import { Box } from "theme-ui"
import Quiz from "../components/quiz/Quiz"
import Layout from "../components/Layout"

const quiz1 = () => {
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
        <Quiz />
      </Box>
    </Layout>
  )
}

export default quiz1
