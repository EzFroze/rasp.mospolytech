import React from "react"
import classes from "./Tables.module.scss"
import Table from "./Table/Table";

function Tables({timeTable}) {
  return (
    <div className={classes.container}>
      {Object.keys(timeTable).map(el => (<Table days={timeTable[el]} key={el} day={el}/>))}
    </div>
  )
}

export default Tables