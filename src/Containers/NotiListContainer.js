import React, { Component } from "react"
import List from "../Components/List"
import axios from "axios"
import AppNav from "../Components/AppNav"


class NotiListContainer extends Component {

    state={
        notiData: []
    } 

    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=mx&apiKey=badfce0b89e74eaf9a2fcbdf02c6965c`)
        .then(res=>{
            const notiData = res.data.articles
            
            this.setState({notiData})
        })
    }
    render(){

        const { notiData } = this.state

        return(
            <>
            <AppNav/>
            <List  notiData={notiData}/>
            </>
        )
    }
}

export default NotiListContainer;