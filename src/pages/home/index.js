import React, { Fragment, Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style.js'
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import List from './component/List';
import { connect } from 'react-redux';
import { actionCreator } from './store';
class Home extends Component {
  render () {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft >
            <a className='banner-img' href='/' ></a>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
      </Fragment>
    );
  }
  componentDidMount () {
    this.props.initData();
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initData () {
      const action = actionCreator.getHomeInitData();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);