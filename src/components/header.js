import { NavLink,Outlet } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <p className="navbar-brand">THE OPEN BLOG</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li id="home"><NavLink to="/">HOME</NavLink></li>
                        <li id="compose"><NavLink to="/compose">COMPOSE</NavLink></li>
                        <li id="about"><NavLink to="/about">ABOUT</NavLink></li>
                        <li id="contact"><NavLink to="/contact">CONTACT</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
}