import { Fragment } from 'react';
import { Outlet, Link, useLocation  } from 'react-router-dom';
import ContrastButton from '../../components/contrast/contrast-button.component';
import NavToggle from '../../components/nav-toggle/nav-toggle.component';

import './navigation.styles.scss';

const Navigation = () => {

     //assigning location variable
     const location = useLocation();

     //destructuring pathname from location
     const { pathname } = location;
 
     //Javascript split method to get the name of the path in array
     const splitLocation = pathname.split("/");

    return(

        <Fragment>
            <div className='navigation'>
                <div>
                <NavToggle />
                <nav>
                    <ul>
                        <li className={splitLocation[1] === "" ? "menu-active" : ""}><Link to='/'>Home</Link></li>
                        <li className={splitLocation[1] === "news-and-insights" ? "menu-active" : ""}><Link to='/news-and-insights'>News & insights</Link></li>
                        <li className={splitLocation[1] === "work" ? "menu-active" : ""}><Link to='/work' >Work</Link></li>
                        <li className={splitLocation[1] === "contact" ? "menu-active" : ""}><Link to='/contact'>Contact</Link></li>
                        <li className={splitLocation[1] === "test" ? "menu-active" : ""}><Link to='/test'>Test</Link></li>
                    </ul>
                </nav>
                </div>

                <ContrastButton />

            </div>
      <Outlet />
    </Fragment>
    )

}

export default Navigation