import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
export default function Home() {
    let [products, setProducts] = useState(
        [
            {
                title: <>Hi!<br /> Im  Jackson</>,
                buttonData: "Download cv"
                , image: {
                    src: new URL("../../assets/img_bg_1-PzvG2r05.jpg",
                        import.meta.url).href, alt: "image"
                },
                icon: "fa-solid fa-download"
            },
            {
                title: "I am a Designer",
                buttonData: "view portfolio "
                , image: {
                    src: new URL("../../assets/img_bg_2-DzCs5o-0.jpg",
                        import.meta.url).href, alt: "image"
                },
                icon: "fa-solid fa-briefcase"
            },
        ]




    )
    return (
        <>
            {products.map((items, index) => (
                <div
                
                className={`${style.container} ${index === 0 ? style.first : style.second} flex flex-col `}>

                    <div className={style.image}>
                        <img src={items.image.src} alt={items.image.alt} />
                    </div>

                    <div className={`${style.content}`}>
                        <h1 className='text-7xl'>{items.title}</h1>
                        <p>100% html5 bootstrap templates Made <br />
                            By <Link style={{ color: "var(--mainColor) ", textDecoration: "underline" }}
                                to='https://colorlib.com/">Colorlib.com'>
                                Colorlib.com</Link></p>
                        <button>{items.buttonData} <i className={items.icon}></i></button>
                    </div>

                </div>
            ))}



        </>
    )
}
