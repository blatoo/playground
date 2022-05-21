import React from "react"
import { Outlet } from "react-router-dom"

type Props = {}

export const Teams = (props: Props) => {
  return (
    <div>
      <h3>Teams</h3>
      <Outlet />
    </div>
  )
}
