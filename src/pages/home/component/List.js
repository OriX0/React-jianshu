import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ArticleListItem,
  ArticleItemContentWrapper,
  ReadMoreArticle
} from '../style';
import { actionCreator } from '../store';
class List extends Component {

  render () {
    const { articleList, articlePage, articleTotalPage, handelReadMoreClick } = this.props;

    return (
      <Fragment>
        <ul className='article-list'>
          {articleList.map((item) => {
            return (
              <ArticleListItem key={item.get('id')} >
                <a className='warp-img'>
                  <img src={item.get('imgSrc')} alt='文章缩略图' />
                </a>
                <ArticleItemContentWrapper>
                  <a className='title'>{item.get('title')}</a>
                  <p className='summary'>
                    {item.get('summary')}
                  </p>
                  <div className='meta'>
                    <span className='jsd-meta'>
                      <i className="iconfont">&#xe625;</i>
                      {item.get('jsdMeta')}
                    </span>
                    <a className='nickname'>{item.get('nickname')}</a>
                    <a className='comments'>
                      <i className="iconfont">&#xe763;</i>
                      {item.get('comments')}
                    </a>
                    <span>
                      <i className="iconfont">&#xe617;</i>
                      {item.get('like')}
                    </span>
                  </div>
                </ArticleItemContentWrapper>
              </ArticleListItem>
            )
          })}

        </ul>
        <ReadMoreArticle
          onClick={() => { handelReadMoreClick(articlePage, articleTotalPage) }}
        >阅读更多</ReadMoreArticle>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return (
    {
      articleList: state.getIn(['home', 'articleList']),
      articlePage: state.getIn(['home', 'articlePage']),
      articleTotalPage: state.getIn(['home', 'articleTotalPage'])
    }
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    handelReadMoreClick (page, totalPage) {
      console.log('page', page)
      console.log('totalPage', totalPage)
      if (page <= totalPage - 1) {
        const action = actionCreator.getMoreArticleList(page);
        dispatch(action);
      }

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);