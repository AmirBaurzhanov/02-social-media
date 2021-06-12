const Npost = () => {
    return (
        <div>
            <section className="my-posts__section pt-4">
                <div className="wrapper">
                    <div className="posts">
                        <h1>
                            My posts
                        </h1>
                        <div className="post-form">
                            <p>
                                <textarea name="text" placeholder="Ваше сообщение" cols="50" rows="4"
                                          className="textarea"></textarea>
                            </p>
                            <button className="btn btn-outline-primary" onClick="deleteButton()">Написать</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Npost;