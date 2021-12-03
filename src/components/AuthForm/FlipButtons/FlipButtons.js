import { Link } from "react-router-dom";
import { Tooltip, IconButton } from "@material-ui/core";
import FlipIcon from '@material-ui/icons/Flip';

function FlipButton(){
    return(
        <Link to="/register">
            <Tooltip title="Ainda não tem uma conta?" aria-label="ainda não tem uma conta?">
                <IconButton aria-label="flip" size="medium">
                    <FlipIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        </Link>
    )

}

function FlipBackButton(){
    return(
        <Link to="/">
            <Tooltip title="Já tem uma conta?" aria-label="já tem uma conta?">
                <IconButton aria-label="flip" size="medium">
                    <FlipIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        </Link>
    )
}


export { FlipButton, FlipBackButton }