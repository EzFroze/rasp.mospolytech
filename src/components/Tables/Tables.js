import React from "react"
import classes from "./Tables.module.scss"
import Table from "./Table/Table";
import NotFoundGroup from "../NotFoundGroup/NotFoundGroup";

function Tables({timeTable}) {
  return (
    Object.keys(timeTable).length ?
      (
        <div className={classes.container}>
          {Object.keys(timeTable).map(el => (<Table days={timeTable[el]} key={el} day={el}/>))}
        </div>
      )
      : <NotFoundGroup />
  )
}

export default Tables