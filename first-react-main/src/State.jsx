import React, { useState } from 'react'

function State() {
  const [Count,setCount] = useState(0)
    return (
   <>
    <p>You Clicked {Count} times</p>
  <button className='border p-1 rounded' 
          onClick={()=> { setCount(Count + 1)}
  }> 
  Click
</button>

</>
)
}
export default State
