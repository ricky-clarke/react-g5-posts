import './nav-toggle.styles.scss';

import arrowRight from '../../assets/arrow-right.svg';

const NavToggle = () => {

    const navHandler = () => {

        const navigation = document.querySelector('.navigation');

            if (navigation.className === 'navigation')
                navigation.classList.add('navigation--closed');
            else
            navigation.classList.remove('navigation--closed');

    }

    return(
     <div>  
        {/* <img src={lightBulb} alt=""/> */}
            <button className="nav-toggle-button" onClick={navHandler}>
                <img src={arrowRight} alt=""/>
            </button></div>
    )

}

export default NavToggle;