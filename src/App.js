import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Posts from './routes/posts/posts.component';
import Contact from './routes/contact/contact.component';
import Work from './routes/work/work.component';
import Test from './routes/test/test.component';
import './App.styles.scss';
import SinglePost from './routes/single-post/single-post.component';

const  App = () => {

  return (
      <div className='body_wrap'>

        <div>
        
         <Navigation />

         </div>

        <Routes>  
              {/* <Route path='/' element={ <Navigation /> } > */}
              <Route path='/' element={ <Home /> } /> 
                <Route path='/news-and-insights/'> 
                    <Route index element={ <Posts />} />
                    <Route path=':id' element={ <SinglePost />} />
                </Route>
                <Route path='/work/' element={ <Work /> } /> 
                <Route path='/contact/' element={ <Contact /> } /> 
                <Route path='/test/' element={ <Test /> } />
        </Routes>
      </div>
  );

}

export default App;
