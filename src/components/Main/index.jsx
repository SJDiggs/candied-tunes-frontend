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
console.log(config);


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
            <Route path="/*" element = {<Error />}/>
         </Routes>
        </main>
    )
}

export default Main;