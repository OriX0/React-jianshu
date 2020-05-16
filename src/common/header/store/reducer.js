import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  hotSearchList: [],
  tipMouseIn: false,
  pagesize: 5,
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUSED:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLURRED:
      return state.set('focused', false);
    case actionTypes.HOT_SEARCH_LIST_INIT:
      const total = Math.ceil(action.data.length / action.pagesize);
      const list = fromJS(action.data);
      return state.merge({
        hotSearchList: list,
        totalPage: total,
        pagesize: action.pagesize
      })
    case actionTypes.SEARCH_TIP_MOUSE_LEAVE:
      return state.set('tipMouseIn', false);
    case actionTypes.SEARCH_TIP_MOUSE_ENTER:
      return state.set('tipMouseIn', true);
    case actionTypes.HOT_SEARCH_PAGE_CHANGE:
      return state.set('page', action.newPage);
    default:
      return state
  }
}