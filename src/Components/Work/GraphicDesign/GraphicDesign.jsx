import React from 'react'
import style from './GraphicDesign.module.css'
export default function GraphicDesign() {

    const imgs = [
        {img: {src:new URL("../../../assets/img-1-C4nS0eD8.jpg",import.meta.url).href , alt:"imge"}}
        ,{img: {src:new URL("../../../assets/img-2-D-4H1m4L.jpg",import.meta.url).href , alt:"imge"}}
        ,{img: {src:new URL("../../../assets/img-3-pR2ZEVY9.jpg",import.meta.url).href , alt:"imge"}}
        ,{img: {src:new URL("../../../assets/img-4-tHccITd-.jpg",import.meta.url).href , alt:"imge"}}
    ]
    return (
        <>
              <div className="container w-4xl mt-8 flex gap-5 flex-wrap      min-h-full">
                {imgs.map((items , index)=>(
                    <div className={` ${style.image}`}>
                    <img src={items.img.src} alt={items.img.alt} />
                    <div className={`flex flex-col gap-45 ${style.content}`}>
                        <div>

                        <a href="">Work 02</a><br />
                        <span > Animation</span>
                        </div>
                        <div className="iconCard flex gap-8">
                            <i class="fa-solid fa-share-nodes"></i>
                            <i class="fa-regular fa-eye">100</i>
                            <i class="fa-regular fa-heart">49</i>
                        </div>
                    </div>
                </div>
                ))

                }
           
             
          
                
</div>
    </>
  )
}
