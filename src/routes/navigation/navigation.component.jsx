import { Fragment } from 'react';
import { Outlet, NavLink  } from 'react-router-dom';
import ContrastButton from '../../components/contrast/contrast-button.component';
import NavToggle from '../../components/nav-toggle/nav-toggle.component';
import './navigation.styles.scss';

const Navigation = () => {

    return(

        <Fragment>
            <div className='navigation'>
                <div>
                    <NavToggle />
                    <nav>
                        <ul>
                            <li><NavLink  to='/' end>Home</NavLink></li>
                            <li><NavLink to='/news-and-insights'>News &amp; insights</NavLink></li>
                            <li><NavLink to='/work' >Work</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                            <li><NavLink to='/test'>Test</NavLink></li>
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