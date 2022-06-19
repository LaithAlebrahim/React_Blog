

import Navbar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NptFound from './NotFound';

function App() {
 
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="component">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <NptFound/>
        </Route>
      </Switch>
      </div>
      

    </div>
    </Router>
  );
}

export default App;
