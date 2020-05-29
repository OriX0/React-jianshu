import { createGlobalStyle } from 'styled-components';

export const IconfontStyled = createGlobalStyle`
a{text-decoration:none;
  cursor:pointer;
  color:inherit;
}
ul{
  padding:0;
  margin:0;
  list-style:none;
}
h1, h2, h3, h4, h5, h6 {
  color: #404040;
  text-rendering: optimizelegibility;
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1590741222920'); /* IE9 */
  src: url('./iconfont.eot?t=1590741222920#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1590741222920') format('woff'),
  url('./iconfont.ttf?t=1590741222920') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1590741222920#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconpinglun:before {
  content: "\e763";
}

.iconxihuan:before {
  content: "\e617";
}

.iconicon-test:before {
  content: "\e625";
}

.iconspin:before {
  content: "\e851";
}

.iconhistory:before {
  content: "\e603";
}

.iconsearch:before {
  content: "\e624";
}

.iconAa:before {
  content: "\e636";
}

.iconmaobi:before {
  content: "\e602";
}

.iconyumaobi:before {
  content: "\e6e5";
}
`;



