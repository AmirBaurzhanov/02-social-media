import Preloader from '../../commons/preloader';
import p from '../static/myPost.module.css';

let defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'

const Profile = (props) => {
    return (
        <div className={p.info}>
            <h2>{props.name}</h2>
            <ul className={p.list}>
                <li className={p.item}>{props.lookingForAJob}</li>
                <li className={p.item}>{props.howYouSearchJob}</li>
                <li className={p.item}>{props.status}</li>
            </ul>
        </div>
    )
}

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <section className={p.section}>
                <div className="wrapper">
                    <div className={p.avatar}>
                        <img className={p.image}
                            src={props.profile.photos.large != null ? props.profile.photos.small : defaultImage}
                            alt="logo" />
                        <br />
                        <button className="btn btn-outline-primary">Изменить</button>
                        <Profile lookingForAJob={`Ищу работу: ${props.lookingForAJob ? 'Да' : 'Нет'}`}
                            name={props.profile.fullname}
                            status={`Статус: ${props.profile.aboutMe}`}
                            howYouSearchJob={ `Как ищу работу: ${props.profile.lookingForAJobDescription}`}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo;