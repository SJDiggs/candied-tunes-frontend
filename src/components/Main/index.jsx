import { Routes, Route } from "react-router-dom"

import Landing from '../../pages/Landing.jsx'
import Tools from '../../pages/Tools'
import About from '../../pages/About'
import Merch from '../../pages/Merch'
import Shows from '../../pages/Shows'
import Tip from '../../pages/Tip'
import Error from '../../pages/Error'


const Main = (props) => {

    return (
       <main className = 'container'>
         <h1 className="text-4xl font-bold mt-20 text-zinc-400">Main</h1>
         <Routes>
            <Route path="/" element = {<Landing />}/>
            <Route path="/tools" element = {<Tools />}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/merch" element = {<Merch />}/>
            <Route path="/shows" element = {<Shows />}/>
            <Route path="/tip" element = {<Tip />}/>
            <Route path="/*" element = {<Error />}/>
         </Routes>
        </main>
    )
}

export default Main;