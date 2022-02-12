import {Link} from 'react-router-dom'

import  classes from './MainNav.module.css'

function MainNav(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Toodo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='favs'>Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;