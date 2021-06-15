import p from '../static/myPost.module.css';

// const Info = (props) => {
//     return (
//         <div className={p.info}>
//             <h2>{props.name}</h2>
//             <ul className={p.list}>
//                 <li className={p.item}>{props.info}</li>
//             </ul>
//         </div>
//     )
// }

const ProfileInfo = () => {
    return (
        <div>
            <section className={p.section}>
                <div className="wrapper">
                    <div className={p.avatar}>
                        <img className={p.image}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU" alt="logo"/>
                        <br/>
                        <button className="btn btn-outline-primary">Изменить</button>
                        <ProfileInfo info="Дата рождения: 22.07.2006" name="Amir Baurzhanov" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo;