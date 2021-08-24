import "./topbar.scss"
import {PersonRounded, MailOutlineRounded} from "@material-ui/icons"


export default function Topbar( { menuOpen , setMenuOpen } ) {
    return (
        <div className={"topbar " + (menuOpen && "active") }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Marcy</a>
                    <div className="itemContainer">
                        <PersonRounded className="icon"/>
                        <span>+351 966 162 636</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutlineRounded className="icon"/>
                        <span>biacardoso98@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>

            </div>
            
        </div>
    )
}
