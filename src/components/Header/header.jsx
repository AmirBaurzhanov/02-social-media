import h from './static/header.module.css';


const Header = () => {
    return (
        <div>
            <header className={h.header}>
                <div className="container">
                    <div className={h.inner}>
                        <div className={h.title}><span className={h.letter}>V</span>Reacte</div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;