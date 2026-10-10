import React from 'react'
import style from './Experinx.module.css'
export default function Experinx({header , years , descrbtion, colorIcon}) {
  return (
    <>
<div className={style.content} style={{"--iconColor":colorIcon}}>
    <h2>{header}  <span>{years}</span></h2>
    <p>{descrbtion}</p>
    
</div>
    </>
  )
}
