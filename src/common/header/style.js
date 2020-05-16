import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position:relative;
  height:56px;
  min-width:1220px;
  max-width:1440px;
  margin:0 auto;
  border-bottom:1px solid #f0f0f0;
`;
export const LogoWrapper = styled.a.attrs({
  href: '/'
})`
  position:absolute;
  top:10px;
  left:30px;
  display:block;
`;

export const Nav = styled.div`
  width:1000px;
  height:56px;
  padding:0 70px 0 16px;
  margin:0 auto;
  box-sizing:border-box;
`;
export const NavLeft = styled.nav`
  display:flex;
  align-items:center;
  height:56px;
`
export const NavLeftItems = styled.a`
  font-size:17px;
  color:#333;
  padding:0 20px;
  cursor:pointer;
`
export const NavItem = styled.a`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  float:left;
  position:relative;

  .zoom {
    position:absolute;
    top:9px;
    right:2px;
    width:38px;
    border-radius:50%;
    line-height:38px;
    text-align:center;
    cursor:pointer;
    &.focused {
      background:#999;
      color:#fff;
    }
  }
  
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  padding:0 20px;
  margin-top:9px;
  margin-left:20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  
  &::placeholder {
    color:#999;
  }
  &.focused {
    width:240px;
  }
  &.searchSlide-enter {
    transition:all 0.4s ease-out
  }
  &.searchSlide-enter-active {
    width:240px;
  }
  &.searchSlide-exit {
    transition:all 0.5s ease-out
  }
  &.searchSlide-exit-active {
    width:160px;
  }
`;
export const NavbarSearchTips = styled.div`
  box-sizing:border-box;
  position:absolute;
  top:100%;
  left:0;
  margin-top:9px;
  padding:0 10px;
  width:250px;
  background:#fff;
  border-radius:4px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  :after{
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 30px;
    bottom: 99%;
  }
`;
export const SearchInfoTitle = styled.div`
  margin-top:18px;
  line-height:18px;
  font-size:14px;
  color:#969696;
  .spin {
    display:block;
    font-size:14px;
    float:left;
    transition:all .3s ease-in;
    transform-origin:center center;
    cursor:pointer;
  }
`;
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:12px;
`;
export const SearchInfoList = styled.div`
  ul {
    padding-left:0px;
    list-style:none;
  }
  li {
    float:left;
    margin-right:10px;
    margin-bottom:10px;
  }
`;
export const SearchInfoItem = styled.a`
  display:block;
  padding:0 5px;
  border:1px solid #ddd;
  line-height:20px;
  font-size:12px;
  color:#969696;
`;
export const HistorySearchInfoList = styled.div`
  ul {
    padding-left:0px;
    list-style:none;
  }
  li {
    margin-right:10px;
  }
`;
export const HistorySearchInfoItem = styled.a`
  display:block;
  padding:0 5px;
  line-height:30px;
  font-size:15px;
  color:#ea6f5a;
  :hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
`;
export const Actions = styled.div`
  position:absolute;
  height:56px;
  right:0;
  top:0;
`;

export const Button = styled.button`
  float:left;
  margin-top:9px;
  margin-left:20px;
  padding:0 20px;
  height:38px;
  border:1px solid #ec7259;
  border-radius:19px;
  font-size:14px;
  &.reg {
    color:#ec7259;
    background:#fff;
  }
  &.writing {
    color:#fff;
    background:#ec7259;
  }
`;