import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const getHomeInitDataAction = (data) => ({
  type: actionTypes.INIT_HOME_DATA,
  result: {
    topicList: data.topicList,
    articleList: data.articleList,
    recommendBgImgList: data.recommendBgImgList,
    downLoadQR: data.downLoadQR,
    writeInfoList: data.writeInfoList
  }
});
export const getHomeInitData = () => {
  return (dispatch) => {
    Axios.get('/apiList/home.json')
      .then((res) => {
        const data = res.data.data;
        const action = getHomeInitDataAction(data);
        dispatch(action);
      })
      .catch((e) => {
        console.log('home get Error', e)
      })
  }
};
export const getMoreArticleListAction = (data, nextPage) => ({
  type: actionTypes.GET_MORE_ART,
  data,
  nextPage
})
export const getMoreArticleList = (page) => {
  return (dispatch) => {
    console.log('page', page)
    Axios.get('/apiList/homeList.json?page=' + page)
      .then((res) => {
        const data = res.data.data;
        const nextPage = page + 1
        const action = getMoreArticleListAction(data, nextPage);
        dispatch(action);
      })
      .catch((e) => {
        console.log('homeList get Error', e)
      })
  }
}