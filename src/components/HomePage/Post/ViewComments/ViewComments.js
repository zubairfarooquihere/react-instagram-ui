import React from 'react'
import classes from './ViewComments.module.scss'
function ViewComments(props) {
  const { commentsCount, showCmtModal } = props;
  return (
    <div onClick={()=>{showCmtModal(true)}} className={classes.ViewComments}>
        View all {commentsCount} comments
    </div>
  )
}

export default ViewComments