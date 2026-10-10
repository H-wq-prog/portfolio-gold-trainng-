import React from 'react'
import style from './About.module.css'
import Cards from '../../UI/Cards/Cards'
import PageHeader from '../../UI/PageHeader/PageHeader'
export default function About() {

  return (
    <>
      <div className="container flex-col flex justify-center items-center min-h-full">

        <PageHeader
          spanHeader="ABOUT US"
          h2="WHO AM I?"
          firstpragra='On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.'
          scandpragra='Even the all-powerful Pointing has no control about the
      blind texts it is an almost unorthographic life One day
       however a small line of blind text by the name of Lorem
        Ipsum decided to leave for the far World of Grammar.'
          pragrafspans="Hi Im Jackson Ford"
        />

        <div className="card flex justify-center gap-6 mt-20 ">
          <Cards
            icon="fa-regular fa-lightbulb"
            title="Graphic Design"
            color="#2c98f0"
          />
          <Cards
            icon="fa-solid fa-earth-africa"
            title="Web Design"
            color="#ec5453"
          />

          <Cards
            icon="fa-solid fa-database"
            title="SoftWare"
            color="#f9bf3f"
          />

          <Cards
            icon="fa-solid fa-mobile-screen-button"
            title="Application"
            color="#a84cb8"
          />
        </div>
      </div>

    </>)
}
