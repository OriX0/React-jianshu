import React, { Fragment,PureComponent } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js'
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import List from './component/List';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {Link} from 'react-router-dom';

class Home extends PureComponent {
  render () {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft >
            <Link className='banner-img' to='/'/>
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
        {this.props.backTopIsShow?<BackTop onClick={this.handleBackTop}>Back Top</BackTop>:null}
        
      </Fragment>
    );
  }
  componentDidMount () {
    this.props.initData();
    this.monitorScroll();
  }
  handleBackTop() {
    window.scrollTo(0,0);
  }
  monitorScroll() {
    window.addEventListener('scroll',this.props.scrollChange)
  }
}
const mapStateToProps = (state)=>{
  return {
    backTopIsShow:state.getIn(['home','backTopIsShow'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initData () {
      dispatch(actionCreator.getHomeInitData());
    },
    scrollChange() {
      const scrollY = window.pageYOffset;
      let action ='';
      if(scrollY>400) {
        action = actionCreator.getChangeBackShowAction(true);
      }else {
        action = actionCreator.getChangeBackShowAction(false);
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);