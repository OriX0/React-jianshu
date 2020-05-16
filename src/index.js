import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import AppC from './App'
import { GlobalStyled } from './common.js';
import { IconfontStyled } from './static/iconfont/iconfont'



const App = (
  <Fragment>
    <GlobalStyled />
    <IconfontStyled />
    <AppC />
  </Fragment>
)


ReactDOM.render(
  App,
  document.getElementById('root')
);

