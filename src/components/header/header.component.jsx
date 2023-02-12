import DisplayButton from '../display/display-button.component';
import './header.styles.scss';

const Header = ({pageTitle, displayToggle}) => {

    return(
            <div className="content-header">
                <h1>{pageTitle}</h1>
                 {displayToggle ? <DisplayButton /> : null }
            </div>
        
    )

}

export default Header