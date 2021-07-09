import React from 'react'
import list from './list'
import home from './home'
import form from './form'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import App1 from './App1'

function App(){
  return(
    <>
    <BrowserRouter>     
      <Switch>
        <Route  path="/form" component={form} />
        <Route  path="/list" component={list} />
        <Route  path="/home"  component={home} />
        <Route path="/" component={App1}/>
      </Switch>             
    </BrowserRouter>
   </>
  )
}

export default App