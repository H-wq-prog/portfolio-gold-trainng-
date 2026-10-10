import React from 'react'

export default function Cards({icon, title, color}) {
  return (
    <>
    <div className="container ">
    
            <div className="content bg-white flex flex-col gap-8 " 
            style={{width:"212px",padding:"22px" 
            ,boxShadow:"0 0 56px -8px #0000002b"
            ,borderBottom:`3px solid ${color}`
            }}>


                <i class={`${icon} text-3xl font-normal `} style={{color:`${color}`}}></i>
                <h3 className='text-base font-medium mb-5'>{title}</h3>
            </div>

    </div>
  
    </>
  )
}
