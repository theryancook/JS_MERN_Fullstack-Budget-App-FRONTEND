import React from "react"
import ReactDOM from "react-dom"
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import Crud from "./pages/CRUD";
import Budget from "./pages/Budget";
import {BrowserRouter, Route} from "react-router-dom";


class App extends Component {
        

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/FAQ" component={FAQ} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/form" component={Crud} />
                    <Route exact path="/budget" component={Budget} />
                
                </BrowserRouter>
            </div>
        );
    };
};


export default App; 