import './nav-toggle.styles.scss';

import arrowRight from '../../assets/arrow-right.svg';

const NavToggle = () => {

    const navHandler = () => {

        const navigation = document.querySelector('.nav_menu');

        const body = document.querySelector('.body_wrap');

            if (navigation.classList.contains('nav_menu--closed')) {
                body.classList.remove('body_wrap--expand');
                navigation.classList.remove('nav_menu--closed');
            }
            else {
            navigation.classList.add('nav_menu--closed');
            body.classList.add('body_wrap--expand');
            }
    }

    return(
        <div>  
            <button className="nav-toggle-button" onClick={navHandler}>
                <img src={arrowRight} alt=""/>
            </button>
        </div>
    )

}

export default NavToggle;