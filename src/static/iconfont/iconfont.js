import { createGlobalStyle } from 'styled-components';

export const IconfontStyled = createGlobalStyle`
a{text-decoration:none;cursor:pointer;}
ul{
  padding:0;
  margin:0;
  list-style:none;
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1589723394730'); /* IE9 */
  src: url('./iconfont.eot?t=1589723394730#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAhEAAsAAAAADsgAAAf4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEEAqPPIxgATYCJAMoCxYABCAFhG0HdxuNDCMRJpQURfYXCTwV+WsypIpnR6R1sImK1Q4f/+4S14RI45t8CDf9d5cAQULNLTW1ianQ7avRPwJg0L/P9+62vLsyqCdwFDcxaP9WeJPz7rbkugWVuEFBBdiGIGTtbk6tY/0TJEAyYdlvPrniyraylJPljrMxtUVPwuCVXYWqdVfA/y8ADYgU+mVGTihgUJ2bkCSUnJJ7DIeir2C6irwcCAAZLOEOIiSk5YEDC/QS6NfW3FgNzhEGGyEm4HzigENZkHkQgaPT6S0Ac7XfJ9/Dl3AAhYgBXimrIb4O0Sr6JZsZp5GUMeMxrrgkgLe1AAaAOwD2jS0KDMwBEPIjZSDryqIGgLZ0VgZQMSojlYMqUPV5oPZLtkajoh4z+6kgJ9CGrlD/IICDCBRiMJBA2uE/HogYSBQgHNUqBVRUGIEDVIwRRIDKyIsoag9BiIE6gBfJaCAEIQH6GYwgBQZqjUCAL9mO5UhkyiH6AGwA2gEw+UAmaE0EFDLBZT4JCwmog5mlXMrr6cr1eCLV0QnheX0FxxnIiSJRR8LJPezrvSPKEIAaFeip/sbh0nlHyGR/8eDB3imVdaa7VDruCKG/UfhM4le4xbPq6zjxaZ4aIwuhAQXkE1dekUoETGQxIp9Fzhj4MqUd3mPeQo1FK4RytddWGiGSkBpHMxFeL/VpQUx4++qBFdx1GXegRUF67jBaYTVZ5Y9uF63MGrh8pXNLfIZg7cLcXO5iJGJWc6e3u5GDgbTa1sVsoY9jUaf1SsrKnEWdOP/tJuN88SR9dipQ8ZR4sBY2awfXmm337zuF3yWgaKxgkN1ATnTEyJq7g2dPoygDz9ZwF3Czv6jPoyZzjinM3YGLZ+txjv3ntnGS23nqoKGNxb+Cve6xPrWLvJfFNho6OoOBeFuwrlrccP3AoR6LljysdFEAwTOg3pW1EDVQE9itc4U8X+mXZbmqpXrLhzcNbnCFG5fTHLxI3k8WnnhU6RI7YpHFroXB2Bk0PG/9aAJ9NmXfYGiAcuDcmxGn7gwc6IAi5O7ou+P9WYQsWuVKcrB37W0BDd/DKqgtkg7PMuaidyWWaygPhadODTpLdoAzS2LItT7uAVCD73X6DQJCjwYPN/uRrTTxLydXpwfF/yJ/70fqC6vDH25wTZv8QXcGDpF1DtR7vCe3I6p8HpYzss7yLGBDckDMypaJR1PbrXQL0/ss8i92HZcQbUeiZxckGG+6GxPvmNUXFxrZ3Jq20D27PcnqCOq2yOn9+aDLd3bfuahovspi9zoSS6fNntk6rz4gKqouYF4LZs+mk0mse931sSPkGdvD3ARqb5BL6huQy5tRW+PRQnFexbX5E3vOzSqqic6znmhHzXjkRg0OsbmvYzL8xD+b+JrDpdbzVuTsFg9VDJWzzvM2CrxQVyeT7ertlTNmCvwKXlg8b8mCvHPLeWHNcqojKIWdY85+S+AOcwmkyWR8/6otbqRt/eP9u0Q5bmwzb/m8FdbSrZU6dM3y9OWlCxbP0/usXyUoK1rK2GC5UqitjeczlOKyUewN9aPi4tdevTF06qFDU2n0WPxW9Gl2cJB9XBq3Xj3BMVuTaDdoxjZVOJU6zp7tWOpUcY+jiibab1Xh1JSx0EO9NOFT3ZYp453jy3LtsmxGjbLJsss9xpAhQ7Yk1+5YwFeO2+eF9Q8vLHWufJB9ZO3rc1BEKmCirHftlHzqoxPTjGjX0tdd9RC+L/3Tp/yuIb5d/f1dfhzB7WvbvaVeT6c/d2CgQe+17kf9mkaeihprlKXqRr7a+Eica0i87yzcr1dqurgnLZGZ+TS2pjnyKauO7O27HOxFRDGenS4FzXy5PDU69FNFYd9NEwO1qcOvDpbdXOMce3pw8DR7hlX3BEqohM6wvVKHZG89SQ6Z/1KNZy/bv2JGQg9LqUHYvXEFtpOTRUbjqrQpAkLiRo8qbHgSoe7P9xER/L/TNtrb5ulvvqBkdGPuvBljmu9RG+CgXTYLJDMLxNuOZnKcCbWX3ieHHMU/UC2dw6HjSGC872xKTmzrFevNDulD+MVxTNZfDs3BYbrBt631LWpW7zsQMiJ8qfJskF5GeHeSX38dx48geWb0yr00kUPP1ZM7DjfkO4kNXxsknz2s3xwjejc/Juf06c60et29+hPbUo4dis3m5oRMCOzZviNlyj5Dv4ondI94GVvn/5Pt+tLiLAw9B7IZM48+BTRvc45xik8ydO1xTZjxgGZGHjCehGqi3Bql6TwTrfkGXMb+tNkMPV7s4Uqt8D+56rypvRiooZorWRngEFABAZ4tQRYRnP9dv070yP4WCRHVfHuEsbEXHKEO69ukp0peF2+KpgYV25QsBwMLKCSwAAYc7Lms0B1EkMMfxOAQBTK4IfFoOfTQAwaElQJwxWQCBNrYCxRKnEXIauM2cFnhaxDBED+CGNqEARkKiN4p5XBcJT+/KaHRBboHsJPZ85g96/2/KeQR1e7UZP+kiWvQlLW7/Ytm0iL2SNfQmnnwKhN8kqvROAosKj05K6PZcq4qH7Rn6WRaPSNOCU3RvQDdw5SdzH55e/b8/DeFPKJGTPtj+k+aeOVAQ0mdgPtF5kTTNmVouoYWo0kPokllMtgnS9IotQiwBG/Uk7OSmKFpOVPRuXxSUlbPprntvG/NgO8ESBnbcbk9Xp8fSRfPYczz4c4x4/w0Jl0Lo2S7FPiQY+Rkoo9DIlQXNy+4n1A6Pj6yFlqtAA==') format('woff2'),
  url('./iconfont.woff?t=1589723394730') format('woff'),
  url('./iconfont.ttf?t=1589723394730') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1589723394730#iconfont') format('svg'); /* iOS 4.1- */
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



