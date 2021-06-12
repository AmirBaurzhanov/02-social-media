import u from '../static/user-post.module.css';

const Upost = () => {
    return (
        <div>
            <section className="user-post__section pt-4">
                <div className="wrapper">
                    <div className={u.info}>
                        <div className={u.avatar}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU"/>
                        </div>
                        <div className={u.name}>
                            <h4>
                                Amir Baurzhanov
                            </h4>
                        </div>
                        <div className={u.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo
                            consequat.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Upost;