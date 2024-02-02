import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Main from '../Main/index.jsx'
import { RequestProvider } from '../Context/RequestContext.jsx'

// import Nav from '../Nav/Nav.jsx';


function App() {

  return (
    <>
      <div className = 'App'>
      
          <RequestProvider>
            <Header />
            <Main />
          </RequestProvider>
      
        
      </div>
    </>
  )
}

export default App;
