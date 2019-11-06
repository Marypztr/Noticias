import React, { Fragment } from "react"
import NotiCards from "../Components/NotiCards"
import { Grid } from "@material-ui/core"

function List ({notiData}) {
    return(
        <Fragment>
        <Grid container justify="center">
            {notiData.map((noticia, index) => {
                return <NotiCards name={noticia.title} image={noticia.urlToImage} to={noticia.content}/>
                
            })}
        </Grid>
        </Fragment>
    )
}

export default List;