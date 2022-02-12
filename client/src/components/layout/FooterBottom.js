import classes from './FooterBottom.module.css'
import {Link} from 'react-router-dom'


function FooterBottom(){
    return(
        <div className={classes.foot}>
            <button className={classes.btn}><Link to='/add'>+</Link></button>
        </div>
    );
}

export default FooterBottom;