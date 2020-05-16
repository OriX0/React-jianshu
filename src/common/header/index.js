import React, { Component, Fragment } from 'react';
import {
  HeaderWrapper,
  LogoWrapper,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  NavbarSearchTips,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  HistorySearchInfoList,
  HistorySearchInfoItem,
  Actions,
  Button
} from './style';
import { CSSTransition } from 'react-transition-group';
import Logo from './Logo';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {

  render () {
    const { focused, handleFocus, handleBlur, hotSearchList } = this.props;
    return (
      <HeaderWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavItem className='left active' href='/'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className='right'>登录</NavItem>

          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames='searchSlide'
            >
              <Fragment>
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => { handleFocus(hotSearchList) }}
                  onBlur={handleBlur}></NavSearch>
                <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe624;</span>
              </Fragment>
            </CSSTransition>
            {this.getSearchTipArea(focused)}
          </SearchWrapper>
          <Actions>
            <Button className='reg'>注册</Button>
            <Button className='writing'>
              <span className="iconfont">&#xe6e5; </span>
              写文章</Button>
          </Actions>
        </Nav>
      </HeaderWrapper>
    )
  }

  getSearchTipArea () {
    const { focused, tipMouseIn, hotSearchList, page, totalPage, pagesize, handleMouseEnter, handleMouseLeave, handleChangeHotSearchPage } = this.props;
    const cloneList = hotSearchList.toJS();
    const pageList = []
    if (cloneList.length) {
      for (let i = (page - 1) * pagesize; i < ((page * pagesize > cloneList.length) ? cloneList.length : page * pagesize); i++) {
        pageList.push(
          <li key={cloneList[i]}><SearchInfoItem >{cloneList[i]}</SearchInfoItem></li>
        )
      }
    }
    if (focused || tipMouseIn) {
      return (
        <NavbarSearchTips
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            搜索历史
          </SearchInfoTitle>
          <HistorySearchInfoList>
            <ul>
              <li><HistorySearchInfoItem>React</HistorySearchInfoItem></li>
            </ul>
          </HistorySearchInfoList>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleChangeHotSearchPage(page, totalPage, this.spinIcon) }}
            >
              <span
                ref={(icon) => { this.spinIcon = icon }}
                className="iconfont spin">&#xe851; </span>
              换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <ul>
              {pageList}
            </ul>
          </SearchInfoList>
        </NavbarSearchTips >
      )
    }
  }


}


const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    hotSearchList: state.getIn(['header', 'hotSearchList']),
    tipMouseIn: state.getIn(['header', 'tipMouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    pagesize: state.getIn(['header', 'pagesize'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getHotSearchList())
      dispatch(actionCreators.getSearchFocusedAction())
    },
    handleBlur () {
      dispatch(actionCreators.getSearchBlurredAction())
    },
    handleMouseEnter () {
      dispatch(actionCreators.getSearchTipMouseEnterAction())
    },
    handleMouseLeave () {
      dispatch(actionCreators.getSearchTipMouseLeaveAction())
    },
    handleChangeHotSearchPage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      let newPage = 1;
      if (page < totalPage) {
        newPage = page + 1;
      }
      dispatch(actionCreators.getHotSearchPageChangeAction(newPage));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);