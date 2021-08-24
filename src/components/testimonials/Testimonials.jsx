import "./testimonials.scss"

export default function Testimonials() {
    const data=[
        {
            id:1,
            name:"Yan",
            title:"Fox",
            img:"assets/person.png",
            icon:"assets/youtube.png",
            desc:"Description description lala"
        },
        {
            id:2,
            name:"Yan 2 ",
            title:"Fox",
            img:"assets/person.png",
            icon:"assets/youtube.png",
            desc:"Description description lala",
            featured:true
        },
        {
            id:3,
            name:"Yan 3",
            title:"Fox",
            img:"assets/person.png",
            icon:"assets/youtube.png",
            desc:"Description description lala"
        }
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map( (d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}
