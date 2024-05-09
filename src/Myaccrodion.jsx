import React, { useState } from 'react'

const Myaccrodion = ({title,text}) => {
    const [show,setShow]=useState(false);
  return (
    <div className=''><div className='qestion'>
    <div className="ques">
        {title}

    </div>
    <div className="icon" onClick={()=>setShow(!show)} >{show ? '❤' :'💖' }</div>

 </div>
 { show && <div className='answer'>{text}</div>}

    </div>
  )
}

export default Myaccrodion