import React, { useEffect } from 'react'

export default function Pic() {
  useEffect(()=>{
    var i=0
    var j=0
    setInterval(() => {
      if(j===0)
      { 
        i++
        document.getElementsByClassName('My_Pic_Outline')[0].style.marginTop=i+'px'
        if(i===10)
        {
          j=1
        }
      }
      else{
        i--
        document.getElementsByClassName('My_Pic_Outline')[0].style.marginTop=i+'px'
        if(i===0)
        {
          j=0
        }
      }
    }, 100);
  },[])
  return (
    <div className='My_Pic_Outline'>
      <div className='My_Pic_Outline_Half'>
        <div className='Pic_Frame'>
            <div className='My_Pic'>
            </div>
        </div>
      </div>
    </div>
  )
}
