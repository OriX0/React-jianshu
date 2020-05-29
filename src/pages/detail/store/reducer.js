import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultStates=fromJS({
  title:'',
  likeNum:'',
  authorName:'',
  authorProfileUrl:'',
  jsdMetaNum:0,
  articleImgs:[],
  authorInfoBottom:"",
  content:""  
})
export default (state=defaultStates,action)=>{
  switch (action.type) {
    case actionTypes.INIT_DETAIL_DATA:
      const data=action.data;
      return state.merge({
        title:fromJS(data.title),
        likeNum:fromJS(data.likeNum),
        authorName:fromJS(data.authorName),
        authorProfileUrl:fromJS(data.authorProfileUrl),
        jsdMetaNum:fromJS(data.jsdMetaNum),
        articleImgs:fromJS(data.articleImgs),
        authorInfoBottom:fromJS(data.authorInfoBottom),
        content:fromJS(data.content)
      })
  
    default:
      return state;
  }
  
}