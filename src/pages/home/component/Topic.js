import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style.js';

class Topic extends Component {

  render () {
    const { TopicList } = this.props;
    return (
      <Fragment>
        <TopicWrapper>
          {TopicList.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={item.get('imgSrc')} alt='主题图片'>
                </img>
                <span>
                  {item.get('text')}
                </span>
              </TopicItem>
            )
          })}
        </TopicWrapper>
      </Fragment>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    TopicList: state.getIn(['home', 'topicList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);