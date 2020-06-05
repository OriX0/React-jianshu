import React, { Fragment } from 'react';
import Header from './common//header/index';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Write from './pages/write'

function App () {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/sign_in' exact component={Login}></Route>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
