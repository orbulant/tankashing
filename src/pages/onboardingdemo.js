import React, { useContext } from "react"
import { ShepherdTour, ShepherdTourContext } from "react-shepherd"
import { Button, Heading, Container, Box } from "theme-ui"
import Navbar from "../components/Navbar"
import "../css/styles.css"

const tourOptions = {
  defaultStepOptions: { showCancelLink: true },
  useModalOverlay: true,
  keyboardNavigation: false,
}

const steps = [
  {
    id: "intro",
    attachTo: { element: ".first-container", on: "bottom" },
    scrollTo: true,
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0)
          resolve()
        }, 500)
      })
    },
    buttons: [
      {
        classes: "btn",
        text: "Exit",
        type: "cancel",
      },
      {
        classes: "btn",
        text: "Back",
        type: "back",
      },
      {
        classes: "btn btn-success",
        text: "Next",
        type: "next",
      },
    ],
    classes: "first-step",
    //highlightClass: "highlight",
    title: "5 Free Transactions for you now!",
    showCancelLink: true,
    text: ["Trade now and enjoy 5 completely FREE transactions!"],
    when: {
      show: () => {
        console.log("show step")
      },
      hide: () => {
        console.log("hide step")
      },
    },
  },
  {
    id: "secondStep",
    attachTo: { element: ".second-container", on: "bottom" },
    scrollTo: true,
    beforeShowPromise: function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0)
          resolve()
        }, 500)
      })
    },
    buttons: [
      {
        classes: "btn",
        text: "Exit",
        type: "cancel",
      },
      {
        classes: "btn",
        text: "Back",
        type: "back",
      },
      {
        classes: "btn btn-success",
        text: "Next",
        type: "next",
      },
    ],
    classes: "first-step",
    //highlightClass: "highlight",
    title: "We promise this isn't a scam!",
    showCancelLink: true,
    text: ["FOR REAL!"],
    when: {
      show: () => {
        console.log("show step")
      },
      hide: () => {
        console.log("hide step")
      },
    }
  },
]

const ButtonForTour = () => {
  const tour = useContext(ShepherdTourContext)

  return (
    <Button color="black" onClick={tour.start}>
      Start Tour
    </Button>
  )
}

const onboardingdemo = () => {
  return (
    <>
      <Navbar />
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <ButtonForTour />
      </ShepherdTour>
      <Box p={4}>
        <Container className="first-container" p={4}>
          <Heading>A simple header element</Heading>
        </Container>
        <Container p={4}>
          <Heading>Empty</Heading>
        </Container>
        <Container className="second-container" p={4}>
          <Heading>A second simple header element</Heading>
        </Container>
      </Box>
    </>
  )
}

export default onboardingdemo
