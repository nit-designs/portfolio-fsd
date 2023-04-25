import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path ="/about">
          <About/>
        </Route>

        <Route path ="/skills">
          <Skills/>
        </Route>

        <Route path ="/project">
          <Project/>
        </Route>

        <Route path ="/contact">
          <Contact/>
        </Route>
        <Route path ="/sample">
          <sample/>
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
