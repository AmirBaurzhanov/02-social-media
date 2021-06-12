import n from './static/navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <section className={n.section}>
                <div className="container">
                    <nav className={n.navbar}>
                        <NavLink to="/profile" className={n.item} activeClassName={n.active}><i className="fa fa-user-circle"></i> Profile</NavLink>
                        <NavLink to="/messages" className={n.item} activeClassName={n.active}><i className="fas fa-comments"></i> Messages</NavLink>
                        <a href="#" className={n.item}><i className="fa fa-newspaper"></i> News</a>
                        <a href="#" className={n.item}><i className="fa fa-music"></i> Music</a>
                        <a href="#" className={n.item}><i className="fas fa-sign-out-alt"></i> Exit</a>
                    </nav>
                </div>
            </section>
        </div>
    )
}

export default Navbar;