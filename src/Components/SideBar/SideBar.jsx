import React from 'react'
import { Link } from 'react-router-dom'
import profimage from '../../assets/about-BgAkqdr2.jpg'
import style from './SideBar.module.css'
export default function SideBar() {
  return (
    <>
      <div className={`${style.container} flex flex-col
items-center 
text-center
`}>
        <div className={style.image}>
          {/* <img src={profimage} alt="profile page "className='' /> */}
        </div>
        <div className={`flex flex-col
        items-center 
        ${style.content}`}>
          <h1 className='text-4xl
'>Jackson Ford</h1>
          <p className='text-xl pb-5'><span>UI/UX/Designer  </span>in  Philippines</p>
          <ul className='text-lg opacity-75 font-light gap-4 flex flex-col items-center' >
            <li><Link to="/home" autoFocus>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/exper">Experience</Link></li>
            <li><Link to="/work">Work</Link></li>
          </ul>
        </div>
      </div>


    </>
  )
}
