import React from 'react'
import ChildComponet from './ChildComponet';
const ParentComponent = () => {
    const data="Data from parent";
  return (
    <div><h3>ParentComponent</h3>
        <p>Inside Parent Component</p>
        <ChildComponet message={data}/>
    </div>
  )
}

export default ParentComponent
