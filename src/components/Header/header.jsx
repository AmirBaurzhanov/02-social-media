import h from './static/header.module.css';
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return (
        <div>
            <header className={h.header}>
                <div className="container">
                    <div className={h.inner}>
                        <div className={h.title}><span className={h.letter}>V</span>Reacte</div>
                    </div>
                    <div className={h.authBlock}>
                        {props.isAuth ? props.login : 
                            <NavLink className={h.NavLink} to={"login/"}><i className="fas fa-sign-in-alt"></i> Log In</NavLink>
                        }
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;