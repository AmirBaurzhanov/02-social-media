const New = () => {
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
                                <textarea placeholder="Ваше сообщение" cols="50" rows="4"></textarea>
                            </p>
                            <button className="btn btn-outline-primary">Написать</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default New;