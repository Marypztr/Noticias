import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./Noticias.module.css"
import { withStyles } from "@material-ui/core"
import { Link } from "react-router-dom"

function NotiCards ({ name, image, to , classes }){
    return(
        <div>     
        <Card className={classes.item}>
            <CardContent>
                    <CardMedia
                          component="img"
                          alt="imagen noticia"
                          height="140"
                          image={image}  
                    />
                <Typography component="p" variant="h6" gutterBottom >{name}</Typography>
            </CardContent>
            <CardActions>
               <Link to="/description">
                <Button size="small" color="primary">
                    Ver más...
                </Button>
               </Link>
            </CardActions>
         </Card>
        </div>
    )
}

export default  withStyles({
    item:{
        width:"300px",
        height:"350px",
        margin:"1em",
        textAlign:"center",
        boxSizing:"border-box",
        margin:"2em"

    },
    media:{
        minWidth:"200px"
    }
}) (NotiCards)