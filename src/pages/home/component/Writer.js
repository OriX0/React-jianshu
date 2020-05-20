import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterItem,
  WriterAvatar
} from '../style.js'

class Writer extends PureComponent {

  render () {
    const { writeInfoList } = this.props;
    return (
      <Fragment>

        <WriterWrapper>

          <div className='title'>
            <span>推荐作者</span>
            <span className="iconfont spin">换一换 &#xe851;</span>
          </div>
          <ul>
            {writeInfoList.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <WriterAvatar avatarUrl={item.get('avatarUrl')} alt='用户头像'></WriterAvatar>
                  <a className='follow' href='/#'>关注+</a>
                  <a className='writerName' href='/#'>{item.get('writerName')}</a>
                  <p className="descWriter">          写了{item.get('numberChar')}字 · {item.get('numberLike')}喜欢</p>
                </WriterItem>
              )
            })}
          </ul>
          <a className='find-more' href='/#'>查看全部></a>
        </WriterWrapper>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    writeInfoList: state.getIn(['home', 'writeInfoList'])
  }
}

export default connect(mapStateToProps, null)(Writer);