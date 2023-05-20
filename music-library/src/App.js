
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Tunein from './components/Tunein';
import Playlist from './components/Playlist';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
    <Route path="/login" element={<Login/>}>
    </Route>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/tunein" element={<Tunein/> }/>
    <Route path="/tunein/playlist" element={<Playlist />} />
  </Routes>
  </>
  );
}

export default App;
