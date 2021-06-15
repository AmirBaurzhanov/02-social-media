import p from "../static/myPost.module.css";
import u from "../static/user-post.module.css";


const PostWrite = () => {
    return (
        <section className="my-posts__section pt-4">
            <div className="wrapper">
                <div className="posts">
                    <h1>
                        My posts
                    </h1>
                    <div className="post-form">
                        <p>
                            <textarea placeholder="Ваше сообщение" cols="50" rows="4"></textarea>
                        </p>
                        <button className="btn btn-outline-primary">Написать</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Post = (props) => {
    return (
        <div>
            <div className={u.info}>
                <div className={u.avatar}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU"
                        alt="logo"/>
                </div>
                <div className={u.name}>
                    <h4>
                        {props.name}
                    </h4>
                </div>
                <div className={u.text}>
                    {props.text}
                </div>
                <div className={u.like}>
                    <i className="far fa-heart"></i> - {props.likeCount}
                </div>
            </div>
            <br/>
        </div>
    )
}

const PostInfo = (props) => {
    let posts = props.postsData
        .map((posts) =>
            <Post name={posts.name} text={posts.text} likeCount={posts.likeCount}/>
        );
    return (
        <div>
            <PostWrite/>
            <section className="user-post__section pt-4">
                <div className="wrapper">
                    {posts}
                </div>
            </section>
        </div>
    )
}
export default PostInfo;