import n from './static/navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <section className={n.section}>
                <div className="container">
                    <nav className={n.navbar}>
                        <a href="#" className={n.item}><i className="fa fa-user-circle"></i> Profile</a>
                        <a href="#" className={n.item}><i className="fas fa-comments"></i> Messages</a>
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