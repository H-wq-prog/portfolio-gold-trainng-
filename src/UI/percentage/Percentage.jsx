import React from 'react'
import style from './Percentage.module.css'
export default function Percentage({ skill, color, percentWidht,  percentContent }) {
    return (

        <>
            <div className="content mb-5">
                <p className='w-fit ' style={{color:"black", fontWeight:"400" , fontSize:"18px"}}>{skill}</p>
                <div className={` ${style.perc}`} style={{ "--colorAfter": color, "--percentWidth": percentWidht , "--percentContent":percentContent }}>
                    <div className={`${style.cercl} flex justify-end ` }style={{width:percentWidht,position:"relative" , left:"8px"}}>

                   

                    </div>
                </div>
            </div>


        </>
    )
}
