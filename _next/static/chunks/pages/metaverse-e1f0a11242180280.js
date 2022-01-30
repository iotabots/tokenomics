(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{53787:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/metaverse",function(){return t(81166)}])},63390:function(e,n,t){"use strict";var r=t(85893),a=(t(67294),t(27680)),o=(0,a.makeStyles)((function(e){return{root:{background:e.palette.background.gradient,flexGrow:1,flexShrink:1,display:"flex",flexDirection:"column",justifyContent:"center"}}}));n.Z=function(e){var n=e.children,t=o();return(0,r.jsx)(a.Box,{className:t.root,children:n})}},81166:function(e,n,t){"use strict";t.r(n),t.d(n,{Metaverse:function(){return x}});var r=t(34051),a=t.n(r),o=t(85893),s=t(67294),i=t(77044),u=t(27680),c=t(3283),l=t.n(c),p=t(63390),d=t(68288),y=t(41664),f=t(11163);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function h(e,n,t,r,a,o,s){try{var i=e[o](s),u=i.value}catch(c){return void t(c)}i.done?n(u):Promise.resolve(u).then(r,a)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){h(o,r,a,s,i,"next",e)}function i(e){h(o,r,a,s,i,"throw",e)}s(void 0)}))}}function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(u){i=!0,a=u}finally{try{s||null==t.return||t.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=t(40670),x=function(){var e=function(e){return x?(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Typography,{variant:"h6",sx:{pb:6},children:"Secret: We are searching Web3 pioneers!"}),(0,o.jsx)(u.Button,{className:"btn--primary",color:"primary",onClick:M,children:"logout"})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Typography,{variant:"body1",sx:{pb:6},children:"This is the mini metaverse - you can create an account and login to the secret space. The Web-Application only interacts with an Smart Contract. Have Fun!"}),(0,o.jsx)(u.Button,{className:"btn--primary",color:"primary",onClick:j,children:"Refresh"}),(0,o.jsxs)(u.Typography,{variant:"body1",sx:{pb:6},children:["Already have an account?",(0,o.jsx)(y.default,{href:"login",children:" Login here."})]}),(0,o.jsxs)(u.Typography,{variant:"body1",sx:{pb:6},children:["Need an account?",(0,o.jsx)(y.default,{href:"signup",children:" SignUp here."})]})]})},n=(0,i.useWeb3React)(),t=n.account,r=n.library,c=n.chainId,g=(0,f.useRouter)(),h=b(s.useState(!1),2),x=h[0],T=h[1],w=b(s.useState(void 0),2),_=w[0],k=w[1],j=function(){var e=m(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,console.log("checkIsUserLogged",t),!_){e.next=11;break}return e.next=6,null===_||void 0===_?void 0:_.methods.checkIsUserLogged(t).call();case 6:r=e.sent,console.log("data",r),T(r[0]),e.next=12;break;case 11:console.log("Err: contract not defined");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("Err",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=m(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,console.log("logoutSubmit"),console.log("checkIsUserLogged",t),e.next=6,_.methods.logoutUser(t).send({from:t,gasPrice:"0"});case 6:r=e.sent,console.log("data",r),g.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Err",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=m(a().mark((function e(n,t){var r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new(l())(t.provider),o=new r.eth.Contract(v,d.Q0),e.prev=3,e.next=6,o.methods.checkIsUserLogged(n).call();case 6:s=e.sent,console.log("data",s),k(o),T(s[0]),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(3),console.log("init error",e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(n,t){return e.apply(this,arguments)}}();return s.useEffect((function(){return t&&r&&S(t,r),null}),[t,r,c]),(0,o.jsx)(p.Z,{children:(0,o.jsx)(u.Box,{py:8,bgcolor:"background.default",children:(0,o.jsxs)(u.Container,{maxWidth:"md",children:[(0,o.jsx)(u.Typography,{variant:"h3",sx:{pb:6},children:"Mini Metaverse"}),(0,o.jsx)(u.Typography,{variant:"h6",sx:{pb:6},children:x?"You are logged In :-)":"Your are Not logged in :-("}),(0,o.jsx)(e,{})]})})})};n.default=x},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},40670:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkIsAdminLogged","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"checkIsUserLogged","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getAdminBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_password","type":"string"}],"name":"loginAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_password","type":"string"}],"name":"loginUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"logoutAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"logoutUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_password","type":"string"},{"internalType":"string","name":"_ipfsImageHash","type":"string"}],"name":"registerAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_password","type":"string"},{"internalType":"string","name":"_ipfsImageHash","type":"string"}],"name":"registerUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[482,714,100,389,774,888,179],(function(){return n=53787,e(e.s=n);var n}));var n=e.O();_N_E=n}]);