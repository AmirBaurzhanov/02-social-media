import c from './static/users.module.css'

const Users = () => {
    return (
        <div>
            <section className={c.active}>
                <div className="wrapper">
                    <div className={c.contact}>
                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU"
                                className={c.image}/>
                        </div>
                        <div className={c.username}>
                            <h5>
                                Amir Baurzhanov
                            </h5>
                        </div>
                        <br/>
                        <div className={c.time}>
                            0:38
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Users;