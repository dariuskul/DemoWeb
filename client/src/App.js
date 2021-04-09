import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Switch, Route, useHistory, useLocation} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Home from "./components/SidePages/Home/Home";
import Contact from "./components/SidePages/Contact/Contact";
import About from "./components/SidePages/About/About";
import Service from "./components/SidePages/Service/Service";
import Footer from "./components/Footer/Footer";
import {createBrowserHistory} from 'history'
import { useEffect } from "react";
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path='/service' component={Service}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
