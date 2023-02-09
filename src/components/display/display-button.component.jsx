import DisplayUseLocalStorage from './display.localstorage';
import '../contrast/contrast-button.styles.scss';
import './display-button.styles.scss';

const  DisplayButton = () => {

  // Custom hook, set initial state to dark
  const [display, setDisplay] = DisplayUseLocalStorage('display', 'grid');

    display === 'row' ? 
    document.getElementsByTagName("BODY")[0].classList.add('content--row') : 
    document.getElementsByTagName("BODY")[0].classList.remove('content--row')

  return (
      <div className='display'>
        <div className="switch-button switch-button--display">
               <input 
               className="switch-button-checkbox"
               type="checkbox"
                onClick={() => (display === 'grid' ? setDisplay('row') : setDisplay('grid'))}
                defaultChecked={ display === 'row'}
               >
               </input>

               <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Grid</span></label>

        </div>
      </div>
  );

}

export default DisplayButton;
