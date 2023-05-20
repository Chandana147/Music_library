const Side = ({onPlaylistClick}) => {
    return (
        <>
            <div className="display">
                <div className="sidethings">
                    <div className="top">
                        <button className="hom"><img className="home" src="https://tse3.mm.bing.net/th?id=OIP.2NaVm9dhAV5TzZRs62AXPQHaHa&pid=Api&P=0&h=180" />Home</button>
                        <button className="sea">Search</button>
                    </div>
                    <section className="lib">
                        <button className="library">Your Library</button><button className="plus">+</button><button className="arrow">➡</button>
                    </section>
                    <div>
                        <button onClick={() => onPlaylistClick()}>new playlist</button>
                    </div>
                    <div>
                        <button>browse some artists</button>
                    </div>
                </div>
                <div className="footer">
                    curent song
                    <button>Search</button>
                    <button>song name</button>

                </div>
            </div>
        </>
    )
}
export default Side;