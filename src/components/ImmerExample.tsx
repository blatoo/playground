import { TurnedInTwoTone } from "@mui/icons-material"
import { Button } from "@mui/material"
import React, { useState } from "react"
import { useImmer } from "use-immer"
import _ from "lodash"

const studentSummary = {
  name: "conny",
  exam: {
    math: { score: 60, pass: true },
    english: { score: 50, pass: false },
  },
}

export const ImmerExample = () => {
  const [studentState, setStudentState] = useImmer(studentSummary)
  const handleMathScore = () => {
    setStudentState((sum) => {
      return {
        ...sum,
        exam: {
          ...sum.exam,
          math: {
            ...sum.exam.math,
            score: sum.exam.math.score + _.random(-10, 10),
          },
        },
      }
    })
  }

  //   const handleMathScoreWrong = () => {
  //     setStudentState((sum) => {
  //       sum.exam.math.score += 10
  //       return sum
  //     })
  //   }

  const handleMathScoreImmer = () => {
    setStudentState((sum) => {
      sum.exam.math.score += 10
    })
  }
  return (
    <>
      <h1>ImmerExample</h1>

      <Button onClick={handleMathScoreImmer}>Math Pass</Button>
      <p>name: {studentState.name}</p>
      <p>
        math: {studentState.exam.math.score},{" "}
        {String(studentState.exam.math.pass)}
      </p>
      <p>
        english: {studentState.exam.english.score},{" "}
        {String(studentState.exam.english.pass)}
      </p>
    </>
  )
}
