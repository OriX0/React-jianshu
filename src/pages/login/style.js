import styled from 'styled-components';

export const AllWrapper = styled.div`
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background:#f1f1f1;
`;
export const MainWrapper = styled.div`
  box-sizing: border-box;
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
`;
export const TitleContainer = styled.h4`
  margin: 0 auto 50px;
  padding: 10px;
  font-size:18px;
  font-weight: 400;
  color: #969696;
  text-align:center;
  .active {
    color:#ea6f5a;
    font-weight:700;
    border-bottom:2px solid #ea6f5a;
  }
  a {
    padding:10px;
  }
`;
export const SignInContainer = styled.form`
  margin-bottom: 30px;
  input {
    box-sizing:border-box;
    border-radius:4px 4px 0 0;
  }
  #session_email_or_mobile_number,
  #session_password {
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  #session_email_or_mobile_number {
    border-bottom:none;
  }
  #sign-in-form-submit-btn{
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
`;