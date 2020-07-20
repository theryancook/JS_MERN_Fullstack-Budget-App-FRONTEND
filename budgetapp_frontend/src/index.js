import React from "react"
import ReactDOM, { render } from "react-dom"
import { Router, Route, useRouterHistory } from 'react-router';
import BrowserRouter from "react-router-dom"
import Nav from "./Navigation/Navigation"
import Home from "./pages/Home"
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import Budget from "./pages/Budget"; 
import CRUD from "./pages/CRUD";

function App (){
let routes = (
    
        <div>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="Settings" component={Settings} />
            <Route exact path="Form" component={CRUD} />
            <Route exact path="Budget" component={Budget} />

        </div>
    );
};


export default App; 