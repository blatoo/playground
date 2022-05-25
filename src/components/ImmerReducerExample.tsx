import React, { useReducer } from "react"
import { useImmerReducer } from "use-immer"
import _ from "lodash"
import { Button } from "@mui/material"

const studentSummary = {
  name: "conny",
  exam: {
    math: { score: 60, pass: true },
    english: { score: 50, pass: false },
  },
}

export const ImmerReducerExample = () => {
  const [studentState, dispatch] = useImmerReducer((draft, action) => {
    switch (action.type) {
      case "add":
        const num = _.random(10)
        draft.exam.math.score += num
        draft.exam.math.pass = draft.exam.math.score >= 60 ? true : false
        break
      case "subtract":
        draft.exam.math.score -= _.random(10)
        draft.exam.math.pass = draft.exam.math.score >= 60 ? true : false
        break
      default:
        break
    }
  }, studentSummary)

  const onAdd = () => {
    dispatch({ type: "add" })
  }

  const onSubtract = () => {
    dispatch({ type: "subtract" })
  }

  return (
    <>
      <h1>ImmerReducerExample</h1>
      <Button onClick={onAdd}>add</Button>
      <Button onClick={onSubtract}>subtract</Button>
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
