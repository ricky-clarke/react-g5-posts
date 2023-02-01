import useLocalStorage from './contrast.localstorage';
import './contrast-button.styles.scss';
// import lightBulb from '../../assets/turned-off-lightbulb-with-shine-svgrepo-com.svg';

const ContrastButton = () => {

     // Custom hook, set initial state to dark
     const [theme, setTheme] = useLocalStorage('theme', 'dark')

     const checkbox = document.getElementById('ricky');

     {
     (theme === 'light' ? 
     document.getElementsByTagName("BODY")[0].classList.add('contrast-light') : 
     document.getElementsByTagName("BODY")[0].classList.remove('contrast-light'))
     }


     const Icon = () => (
       
          <div>
                <svg fill="#ff328e" version="1.1" id="Layer_1" width="50px" height="50px" viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                    <g>
                        <path class="lightbulb_on" d="M80.302,18.915L80.302,18.915l0.042-0.042l-0.008-0.008c0.523-0.57,0.518-1.451-0.033-2.003l0,0l-2.053-2.053l0,0l0,0
                            c-0.552-0.551-1.433-0.556-2.003-0.033l-0.009-0.009l-8.842,8.843c-0.567,0.566-0.567,1.486,0,2.053h0l2.053,2.054l0.001,0
                            c0.567,0.567,1.486,0.567,2.053,0L80.302,18.915L80.302,18.915z"/>
                        <path class="lightbulb_on" d="M48.548,19.274v0.001h2.903v-0.001c0.782,0,1.415-0.619,1.446-1.393h0.006V5.378c0-0.802-0.65-1.452-1.452-1.452V3.924
                            h-2.903v0.001c-0.802,0-1.452,0.65-1.452,1.452v12.504h0.006C47.134,18.655,47.766,19.274,48.548,19.274z"/>
                        <path class="lightbulb_on"  d="M91.613,39.997c0-0.783-0.619-1.415-1.393-1.446v-0.006H77.716c-0.802,0-1.452,0.649-1.452,1.452h0V42.9h0
                            c0,0.803,0.65,1.453,1.452,1.453H90.22v-0.006c0.774-0.032,1.393-0.665,1.393-1.447h0L91.613,39.997L91.613,39.997z"/>
                        <path d="M50,24.201c-11.756,0-21.285,9.529-21.285,21.285c0,4.608,1.479,8.862,3.968,12.346h-0.008
                            c3.174,4.952,5.157,11.512,5.303,18.739c0.255,0.419,0.711,0.703,1.237,0.703c0.056,0,0.109-0.01,0.163-0.017v0.017H60.55v-0.017
                            c0.054,0.006,0.107,0.017,0.162,0.017c0.575,0,1.067-0.337,1.303-0.822c0.175-7.584,2.371-14.429,5.843-19.439
                            c2.154-3.324,3.427-7.27,3.427-11.526C71.285,33.73,61.756,24.201,50,24.201z"/>
                        <path d="M60.712,89.788c-0.056,0-0.108,0.01-0.162,0.017v-0.017H39.378v0.017c-0.054-0.006-0.107-0.017-0.163-0.017
                            c-0.801,0-1.452,0.649-1.452,1.452v3.384c0,0.802,0.65,1.452,1.452,1.452c0.056,0,0.109-0.01,0.163-0.017v0.017H60.55V96.06
                            c0.054,0.006,0.107,0.016,0.162,0.016c0.802,0,1.452-0.65,1.452-1.452V91.24C62.164,90.437,61.514,89.788,60.712,89.788z"/>
                        <path d="M60.712,80.348c-0.056,0-0.108,0.01-0.162,0.017v-0.017H39.378v0.017c-0.054-0.006-0.107-0.017-0.163-0.017
                            c-0.784,0-1.42,0.624-1.447,1.403c-0.002,0.019-0.003,0.038-0.005,0.057v3.376c0,0.802,0.65,1.452,1.452,1.452
                            c0.056,0,0.109-0.01,0.163-0.017v0.017H60.55V86.62c0.054,0.006,0.107,0.017,0.162,0.017c0.802,0,1.452-0.65,1.452-1.452V81.8
                            C62.164,80.997,61.514,80.348,60.712,80.348z"/>
                        <path class="lightbulb_on" d="M22.344,39.685v-0.006H9.839c-0.802,0-1.452,0.65-1.452,1.451v2.904c0,0.801,0.65,1.451,1.452,1.451h12.505V45.48
                            c0.773-0.032,1.393-0.665,1.393-1.445h0V41.13h0C23.736,40.35,23.117,39.717,22.344,39.685z"/>
                        <path class="lightbulb_on"  d="M20.199,18.415l8.842,8.843l0.009-0.009c0.569,0.523,1.45,0.519,2.002-0.033l0.001,0l2.053-2.054h0
                            c0.552-0.552,0.556-1.434,0.033-2.003l0.009-0.009l-8.843-8.842c-0.566-0.566-1.486-0.566-2.053,0l0,0l0,0l-2.053,2.053l0,0
                            C19.632,16.929,19.632,17.848,20.199,18.415z"/>
                    </g>
                </svg>
           </div>
           
         );

    return(

          <div className="contrast-button">
               <button 
               type="button"
               title="Contrast"
               onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
               >
                    <Icon />
               </button>
          </div>

          // <div className="switch-button">
          //      <input 
          //      id="ricky"
          //      className="switch-button-checkbox"
          //      type="checkbox"
          //      onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
          //      defaultChecked={ theme === 'light'}
          //      >
          //      </input>

          //      <label className="switch-button-label" htmlFor=""><span className="switch-button-label-span">Dark</span></label>

          // </div>
    )

}

export default ContrastButton