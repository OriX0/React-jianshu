import styled from 'styled-components';

export const AllWrapper = styled.div`
  background:#f9f9f9;
`;

export const MainWrapper= styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-start;
  box-sizing: content-box;
  width: 1000px;
  min-height: calc(100vh - 66px);
  padding:10px 16px 0;
  margin-left: auto;
  margin-right: auto;

  font-size: 16px;  
`;

export const Floating = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  color: #969696;
  position:fixed;
  top: 216px;
  left: calc((100vw - 1000px)/2 - 78px);
  .give_like_num,
  .give_reward {
    display:block;
    margin-top: 8px;
    font-size: 14px;
    text-align: center;
    color: #969696;
    overflow: hidden;
    height: 19px;
  }
`;
export const GiveLike = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 48px;
  height: 48px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  background-color: #fff;
  .iconfont {
    display: inline-block;
  }
`;
export const GiveReward = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 48px;
  height: 48px;
  font-size: 18px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
  background-color: #fff;
  .iconfont {
    display: inline-block;
  }

`;

export const ContentWrapper = styled.div`
  flex-shrink: 0;
  padding:24px;
  width: 730px;
  margin-bottom: 24px;
  margin-right: 10px;
  border-radius: 4px;
  background:#fff;
  .title{
    color:#404040;
    font-weight:700;
    font-size:30px;
    word-break: break-word;
  }
`;
export const AuthorInfoWrapper = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:32px;
  font-size:13px;
  .profile {
    display:block;
    height:48px;
    width:48px;
    border:1px solid #ccc;
    border-radius:50%;
  }
`;
export const AuthorInfoTop = styled.div`
  display:flex;
  align-items:center;
  margin: 0 8px 8px;
  .author_name {
    font-size:16px;
    font-weight:500;
    margin-right:8px;
  }
  .star {
    margin-right:6px;
  }
  .star-img{
    height:16px;
    width:16px;
  }
  .attention_btn {
    padding:2px 9px;
    background:#fff;
    border-radius:10px;
    border:1px solid #ec7259;
    color:#ec7259;
    font-size:12px;
    cursor:pointer;
  }
`;
export const AuthorInfoBottom = styled.div`
  display:flex;
  color:#969696;
  
  &>:not(last-child){
    margin-right:10px;
  }
  .jsd-meta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ec7259;
    margin-left:8px;
  }

`;

export const ArticleWrapper = styled.article`
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;

`;
export const ArticleImgPackage = styled.div`
  width: 100%;
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
  font-size: 0;
  img {
    max-width: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
    border: 0;
  }
`;