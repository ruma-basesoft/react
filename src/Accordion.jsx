import React, { useState } from 'react';
import {faqs} from './data.js';
import Myaccrodion from './Myaccrodion.jsx';


export const Accordion = () => {
    const [data , setData] = useState(faqs);
  return (
    <div className='container'>
        {data.map((curElement) => {
            return <Myaccrodion key={curElement.id} {...curElement}  />
        })}
        
        
    </div>

  )
}
