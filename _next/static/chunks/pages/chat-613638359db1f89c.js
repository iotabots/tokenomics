(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[180],{58984:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return e(98583)}])},98583:function(t,n,e){"use strict";e.r(n),e.d(n,{Chat:function(){return h}});var i=e(34051),a=e.n(i),u=e(85893),r=e(67294),s=e(27680),p=e(77044),o=e(11163),y=e(3283),l=e.n(y),c=e(68288);function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function f(t,n,e,i,a,u,r){try{var s=t[u](r),p=s.value}catch(o){return void e(o)}s.done?n(p):Promise.resolve(p).then(i,a)}function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,a,u=[],r=!0,s=!1;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(u.push(i.value),!n||u.length!==n);r=!0);}catch(p){s=!0,a=p}finally{try{r||null==e.return||e.return()}finally{if(s)throw a}}return u}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=e(50801),h=function(t){var n=d(r.useState(void 0),2),e=(n[0],n[1]),i=(0,p.useWeb3React)(),y=i.account,m=i.library,h=i.chainId,_=((0,o.useRouter)(),function(){var t,n=(t=a().mark((function t(n,i){var u,r,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=new(l())(i.provider),t.prev=2,s=new u.eth.Contract(b,c.ZA),t.next=6,s.methods.get_amount_of_posts_by_space(0).call();case 6:r=t.sent,console.log("data",r),e(s),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(2),console.log("init error",t.t0),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})),function(){var n=this,e=arguments;return new Promise((function(i,a){var u=t.apply(n,e);function r(t){f(u,i,a,r,s,"next",t)}function s(t){f(u,i,a,r,s,"throw",t)}r(void 0)}))});return function(t,e){return n.apply(this,arguments)}}());return r.useEffect((function(){return console.log("init?"),y&&m&&(console.log("init!"),_(y,m)),null}),[y,m,h]),(0,u.jsx)(s.BaseLayout,{children:(0,u.jsxs)(s.Section,{children:[(0,u.jsx)(s.SectionHeader,{title:"Web3 Chat",subtitle:"Alpha Testing Live Now!"}),(0,u.jsxs)(s.Container,{maxWidth:"md",children:[(0,u.jsx)(s.Typography,{variant:"body2",align:"center",sx:{pb:6},children:"Attention: This a very early test and we will reset the chain somethimes."}),(0,u.jsx)(s.Typography,{variant:"body1",align:"center",sx:{pb:6},children:"The chat is provided by decensored. Only IOTABOTS can post here :-)"})]})]})})};n.default=h},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){},69862:function(){},40964:function(){},50801:function(t){"use strict";t.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"author","type":"uint64"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"PostSubmitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint64","name":"amount","type":"uint64"}],"name":"Withdrawal","type":"event"},{"inputs":[],"name":"contracts","outputs":[{"internalType":"contract Contracts","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"index","type":"uint64"}],"name":"delete_post","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"get_amount_of_posts","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"author","type":"uint64"}],"name":"get_amount_of_posts_by_author","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"space","type":"uint64"}],"name":"get_amount_of_posts_by_space","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"post","type":"uint64"}],"name":"get_amount_of_replies_by_post","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"author","type":"uint64"},{"internalType":"uint64","name":"n","type":"uint64"}],"name":"get_nth_post_index_by_author","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"contracts_address","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"}],"name":"posts","outputs":[{"internalType":"string","name":"message","type":"string"},{"internalType":"uint64","name":"author","type":"uint64"},{"internalType":"uint64","name":"timestamp","type":"uint64"},{"internalType":"uint64","name":"space","type":"uint64"},{"internalType":"uint64","name":"mother_post","type":"uint64"},{"internalType":"bool","name":"deleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts_by_author","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"posts_by_space","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"","type":"uint64"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"replies_by_post","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"space","type":"uint64"},{"internalType":"string","name":"message","type":"string"}],"name":"submit_post","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"mother_post","type":"uint64"},{"internalType":"string","name":"message","type":"string"}],"name":"submit_reply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},function(t){t.O(0,[482,714,100,389,774,888,179],(function(){return n=58984,t(t.s=n);var n}));var n=t.O();_N_E=n}]);