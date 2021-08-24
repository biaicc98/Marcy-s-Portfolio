import "./works.scss"
import { useState } from "react"

export default function Works() {

    const [currentSlide, setCurrentSlide]=useState(0)

    const data=[
        {
            id:"1",
            icon: "./assets/cell-phone.png",
            title: "item 1",
            desc: "description here",
            img: "./assets/site.png"
        },
        {
            id:"2",
            icon: "./assets/cell-phone.png",
            title: "item 2",
            desc: "description here",
            img: "./assets/site.png"
        },
        {
            id:"3",
            icon: "./assets/cell-phone.png",
            title: "item 3",
            desc: "description here",
            img: "./assets/site.png"
        }
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1)  :  
        setCurrentSlide(currentSlide<data.length-1 ? currentSlide + 1 : 0 )
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => ( 
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/site.png" alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/down-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/down-arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />

        </div>
    )
}
