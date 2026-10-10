import React from 'react'
import PageHeader from '../../UI/PageHeader/PageHeader'
import Experinx from '../../UI/Exper/Experinx'
import style from './Exper.module.css'
export default function Exper() {
  return (
    <>
      <div className="container mt-8 flex-col flex justify-center items-center min-h-full">
        <PageHeader
          spanHeader="EXPERIENCE"
          h2="WORK EXPERIENCE"
        />
        <div className= {`relative w-4xl ${style.content}`}>
          <Experinx
            header="Full Stack Developer"
            years=" 2017-2018"
            descrbtion="Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."
            colorIcon="#2c98f0"
          />
          <Experinx
            header="Front End Developer at Google Company "
            years=" 2017-2018"
            descrbtion="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            colorIcon="#d9534f"
          />
          <Experinx
            header="System Analyst "
            years=" 2017-2018"
            descrbtion="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
            colorIcon="#f0ad4e"
          />
    
        </div>
      </div>
    </>
  )
}
