import { Routes, Route } from "react-router-dom"

import Landing from '../../pages/Landing.jsx'
import Tools from '../../pages/Tools'
import About from '../../pages/About'
import Merch from '../../pages/Merch'
import Shows from '../../pages/Shows'
import Tip from '../../pages/Tip'
import Error from '../../pages/Error'
import config from "../../config";
import Requests from "../../pages/Requests.jsx"
import Profile from '../../pages/Profile.jsx'
import DeleteSong from "../../pages/DeleteSong.jsx"
import ResetPlaylist from "../../pages/ResetPlaylist.jsx"

// console.log(config);


const Main = (props) => {

    return (
       <main className = 'container'>
         <Routes>
            <Route path="/" element = {<Landing />}/>
            <Route path="/tools" element = {<Tools />}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/merch" element = {<Merch />}/>
            <Route path="/shows" element = {<Shows />}/>
            <Route path="/tip" element = {<Tip />}/>
            <Route path="/requests" element = {<Requests />}/>
            <Route path="/profile" element = {<Profile />}/>
            <Route path="/deletesong" element = {<DeleteSong />}/>
            <Route path="/resetplaylist" element = {<ResetPlaylist />}/>
            <Route path="/*" element = {<Error />}/>
         </Routes>
        </main>
    )
}

export default Main;