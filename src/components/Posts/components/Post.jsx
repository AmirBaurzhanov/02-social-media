import u from "../static/user-post.module.css";
import React from "react";
import AddPostFormRedux from "./form";

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";

const Post = (props) => {
    return (
        <div>
            <div className={u.info}>
                <div className={u.avatar}>
                    <img
                        src={defaultImageURL}
                        alt="logo" />
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
                    <i className="far fa-heart"></i> {props.likeCount}
                </div>
            </div>
            <br />
        </div>
    )
}

const PostInfo = (props) => {
    let posts = props.postsData.postsData
        .map((posts) =>
            <Post name={posts.name} key={posts.id} text={posts.text} likeCount={posts.likeCount} />
        );
    let onSendPostClick = (values) => {
        props.addPost(values.textarea)
    }
    return (
        <div>
            <section className="my-posts__section pt-4">
                <div className="wrapper">
                    <div className="posts">
                        <h1>
                            My posts
                        </h1>
                        <div className="post-form">
                            <AddPostFormRedux onSubmit={onSendPostClick}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="user-post__section pt-4">
                <div className="wrapper">
                    {posts}
                </div>
            </section>
        </div>
    )
}
export default PostInfo;