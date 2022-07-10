import { Link } from "react-router-dom";
import {MAIN_URL} from '../../utils/links'

const styles = {
    textDecoration: 'none',
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: 50
}

export default function Logo(){
    return(
        <Link style={styles} to={{pathname: MAIN_URL}}>
            LOGO
        </Link>
    )
}