import h from './static/header.module.css';
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    
    return (
        <div>
            <header className={h.header}>
                <div className="container">
                    <div className={h.inner}>
                        <div className={h.title}><NavLink to="/" className={h.NavLink}><span className={h.letter}>V</span>Reacte</NavLink></div>
                    </div>
                    <div className={h.authBlock}>
                        {props.isAuth ? props.login : <NavLink to={'/login'} className={h.NavLink} >Login</NavLink>}
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;