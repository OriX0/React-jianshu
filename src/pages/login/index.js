import React, { PureComponent } from 'react';
import {
  AllWrapper,
  MainWrapper,
  TitleContainer,
  SignInContainer
}from './style'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {actionCreator} from './store';

class Login extends PureComponent {
  render() {
    if(!this.props.login){
      return (
        <AllWrapper >
          <MainWrapper>
            <TitleContainer>
              <a className='active' href='/sing_in'>登录</a>
              <b>.</b>
              <a id='sign-up-btm' href='/sing_up'>注册</a>
            </TitleContainer>
            <SignInContainer>
              <input 
                placeholder="手机号或邮箱" 
                type="text" 
                name="username" 
                id="session_email_or_mobile_number"
                ref={(input)=>{this.username=input}}/> 
              <input 
                placeholder="密码" 
                type="password" 
                name="password" 
                id="session_password"
                ref={(input)=>{this.password=input}}/>
              <button 
                className="sign-in-button" 
                id="sign-in-form-submit-btn" 
                type="button"
                onClick={()=>{this.props.loginIn(this.username,this.password)}}>
                    登录
              </button>
            </SignInContainer>
          </MainWrapper>
        </AllWrapper>
      )
    }else {
      return <Redirect to="/" />
    }
  }
}
const mapStateToProps = (state)=>{
  return{
    login:state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    loginIn(userElement,passElement){
      // console.log(userElement.value);
      // console.log(passElement.value);
      const loginUser = userElement.value;
      const loginPass = passElement.value;
      dispatch(actionCreator.loginIn(loginUser,loginPass))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);