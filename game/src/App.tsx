import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {MAIN_URL, SERVICE_URL, GAMES_URL, ERROR_URL, SUCCESS_URL, REGISTER_URL, SINGIN_URL} from './utils/links'
import './styles/App.scss';
import ServicePage from './pages/ServicePage/SetvicePage';
import MainPage from './pages/MainPage/MainPage';
import GameItemPage from './pages/GameItemPage/GameItemPage';
import InfoPage, {InfoPageVariant} from './pages/InfoPage/InfoPage';
import AuthPage, {AuthPageVariant} from './pages/AuthPage/AuthPage';

function App() {
 const NavigationContainer = () => {
  const location = useLocation()
  return(
    <div className="App">
    <Header/>
      <Switch location={location}>
        <Route path={MAIN_URL} exact>
          <MainPage/>
        </Route>
        <Route path={SERVICE_URL} exact>
          <ServicePage/>
        </Route>
        <Route path={`${GAMES_URL}/:id`} exact>
          <GameItemPage/>
        </Route>
        <Route path={ERROR_URL} exact>
          <InfoPage variant={InfoPageVariant.Error}/>
        </Route>
        <Route path={SUCCESS_URL} exact>
          <InfoPage variant={InfoPageVariant.Success}/>
        </Route>
        <Route path={REGISTER_URL} exact>
          <AuthPage variant={AuthPageVariant.Reg}/>
        </Route>
        <Route path={SINGIN_URL} exact>
          <AuthPage variant={AuthPageVariant.Sign}/>
        </Route>
      </Switch>
      <Footer/>
  </div>
  )
 }
  return (
    <Router>
      <NavigationContainer/>
    </Router>
  );
}

export default App;
