import * as actionTypes from './actionTypes';
import Axios from 'axios'

export const loginIn = (userValue,passValue)=>{
  return (dispatch)=>{
    Axios.get(`../apiList/login.json`)
      .then((res)=>{
        const users=res.data.data.users;
        console.log(users);
        users.map((item,index) =>{
          if(item["name"] ===userValue && item["pwd"] === passValue){
            console.log('true');
            dispatch(getLoginInAction());
          }
        })
      })

  }
}
export const getLoginInAction= ()=>({
  type:actionTypes.LOGIN_IN
})
export const getLoginOutAction=()=>({
  type:actionTypes.LOGIN_OUT
})