import Preloader from '../../commons/preloader';
import p from '../static/myPost.module.css';
import ProfileStatusWithHooks from './statusWithHooks';

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";

const Profile = (props) => {
    return (
        <div className={p.info}>
            <h2 className={p.name}>{props.name}</h2>
            <ul className={p.list}>
                <li className={p.item}>{props.lookingForAJob}</li>
                <li className={p.item}>{props.howYouSearchJob}</li>
                <li className={p.item}><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></li>
            </ul>
        </div>
    )
}

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
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
                        <div className="pt-1">
                            {props.isOwner && <input type={"file"} onChange={mainPhotoSelected} />}
                        </div>
                        <Profile lookingForAJob={`Ищу работу: ${props.lookingForAJob ? 'Да' : 'Нет'}`}
                            name={props.profile.fullName}
                            status={props.status}
                            howYouSearchJob={ `О себе: ${props.profile.lookingForAJobDescription}`}
                            updateStatus={props.updateStatus}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo;