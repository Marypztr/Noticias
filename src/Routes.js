import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Components/Home"
import NotiListContainer from "./Containers/NotiListContainer"
import Description from "./Containers/Description"

const Routes = () =>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Noticias" component={NotiListContainer}/>
            <Route exact path="/description" component={Description}/>
        </Switch>
    )
}

export default Routes;