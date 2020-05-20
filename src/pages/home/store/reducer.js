import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendBgImgList: [],
  downLoadQR: '',
  writeInfoList: [],
  articlePage: 1,
  articleTotalPage: 2,
  articlePageSize: 3,
  backTopIsShow:false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_DATA:
      const data = action.result;
      return state.merge({
        topicList: fromJS(data.topicList),
        articleList: fromJS(data.articleList),
        recommendBgImgList: fromJS(data.recommendBgImgList),
        downLoadQR: fromJS(data.downLoadQR),
        writeInfoList: fromJS(data.writeInfoList)
      })
    case actionTypes.GET_MORE_ART:
      const totalPage = (action.data.length) / state.get('articlePageSize') + 1;

      const newList = fromJS(action.data);
      return state.merge({
        articleList: state.get('articleList').concat(newList),
        articlePage: action.nextPage,
        articleTotalPage: totalPage
      })
    case actionTypes.CHANGE_BACK_SHOW:
      return state.set('backTopIsShow',action.isShow)
    default:
      return state;
  }

}