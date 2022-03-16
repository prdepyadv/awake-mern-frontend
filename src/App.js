import { Container } from 'react-bootstrap'
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import useToken from './useToken';
import { useHistory } from "react-router-dom";
import LogoutScreen from './screens/LogoutScreen';
import { useDispatch } from 'react-redux';

function App(props) {
  const { token, setToken } = useToken();
  return (
    <div>
      <Header token={token} />
      <main className="py-3">
        {
          token ? 
          (
            <Container>
              <Switch>
                <Route path='/' component={HomeScreen} exact />
                <Route path='/logout' exact >
                  <LogoutScreen setToken={setToken} />
                </Route>
                <Route path='/login'  exact >
                  <LoginScreen setToken={setToken} />
                </Route>
                <Redirect to="/" />
              </Switch>
            </Container>
            ) : (
              <Container>
                <Switch>
                  <Route path='/'  exact >
                    <LoginScreen setToken={setToken} />
                  </Route>
                  <Redirect to="/" />
                </Switch>
            </Container>
          )
        }
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);