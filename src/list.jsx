import React from "react"
import './App.css'
import { directive } from "lit-html"
import Form from './form'
import { BrowserRouter,Route,Switch,Link} from 'react-router-dom'
function list(){
    function click(){
        console.log("hello");
    }
    return(

        <div >
         <h1 class="text-2xl">Patients</h1>
         <li>
              <Link to="/form">Add New patient</Link>
              </li>
         <sl-button onClick={click} type="primary">New Patient</sl-button>
          
        </div>
    )
}
export default list