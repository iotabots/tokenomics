(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{63845:function(e,n,t){"use strict";var r=t(95318);n.Z=void 0;var a=r(t(64938)),i=t(85893),o=(0,a.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=o},36415:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(24347)}])},24347:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),s=t(87952),u=t(66720),l=t(20847),c=t(27680),p=t(63845),d=t(11163),y=t(77044),f=t(41664),m=t(68288),g=t(3283),h=t.n(g);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n,t,r,a,i,o){try{var s=e[i](o),u=s.value}catch(l){return void t(l)}s.done?n(u):Promise.resolve(u).then(r,a)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){v(i,r,a,o,s,"next",e)}function s(e){v(i,r,a,o,s,"throw",e)}o(void 0)}))}}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(u){s=!0,a=u}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=t(40670);function _(e){return(0,i.jsxs)(c.Typography,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}({variant:"body2",color:"text.secondary",align:"center"},e,{children:["Made with \u2764\ufe0f by ",(0,i.jsx)(c.Link,{color:"inherit",href:"https://mui.com/",children:"IOTABOTS.io \ud83e\udd16"})," ",(new Date).getFullYear(),"."]}))}function k(){var e=T(o.useState(void 0),2),n=e[0],t=e[1],r=(0,y.useWeb3React)(),g=r.account,b=r.library,v=r.chainId,j=(0,d.useRouter)(),k=T(o.useState(""),2),S=k[0],O=k[1],M=T(o.useState(""),2),A=M[0],I=M[1],P=function(){var e=x(a().mark((function e(n,r){var i,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new(h())(r.provider),e.prev=2,s=new i.eth.Contract(w,m.Q0),e.next=6,s.methods.checkIsUserLogged(n).call();case 6:o=e.sent,console.log("data",o),t(s),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(2),console.log("init error",e.t0),e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n,t){return e.apply(this,arguments)}}();o.useEffect((function(){return console.log("init?"),g&&b&&(console.log("init!"),P(g,b)),null}),[g,b,v]);var C=function(){var e=x(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log("usersignup",n),!n){e.next=10;break}return e.next=5,n.methods.registerUser(g,A,S,"").send({from:g,gasPrice:"0"});case 5:t=e.sent,console.log("data",t),j.push("/login"),e.next=11;break;case 10:console.log("contract not defined");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Err",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(c.BaseLayout,{children:(0,i.jsx)(c.Section,{children:(0,i.jsxs)(c.Grid,{container:!0,sx:{height:"100vh"},children:[(0,i.jsx)(u.ZP,{}),(0,i.jsx)(c.Grid,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://iotabots.io/assets/projects/metaverse.jpg)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,i.jsx)(c.Grid,{item:!0,xs:12,sm:8,md:5,children:(0,i.jsxs)(c.Box,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,i.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(c.Typography,{variant:"h5",children:"Sign Up"}),(0,i.jsx)(c.Typography,{pt:"6px",noWrap:!0,variant:"body1",paragraph:!0,children:"".concat(null===g||void 0===g?void 0:g.substring(0,4),"...").concat(null===g||void 0===g?void 0:g.substring((null===g||void 0===g?void 0:g.length)-3,null===g||void 0===g?void 0:g.length))||"-"}),(0,i.jsx)(c.Typography,{pt:"6px",variant:"body1",paragraph:!0,children:"Choose your favorite nickname and a secure new passwort. Have fun!"}),(0,i.jsxs)(c.Box,{sx:{mt:1},children:[(0,i.jsx)(c.TextField,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Your Metaverse name",name:"name",onChange:function(e){return I(e.target.value)},autoFocus:!0}),(0,i.jsx)(c.TextField,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){return O(e.target.value)}}),(0,i.jsx)(l.Z,{control:(0,i.jsx)(c.Checkbox,{value:"remember",color:"primary"}),label:"Remember me"}),(0,i.jsx)(c.Button,{onClick:C,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,i.jsxs)(c.Grid,{container:!0,children:[(0,i.jsx)(c.Grid,{item:!0,xs:!0,children:(0,i.jsx)(f.default,{href:"#",children:(0,i.jsx)(c.Typography,{variant:"body2",sx:{cursor:"pointer"},children:"Forgot password?"})})}),(0,i.jsx)(c.Grid,{item:!0,children:(0,i.jsx)(f.default,{href:"login",children:(0,i.jsx)(c.Typography,{variant:"body2",sx:{cursor:"pointer"},children:"Already have an account? Login"})})})]}),(0,i.jsx)(_,{sx:{mt:5}})]})]})})]})})})}},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},40670:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkIsAdminLogged","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkIsUserLogged","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_password","type":"string"}],"name":"loginAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_password","type":"string"}],"name":"loginUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"logoutAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"logoutUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_password","type":"string"},{"internalType":"string","name":"_ipfsImageHash","type":"string"}],"name":"registerAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_password","type":"string"},{"internalType":"string","name":"_ipfsImageHash","type":"string"}],"name":"registerUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[482,714,100,389,774,888,179],(function(){return n=36415,e(e.s=n);var n}));var n=e.O();_N_E=n}]);