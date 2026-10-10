import React from 'react'
import PageHeader from '../../UI/PageHeader/PageHeader'
import { Link, Outlet } from 'react-router-dom'
import style from './Work.module.css'
export default function Work() {
  return (
    <>
          <div className="container mt-8 flex-col flex justify-center items-center min-h-full">

      <PageHeader
      spanHeader="MY WORK"
      h2="RECENT WORK"
      />
     

<ul className={`${style.links} flex gap-5 w-4xl`}>
  <li><Link autoFocus to="graphic">Graphic Design</Link></li>
  <li><Link to="app">Apps</Link></li>
  <li><Link to="software">Software</Link></li>
</ul>
      
<Outlet/>
</div>
    </>
  )
}
