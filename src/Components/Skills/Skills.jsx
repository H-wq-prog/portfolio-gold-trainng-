import React from 'react'
import PageHeader from '../../UI/PageHeader/PageHeader'
import Percentage from '../../UI/percentage/Percentage'
import style from "./Skills.module.css"
export default function Skills() {
  return (
    <>
      <div className="container flex-col flex justify-center items-center min-h-full">
        <PageHeader
          spanHeader="MY SPECIALTY"
          h2="MY SKILLS"
          firstpragra="The Big Oxmox advised her not to do so,
             because there were thousands of bad Commas,
              wild Question Marks and devious Semikoli,
               but the Little Blind Text didn’t listen.
                She packed her seven versalia, put her initial
                 into the belt and made herself on the way."

        />
        <div className={`w-4xl  ${style.percentage} `} >
          <Percentage
          color="#2c98f0"
          skill="Photoshop"
          percentWidht="75%"
          percentContent="'75%'"
          />
          <Percentage
          color="#ec5453"
          skill="jQuery"
          percentWidht="60%"
          percentContent="'60%'"
          />
          <Percentage
          color="#f9bf3f"
          skill="HTML5"
          percentWidht="85%"
          percentContent="'85%'"
          />
          <Percentage
          color="#a84cb8"
          skill="CSS3"
          percentWidht="90%"
          percentContent="'90%'"
          />
          <Percentage
          color="#2fa499"
          skill="WordPress"
          percentWidht="70%"
          percentContent="'70%'"
          />
          <Percentage
          color="#4054b2"
          skill="SEO"
          percentWidht="80%"
          percentContent="'80%'"
          />
     
        </div>
      </div>

    </>
  )
}
