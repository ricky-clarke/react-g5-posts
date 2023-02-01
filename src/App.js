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
      <div className='container d-flex'>
        <Routes>  
              <Route path='/' element={ <Navigation /> } >
              <Route index element={ <Home /> } /> 
              <Route path='/news-and-insights/' element={ <Posts /> } /> 
              <Route path='/work/' element={ <Work /> } /> 
              <Route path='/contact/' element={ <Contact /> } /> 
              <Route path='/test/' element={ <Test /> } />
              <Route path='/single-post/:id' element={ <SinglePost />} />
              </Route>
        </Routes>
      </div>
  );

}

export default App;
