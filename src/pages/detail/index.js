import React, { Fragment, Component } from 'react';
import {
  AllWrapper,
  MainWrapper,
  ContentWrapper,
  AuthorInfoWrapper,
  AuthorInfoTop,
  AuthorInfoBottom,
  ArticleWrapper,
  ArticleImgPackage,
  Floating,
  GiveLike,
  GiveReward
} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {fromJS} from 'immutable';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    const {title,likeNum,authorProfileUrl,authorName,jsdMetaNum,authorInfoBottom,content} = this.props;
    const articleImgs = this.props.articleImgs.toJS();
    return (
      <AllWrapper>
        <MainWrapper>
          <Floating>
            <GiveLike>
              <i className="iconfont">&#xe60c;</i>
            </GiveLike>
            <div className='give_like_num'>{likeNum}个赞</div>
            <GiveReward>
              <i className="iconfont">&#xe693;</i>
            </GiveReward>
            <div className='give_reward'>赞赏</div>
          </Floating>
          <ContentWrapper>
            <h1 className='title'>{title}</h1>
            <AuthorInfoWrapper>
              <a className='author' href='/#'>
                <img className='profile' src={authorProfileUrl} alt='作者头像'/>
              </a>
              <div>
                <AuthorInfoTop>
                  <span className='author_name'>
                    <a href='/#'>{authorName}</a>
                  </span>
                  <a href='/#' className='star'>
                      <img className='star-img' src='https://upload.jianshu.io/user_badge/5b7a3117-2773-45ac-9d61-03af8463898e'  alt='star-img'/>
                  </a>
                  <button className='attention_btn' type='button' >关注</button>
                </AuthorInfoTop>
                <AuthorInfoBottom>
                  <span className='jsd-meta'>
                        <i className="iconfont">&#xe625;</i>
                        {jsdMetaNum}
                  </span>
                  <div dangerouslySetInnerHTML={{__html:authorInfoBottom}} />

                </AuthorInfoBottom>
              </div>
            </AuthorInfoWrapper>
            <ArticleWrapper>
              <ArticleImgPackage>
                <img src={articleImgs[0]} alt='文章中的图片' />
              </ArticleImgPackage>
              <div  dangerouslySetInnerHTML={{__html:content}}/>
            </ArticleWrapper>
          </ContentWrapper>
        </MainWrapper>
      </AllWrapper>
    );
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.initDetailData(id);
  }
}

const mapStateToProps = (state)=>{
  return {
    title:state.getIn(['detail','title']),
    likeNum:state.getIn(['detail','likeNum']),
    authorProfileUrl:state.getIn(['detail','authorProfileUrl']),
    authorName:state.getIn(['detail','authorName']),
    jsdMetaNum:state.getIn(['detail','jsdMetaNum']),
    articleImgs:state.getIn(['detail','articleImgs']),
    authorInfoBottom:state.getIn(['detail','authorInfoBottom']),
    content:state.getIn(['detail','content'])
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    initDetailData(id) {
      dispatch(actionCreators.getDetailInitData(id))
    }
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Detail);