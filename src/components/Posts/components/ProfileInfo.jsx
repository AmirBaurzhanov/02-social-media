import Preloader from '../../commons/preloader';
import p from '../static/myPost.module.css';

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";

const Profile = (props) => {
    return (
        <div className={p.info}>
            <h2 className={p.name}>{props.name}</h2>
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
                            src={props.profile.photos.large != null ? props.profile.photos.small : defaultImageURL}
                            alt="logo" />
                        <br />
                        <button className="btn btn-outline-primary mt-1">Изменить</button>
                        <Profile lookingForAJob={`Ищу работу: ${props.lookingForAJob ? 'Да' : 'Нет'}`}
                            name={props.profile.fullName}
                            status={`О себе: ${props.profile.aboutMe}`}
                            howYouSearchJob={ `Статус: ${props.profile.lookingForAJobDescription}`}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo;