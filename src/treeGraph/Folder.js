import React, { useState } from 'react'

const Folder = ({file}) => {
    const [show,setShow] = useState(false)
  return (
 <>
 <div>
{file.isFolder ? <button onClick={()=>{setShow(!show)}}>{">"}</button> : null}
<h3>{file.name}</h3>
</div>
<div className='childern'>
{file.isFolder && show && file.children.map((val)=>{
    return <div>
        <Folder  file={val} />
    </div>
})}
       
</div>
 </>
  )
}

export default Folder