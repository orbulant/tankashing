import React, { useState } from "react"
import { Button, Heading, Card, Image, Text, Box } from "theme-ui"

const Quiz = () => {
  const [state, setState] = useState(0)

  const prevState = () => {
    if (state === 0) return
    setState(prevState => prevState - 1)
  }

  const nextState = () => {
    setState(prevState => prevState + 1)
  }

  return (
    <div>
      {state === 0 && (
        <div>
          <Heading padding={10}>Hi, my beautiful Chanie.</Heading>
          <Heading as="h2" padding={10}>
            You're always such an amazing person to me.
          </Heading>
          <Heading as="h2" padding={10}>
            But do you think you can pass this test?
          </Heading>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Box>
              <Card
                sx={{
                  maxWidth: 256,
                  maxHeight: 480,
                  padding: 2,
                  borderRadius: 4,
                  boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
                  background: "white",
                }}
              >
                <Image src={`../../parkimage.jpeg`} />
                <Text color="black">Our day at the park</Text>
              </Card>
            </Box>
          </div>
        </div>
      )}
      {state === 1 && (
        <div>
          <Heading>Let's proceed..</Heading>
          <Heading as="h3" padding={20}>
            {" "}
            If you can answer this with more than 80% correct, then....
          </Heading>
        </div>
      )}

      {state === 2 && (
        <div>
          <Heading>What is </Heading>
        </div>
      )}
      <div
        style={{
          display: "flex",
          margin: "40px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "400px",
        }}
      >
        <Button onClick={prevState} color="black" sx={{ width: "100px" }}>
          Back
        </Button>
        <Button onClick={nextState} color="black" sx={{ width: "100px" }}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Quiz
