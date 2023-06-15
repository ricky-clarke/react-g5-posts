import { Fragment } from 'react';
import { Outlet, NavLink  } from 'react-router-dom';
import ContrastButton from '../../components/contrast/contrast-button.component';
import NavToggle from '../../components/nav-toggle/nav-toggle.component';
import { NavMenu, Nav } from './navigation.styles';

const Navigation = () => {

    return(

        <Fragment>
            <NavMenu>
                <div>
                    <NavToggle />
                    <Nav>
                        <ul>
                            <li><NavLink  to='/' end>Home</NavLink></li>
                            {/* <li><NavLink to='/about'>About</NavLink></li> */}
                            <li><NavLink to='/news-and-insights'>News &amp; insights</NavLink></li>
                            <li><NavLink to='/work' >Work</NavLink></li>
                            {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
                        </ul>
                    </Nav>
                </div>
                <ContrastButton />
            </NavMenu>
      <Outlet />
    </Fragment>
    )

}

export default Navigation