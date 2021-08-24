import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        // if menuOpen is true, add class active
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                {/* not the best practice (repeat event handler for each), we should create component and event handler one time */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
