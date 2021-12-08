import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Error404Page from './pages/Error404Page';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import { useState } from 'react';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  const openMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Router>
        <Header openMenu={openMenu}></Header>
        {
          isOpen?
          <Drawer openMenu={openMenu}></Drawer>:null
        }
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/projects/:id" exact component={Projects}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/404" exact component={Error404Page}></Route>
        <Redirect to="/404"></Redirect>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
