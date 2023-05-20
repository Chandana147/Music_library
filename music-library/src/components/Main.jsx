import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import './Tunein.css'
import Menu from './Menu'
import ReactAudioPlayer from 'react-audio-player';
import { songs } from './Data'

const Main = ({ onPlaylistClick }) => {
    const onlogoClick = () => {
        return (
            <>

            </>
        )
    }
    return (
        <>
            <div className="tunein">
                <div className="display">
                    <div className="sidethings">
                        <div className="top">
                            <button className="hom">Home</button>
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
                    <div className="content">
                    <div className="navbar">
                            <h1>nav bar</h1><Menu />
                    </div>
                    <div className="songs">
                        {songs.map((song) => {
                            return (
                                <section>
                                    <article>
                                        <p>Title:{song.title}</p>
                                    </article>
                                    <article>
                                        <p> Artist: {song.artists}</p>
                                    </article>
                                    <img className="butter-img" src={song.img} alt='' />
                                    <ReactAudioPlayer
                                        src={song.url}
                                        autoPlay={false}
                                        controls
                                    />
                                    {/* <audio src={song.url}></audio> */}
                                </section>
                            )
                        })}   
                        </div>        
                    </div>
                </div>
                <div className="footer">
                    <div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Main;