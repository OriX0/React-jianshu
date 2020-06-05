import * as actionTypes from './actionTypes';
import Axios from 'axios';


export const getDetailInitData = (id)=>{
  return (dispatch)=>{
    Axios.get('../apiList/detail.json')
      .then((res)=>{
        dispatch(getInitDetailDataAction(res.data.data))
      })
      .catch((e)=>{
        console.log(e)
      })
  }
};
export const getInitDetailDataAction=(data)=>({
  type:actionTypes.INIT_DETAIL_DATA,
  data
})
