import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState, useEffect } from "react"
import {
    featuredPortfolio,
    webappPortfolio,
    traditionalartPortfolio,
    digitalartPortfolio,
    photomanipulationPortfolio
} from "../../data"



export default function Portfolio() {
    // when selected matches an id, that id will be the one selected
    const [selected, setSelected]= useState("featured")
    const [data, setData]= useState([])

    const list = [
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"webapp",
            title:"Web App"
        },
        {
            id:"traditionalart",
            title:"Traditional Art"
        },
        {
            id:"digitalart",
            title:"Digital Art"
        },
        {
            id:"photomanipulation",
            title:"Photo Manipulation"
        }
    ]

    useEffect(()=> {

        switch(selected){
            case "featured":
                setData(featuredPortfolio)
                break
            case "webapp":
                setData(webappPortfolio)
                    break
            case "traditionalart":
                setData(traditionalartPortfolio)
                break
            case "digitalart":
                setData(digitalartPortfolio)
                break
            case "photomanipulation":
                setData(photomanipulationPortfolio)
                break
            default:
                setData(featuredPortfolio)
        }
        //dependency is selected, when selected cahnges this is executed
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title}
                    active={selected===item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                    </div>
                ))}
                
                
            </div>
            
        </div>
    )
}
