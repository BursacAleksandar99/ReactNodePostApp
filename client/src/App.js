import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from "./pages/Post";
function App() {

  
  return (
    <div className='App'>
        <Router>
          <div className='navBar'>
            <Link to="/" className='LinkElementNB'>Home Page</Link>
            <Link to="/createpost" className='LinkElementNB'>Create A Post</Link>
          </div>
         
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/createpost' exact Component={CreatePost}/>
            <Route path='/post/:id' exact Component={Post}/>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
