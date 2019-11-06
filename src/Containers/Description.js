import React, { Component } from "react"

class Description extends Component{

    render(){
        
        const { match } =this.props

        console.log("Hola prro" + match.article);

        return(
            <>
            <h1>Info</h1>
            <p>{match.params.content}</p>

            </>
        )
    }
}

export default Description