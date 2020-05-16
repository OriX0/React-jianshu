import { createGlobalStyle } from 'styled-components';

export const IconfontStyled = createGlobalStyle`
a{text-decoration:none}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1589612625066'); /* IE9 */
  src: url('./iconfont.eot?t=1589612625066#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1589612625066') format('woff'),
  url('./iconfont.ttf?t=1589612625066') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1589612625066#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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



