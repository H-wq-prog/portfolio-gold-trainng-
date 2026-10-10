import React from 'react'
import style from '../../Components/About/About.module.css'
export default function PageHeader({ spanHeader, h2, firstpragra, scandpragra, pragrafspans }) {
    return (
        <>
            <div className={`w-4xl ${style.content}`}>
                <span className={`${style.aboutSpan} text-xs font-normal`}>{spanHeader}</span>
                <h2 className='text-xl font-semibold'>{h2}</h2>
                <p><span className={style.pragrafspan}>{pragrafspans}   </span>
                    {firstpragra}
                    <br />
                    <br />
                    {scandpragra}
                </p>
            </div>
        </>
    )
}
