import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Home from "./components/SidePages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/home' component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
