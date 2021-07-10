import React from 'react'
import list from './list'
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Form from './form'
import './App.css'

function App(){
  return(
    <>
    <BrowserRouter> 
    <nav>
          <ul>
            <li>
              <Link to="/form">Registration Form</Link>
              </li>
              <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route  path="/form" component={Form} />
        <Route  path="/" component={list} />
      </Switch>             
    </BrowserRouter>
   </>
  )
}

export default App