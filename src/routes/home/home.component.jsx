import Header from '../../components/header/header.component';

const Home = () => {

    return(
        <div className="content">
            <Header  pageTitle={'Home'} displayToggle={false}/>
            <p>Built using</p>
                <ul>
                <li><h2>Components</h2></li>
                <li><h2>Hooks</h2>
                    <ul>
                        <li> useState</li>
                        <li>useFetch</li>
                    </ul>
                </li>
                <li><h2>Custom Hook</h2></li>
                <li><h2>Routing</h2></li>
                <li><h2>Local Storage</h2></li>
                <li><h2>Styled Components</h2>
                    <ul>
                        <li>
                        <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
                            styled-components.com
                        </a>
                        </li>
                    </ul>
                </li>
                </ul>
        </div>
    )

}

export default Home