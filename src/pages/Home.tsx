import React from "react"
import { ImmerExample } from "../components/ImmerExample"
import { ImmerReducerExample } from "../components/ImmerReducerExample"

type Props = {}

export const Home = (props: Props) => {
  return (
    <div>
      <ImmerReducerExample></ImmerReducerExample>
    </div>
  )
}
