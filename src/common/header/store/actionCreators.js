import * as actionTypes from './actionTypes';
import Axios from 'axios';


export const getHotSearchListAction = (data) => ({
  type: actionTypes.HOT_SEARCH_LIST_INIT,
  pagesize: 5,
  data
})
export const getHotSearchList = () => {
  return (dispatch) => {
    Axios.get('./apiList/header.json')
      .then((res) => {
        const data = res.data.hotSearchList;
        const action = getHotSearchListAction(data);
        dispatch(action);
      })
      .catch((e) => {
        console.log(e)
        console.log('Get HotSearch List Error')
      })
  }
}

export const getSearchFocusedAction = () => ({
  type: actionTypes.SEARCH_FOCUSED
})
export const getSearchBlurredAction = () => ({
  type: actionTypes.SEARCH_BLURRED
})
export const getSearchTipMouseEnterAction = () => ({
  type: actionTypes.SEARCH_TIP_MOUSE_ENTER
})
export const getSearchTipMouseLeaveAction = () => ({
  type: actionTypes.SEARCH_TIP_MOUSE_LEAVE
})
export const getHotSearchPageChangeAction = (newPage) => ({
  type: actionTypes.HOT_SEARCH_PAGE_CHANGE,
  newPage
})

