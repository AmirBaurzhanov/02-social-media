import p from './static/myPost.module.css';
import Npost from "./components/new-post";
import Upost from "./components/user-post";


const Post = () => {
    return (
        <div>
            <section className={p.section}>
                <div className="wrapper">
                    <div className={p.avatar}>
                        <img className={p.image}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU"/>
                        <br/>
                        <button className="btn btn-outline-primary">Изменить</button>
                        <div className={p.info}>
                            <h2>Amir Baurzhanov</h2>
                            <ul className={p.list}>
                                <li className={p.item}>Дата рождения: 22.07.2006</li>
                                <li className={p.item}>Дата рождения: 22.07.2006</li>
                                <li className={p.item}>Дата рождения: 22.07.2006</li>
                                <li className={p.item}>Дата рождения: 22.07.2006</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Npost/>
            <Upost/>
        </div>
    )
}

export default Post;