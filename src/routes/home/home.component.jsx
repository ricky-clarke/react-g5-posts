import Header from '../../components/header/header.component';

const Home = () => {

    return(
        <div className="content">
            <Header  pageTitle={'Home'} displayToggle={false}/>
            <p>To add something fancy</p>
        </div>
    )

}

export default Home