
import { useNavigate } from "react-router-dom"
import "./Tunein.css"
import Main from "./Main";
import { songs } from "./Data";


export const Tunein = () => {
    const navigate = useNavigate();
    const onPlaylistClick = () => {
        navigate('/tunein/playlist')
    }


    return (
        <>
        <Main onPlaylistClick={onPlaylistClick} />
        </>
    )
}
export default Tunein;