import React, { useState, useRef } from "react"
import { Button, Text } from "theme-ui"

const QuestionSelector = ({
  question,
  answers,
  questionIndex,
  answerIndex,
  selectedAnswers,
  setSelectedAnswers,
}) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginTop: 30,
      }}
    >
      <Text>{question}</Text>
      {answers.map((each, index) => (
        <Button
          key={index}
          sx={
            selectedAnswers[questionIndex] === index
              ? { bg: "red" }
              : { bg: "white", color: "black" }
          }
          onClick={() =>
            setSelectedAnswers({ ...selectedAnswers, [questionIndex]: index })
          }
        >
          {each}
        </Button>
      ))}
    </div>
  )
}
export default QuestionSelector
