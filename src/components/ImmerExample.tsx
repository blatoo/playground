import { Button } from "@mui/material"
import React, { useState } from "react"

type Props = {}

const studentSummary = {
  name: "conny",
  exam: {
    math: 60,
    english: 50,
  },
}

export const ImmerExample = (props: Props) => {
  const [studentState, setStudentState] = useState(studentSummary)
  const handleMathScore = () => {
    setStudentState((sum) => {
      return { ...sum, exam: { ...sum.exam, math: sum.exam.math + 10 } }
    })
  }
  return (
    <>
      <h1>ImmerExample</h1>

      <Button onClick={handleMathScore}>Math Pass</Button>
      <p>name: {studentState.name}</p>
      <p>math: {studentState.exam.math}</p>
      <p>english: {studentState.exam.english}</p>
    </>
  )
}
