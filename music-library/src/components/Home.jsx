import { useNavigate } from "react-router-dom";
import Login from "./Login"
import SignUp from "./SignUp"
import './Home.css'

export const Home = (username, password) => {
    const navigate = useNavigate();
    const onLoginClick = () => {
        navigate('/login')
    }
    const onSignUpClick = () => {
        navigate('/SignUp')
    }
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img className="tunein-logo" src="https://clipground.com/images/music-png-logo-2.png" />
                    <h1>Tune In</h1>
                </div>
                <h1 className="tagline">Plug into the world of music</h1>
                <div className="buttons-home">
                    <button className="login-click" onClick={() => onLoginClick()}>LOGIN</button>
                    <button className="signup-click" onClick={() => onSignUpClick()}>SIGNUP</button>
                </div>
            </div>

            <div className="pics">
                <div className="side">
                    <button className="sides" > <img className="home" src="https://tse3.mm.bing.net/th?id=OIP.2NaVm9dhAV5TzZRs62AXPQHaHa&pid=Api&P=0&h=180" />Home</button>
                    <button className="sides" > <img className="search" src="https://tse3.mm.bing.net/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&pid=Api&P=0&h=180" />Search</button>
                    <button className="sides" > <img className="library-home" src="https://www.pinclipart.com/picdir/middle/365-3651885_book-black-and-white-png-peoplesoft-learn-peoplesoft.png" />Your Library</button>
                    <button className="sides" > <img className="playlist" src="http://cdn.onlinewebfonts.com/svg/img_495804.png" />Create Playlist</button>
                    <button className="sides" > <img className="liked" src="http://www.pngall.com/wp-content/uploads/4/Black-Heart-Symbol-PNG-Image.png" />Liked Songs</button>
                    <button className="sides" > <img className="english" src="http://cdn.onlinewebfonts.com/svg/img_524431.png" />English</button>
                    <a href="">Annual Plans</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Music Plans</a>
                </div>
                <div className="music-logo">
                </div>
            </div>
        </>
    )
}