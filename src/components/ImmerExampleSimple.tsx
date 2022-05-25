import { Button } from "@mui/material"
import React, { useState } from "react"
import { useImmer } from "use-immer"

const studentSummary = {
  name: "conny",
  scores: {
    math: 50,
    english: 40,
  },
}

export const ImmerExampleSimple = () => {
  const [studentState, setStudentState] = useState(studentSummary)
  const handleMathScore = () => {
    setStudentState((sum) => {
      return {
        ...sum,
        scores: { 
          ...sum.scores, 
          math: sum.scores.math + 10 
        },
      }
    })
  }

  // const handleMathScoreImmer = () => {
  //   setStudentState((sum) => {
  //     sum.scores.math += 10
  //   })
  // }

  return (
    <>
      <h1>ImmerExample</h1>

      <Button onClick={handleMathScore}>Math Pass</Button>
      <p>name: {studentState.name}</p>
      <p>math: {studentState.scores.math}</p>
      <p>english: {studentState.scores.english}</p>
    </>
  )
}
