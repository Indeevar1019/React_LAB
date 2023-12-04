import React from 'react'

const ChildComponet = (props) => {
  return (
    <div>
        <h3>Usage of Props</h3>
        <p>{props.message}</p>
    </div>
  )
}

export default ChildComponet;
