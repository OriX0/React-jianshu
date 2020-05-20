import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  margin:0 auto;
  width:960px;
`;

export const HomeLeft = styled.div`
  overflow:hidden;
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:66.7%;
  background:url(${(props) => props.imgUrl});
  .banner-img {
    display:block;
    width:100%;
    height:270px;
    background:url("http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/178/5/thumb.jpg");
    background-size:contain;
  }
`;

export const HomeRight = styled.div`
  width:29.16667%;
  float:right;
`;
export const TopicWrapper = styled.div`
  margin-top:15px;
  margin-bottom:20px;
  border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.a`
  display:inline-block;
  margin:0 18px 18px 0;
  min-height:32px;
  background-color:#f7f7f7;
  border:1px solid #dcdcdc;
  border-radius:4px;
  vertical-align:top;
  overflow:hidden;
  img {
    height:32px;
    width:32px;
    vertical-align:middle;
  }
  span {
    padding: 0 11px 0 6px;
    font-size: 14px;
  }
`;
export const ArticleListItem = styled.li`
  position:relative;
  width:100%;
  margin:0 0 15px;
  padding:15px 2px 2px 0;
  min-height:140px;
  border-bottom: 1px solid #f0f0f0;
  word-wrap:break-word;
  .warp-img {
    position:absolute;
    top:50%;
    right:0;
    transform:translateY(-50%);
    height:100px;
    width:150px;
    img {
      width:100%;
      height:100%;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
  }
`;
export const ArticleItemContentWrapper = styled.div`
  padding-right:165px;
  .title {
    margin:-7px 0 4px;
    display:inherit;
    font-size:17px;
    font-weight:700;
    line-height:1.5;
  }
  .summary {
    margin:0 0 8px;
    font-size:13px;
    line-height:24px;
    color:#999;
  }
  .meta {
    color: #b4b4b4;
    font-size:13px;
    font-weight:400;
    line-height:20px;
    .iconfont {
      font-size:13px;
    }
    span,a {
      margin-right: 10px;
    }
    .jsd-meta {
      color: #ea6f5a!important;
    }
  }
`;

export const RecommendWrapper = styled.div`
  margin-top:30px;
  padding-bottom:4px;
  min-height:280px;
  a{
    display:block;
  }
`;
export const RecommendItem = styled.a`
  
  min-height:50px;
  width:280px;
  margin-bottom:5px;
  border-radius:4px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
`;
export const DownloadAppInfo = styled.a` 
  box-sizing:border-box;
  width:100%;
  padding:10px 22px;
  margin-bottom:15px;
  border:1px solid #f0f0f0;
  border-radius:6px;
  background-color:#fff;
  .QR-img {
    width:60px;
    height:60px;
    opacity:.85;
  }
  .info {
    display: inline-block;
    vertical-align: 75%;
    margin-left: 7px;
  }
  .title {
    font-size:15px;
    color:#333;
  }
  .desc {
    margin-top:4px;
    font-size:13px;
    color:#999;
  }
`;
export const WriterWrapper = styled.div`
  margin-bottom:15px;
  padding:0 3px 0;
  font-size:13px;
  text-align:left;
  .title {
    text-align: left;
    span {
      font-size:14px;
      color:#969696;
    }
    .spin {
      float:right;
      display:block;
      font-size:14px;
      transition:all .3s ease-in;
      transform-origin:center center;
      cursor:pointer;
    }
  }
  .find-more {
    display:block;
    box-sizing:border-box;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align:center;
  }
`;
export const WriterItem = styled.li`
  margin-top: 15px;
  line-height:20px;
  .follow {
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }
  .writerName {
    padding-top: 5px;
    margin-right:60px;
    font-size: 14px;
    display: block;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`;
export const WriterAvatar = styled.a`
  display:block;
  float:left;
  height:48px;
  width:48px;
  margin-right:10px;
  background:url(${(props) => props.avatarUrl});;
  border:2px solid #ddd;
  border-radius:50%;
  background-size:contain;
`;
export const ReadMoreArticle = styled.a`
  box-sizing:border-box;
  display:block;
  width:100%;
  height:40px;
  margin:30px auto 60px;
  padding:10px 15px;
  color:#fff;
  font-size:15px;
  text-align:center;
  background-color:#a5a5a5;
  border-radius:20px;
`;