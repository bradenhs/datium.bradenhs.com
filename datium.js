(function(){var N=function(){function h(a,l){var b;if("ZERO_OUT"===l)return a.setSeconds(0),a;if("string"===typeof l&&/^\d+$/.test(l))b=parseInt(l,10);else if("number"===typeof l)b=l;else return;if(0>b||59<b)return;a.setSeconds(b);return a}function k(a){var l=a.getSeconds()+1;return h(a,59<l?0:l)}function g(a){var l=a.getSeconds()-1;return h(a,0>l?59:l)}function f(a,l){var b;if("ZERO_OUT"===l)return a.setMinutes(0),a;if("string"===typeof l&&/^\d+$/.test(l))b=parseInt(l,10);else if("number"===typeof l)b=
l;else return;if(0>b||59<b)return;a.setMinutes(b);return a}function b(a){var b=a.getMinutes()+1;return f(a,59<b?0:b)}function c(a){var b=a.getMinutes()-1;return f(a,0>b?59:b)}function e(a,b){var d,c=11<a.getHours()?"PM":"AM";if("ZERO_OUT"===b)return a.setHours("AM"===c?0:12),a;if("string"===typeof b&&/^\d+$/.test(b))d=parseInt(b,10);else if("number"===typeof b)d=b;else return;0===d&&(d=1);if(1>d||12<d)return;12===d&&"AM"===c&&(d=0);12!==d&&"PM"===c&&(d+=12);a.setHours(d);return a}function n(a){var b=
a.getHours()+1;return e(a,23<b?0:b)}function y(a){var b=a.getHours()-1;return e(a,0>b?23:b)}function C(a,b){var d;if("ZERO_OUT"===b)return a.setHours(0),a;if("string"===typeof b&&/^\d+$/.test(b))d=parseInt(b,10);else if("number"===typeof b)d=b;else return;if(0>d||23<d)return;a.getHours()===d+1?(a.setHours(d),a.getHours()!==d&&a.setHours(d-1)):a.setHours(d);return a}function w(a,b){var d;if("ZERO_OUT"===b)return a.setDate(1),a;if("string"===typeof b&&/\d{1,2}.*$/.test(b))d=parseInt(b,10);else if("number"===
typeof b)d=b;else return;0===d&&(d=1);if(1>d||d>t(a))return;a.setDate(d);return a}function m(a){var b=a.getDate()+1;return w(a,b>t(a)?1:b)}function B(a){var b=a.getDate()-1;return w(a,0>b?t(a):b)}function r(a,b){var d;if("ZERO_OUT"===b)return r(a,0);if("number"===typeof b)d=b;else if("string"!==typeof b||!u.some(function(a){if((new RegExp("^"+b+".*$","i")).test(a))return d=u.indexOf(a),!0}))return;if(0>d||6<d)return;a.setDate(a.getDate()-(a.getDay()-d));return a}function q(a){var b=a.getDay()+1;return r(a,
6<b?0:b)}function D(a){var b=a.getDay()-1;return r(a,0>b?6:b)}function E(a,b){var d;if("ZERO_OUT"===b)return a.setMonth(0),a;if("string"===typeof b&&/^\d+$/.test(b))d=parseInt(b,10);else if("number"===typeof b)d=b;else return;0===d&&(d=1);if(1>d||12<d)return;a.setMonth(d-1);return a}function z(a){var b=a.getMonth()+2;return r(a,12<b?1:b)}function A(a){var b=a.getMonth();return r(a,1>b?12:b)}function F(a,b){var d;if("ZERO_OUT"===b)return a.setMonth(0),a;if("string"!==typeof b||!v.some(function(a){if((new RegExp("^"+
b+".*$","i")).test(a))return d=v.indexOf(a)+1,!0})||1>d||12<d)return;a.setMonth(d-1);return a}function x(a,b){var d;if("ZERO_OUT"===b)return a.setFullYear(0),a;if("string"===typeof b&&/^\d+$/.test(b))d=parseInt(b,10);else if("number"===typeof b)d=b;else return;a.setFullYear(d);return a}function G(a,b){var d=a.getHours();if("ZERO_OUT"===b)return a;if("string"===typeof b&&/^am?$/i.test(b))d-=12;else if("string"===typeof b&&/^pm?$/i.test(b))d+=12;else return;if(0>d||23<d)return a;a.setHours(d);return a}
function H(a){var b=a.getHours()+12;return e(a,23<b?b-24:b)}function I(a){var b=a.getHours()-12;return e(a,0>b?b+24:b)}function t(a){return(new Date(a.getFullYear(),a.getMonth()+1,0)).getDate()}function J(a){a=a.getMonth();return 0===a?2:1===a?1:2===a?3:3===a?2:4===a||5===a||6===a?3:7===a?2:1}function K(a){return 11<a.getHours()?13<a.getHours()?1:2:1<a.getHours()?1:2}function L(a,b){var d=-a.getTimezoneOffset();return(0<=d?"+":"-")+p(d/60)+(b?":":"")+p(d%60)}function p(a){for(a=Math.abs(a).toString();2>
a.length;)a="0"+a;return a}function M(a){return 0===a?12:12<a?a-12:a}var v="January February March April May June July August September October November December".split(" "),u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");return[{code:"YYYY",f:"\\d{4,4}",a:function(a){return a.getFullYear().toString()},c:function(a){return x(a,a.getFullYear()+1)},b:function(a){return x(a,a.getFullYear()-1)},set:function(a,b){return x(a,b)},g:function(){return 4}},{code:"YY",f:"\\d{2,2}",a:function(a){return a.getFullYear().toString().slice(-2)},
c:function(a){return x(a,a.getFullYear()+1)},b:function(a){return x(a,a.getFullYear()-1)},set:function(a,b){var d;a:{d=a;var c=100*Math.floor(d.getFullYear()/100),e;if("ZERO_OUT"===b)d.setFullYear(c);else{if("string"===typeof b&&/^\d+$/.test(b))e=parseInt(b,10);else if("number"===typeof b)e=b;else{d=void 0;break a}d.setFullYear(c+e)}}return d},g:function(){return 2}},{code:"MMMM",f:"(("+v.join(")|(")+"))",a:function(a){return v[a.getMonth()]},c:function(a){return z(a)},b:function(a){return A(a)},
set:function(a,b){return F(a,b)},g:function(a){return J(a)}},{code:"MMM",f:"(("+v.map(function(a){return a.slice(0,3)}).join(")|(")+"))",a:function(a){return v[a.getMonth()].slice(0,3)},c:function(a){return z(a)},b:function(a){return A(a)},set:function(a,b){return F(a,b)},g:function(a){return J(a)}},{code:"MM",f:"\\d{2,2}",a:function(a){return p(a.getMonth()+1)},c:function(a){return z(a)},b:function(a){return A(a)},set:function(a,b){return E(a,b)},g:function(a){return 0<a.getMonth()?1:2}},{code:"M",
f:"\\d{1,2}",a:function(a){return(a.getMonth()+1).toString()},c:function(a){return z(a)},b:function(a){return A(a)},set:function(a,b){return E(a,b)},g:function(a){return 0<a.getMonth()?1:2}},{code:"DD",f:"\\d{2,2}",a:function(a){return p(a.getDate())},c:function(a){return m(a)},b:function(a){return B(a)},set:function(a,b){return w(a,b)},g:function(a){return 10*a.getDate()>t(a)?1:2}},{code:"Do",f:"\\d{1,2}((th)|(nd)|(rd)|(st))",a:function(a){a=a.getDate();var b=a%10,c=a%100;return 1==b&&11!=c?a+"st":
2==b&&12!=c?a+"nd":3==b&&13!=c?a+"rd":a+"th"},c:function(a){return m(a)},b:function(a){return B(a)},set:function(a,b){return w(a,b)},g:function(a){return 10*a.getDate()>t(a)?1:2}},{code:"D",f:"\\d{1,2}",a:function(a){return a.getDate().toString()},c:function(a){return m(a)},b:function(a){return B(a)},set:function(a,b){return w(a,b)},g:function(a){return 10*a.getDate()>t(a)?1:2}},{code:"dddd",f:"(("+u.join(")|(")+"))",a:function(a){return u[a.getDay()]},c:function(a){return q(a)},b:function(a){return D(a)},
set:function(a,b){return r(a,b)},g:function(a){return 0==a.getDay()%2?2:1}},{code:"ddd",f:"(("+u.map(function(a){return a.slice(0,3)}).join(")|(")+"))",a:function(a){return u[a.getDay()].slice(0,3)},c:function(a){return q(a)},b:function(a){return D(a)},set:function(a,b){return r(a,b)},g:function(a){return 0==a.getDay()%2?2:1}},{code:"X",f:"\\d{1,}",a:function(a){return Math.floor(a.valueOf()/1E3).toString()},c:function(a){return new Date(a.valueOf()+1E3)},b:function(a){return new Date(a.valueOf()-
1E3)},set:function(a,b){var c;a:if(c=a,"ZERO_OUT"===b)c=new Date(0);else{if("string"===typeof b&&/^\d+$/.test(b))c=parseInt(b,10);else if("number"===typeof b)c=b;else{c=void 0;break a}c=new Date(1E3*c)}return c}},{code:"x",f:"\\d{1,}",a:function(a){return a.valueOf().toString()},c:function(a){return new Date(a.valueOf()+1)},b:function(a){return new Date(a.valueOf()-1)},set:function(a,b){var c;a:if(c=a,"ZERO_OUT"===b)c=new Date(0);else{if("string"===typeof b&&/^\d+$/.test(b))c=parseInt(b,10);else if("number"===
typeof b)c=b;else{c=void 0;break a}c=new Date(c)}return c}},{code:"HH",f:"\\d{2,2}",a:function(a){return p(a.getHours())},c:function(a){return n(a)},b:function(a){return y(a)},set:function(a,b){return C(a,b)},g:function(a){return 2<a.getHours()?1:2}},{code:"H",f:"\\d{1,2}",a:function(a){return a.getHours().toString()},c:function(a){return n(a)},b:function(a){return y(a)},set:function(a,b){return C(a,b)},g:function(a){return 2<a.getHours()?1:2}},{code:"hh",f:"\\d{2,2}",a:function(a){return p(M(a.getHours()))},
c:function(a){return n(a)},b:function(a){return y(a)},set:function(a,b){return e(a,b)},g:function(a){return K(a)}},{code:"h",f:"\\d{1,2}",a:function(a){return M(a.getHours()).toString()},c:function(a){return n(a)},b:function(a){return y(a)},set:function(a,b){return e(a,b)},g:function(a){return K(a)}},{code:"A",f:"((AM)|(PM))",a:function(a){return 12>a.getHours()?"AM":"PM"},c:function(a){return H(a)},b:function(a){return I(a)},set:function(a,b){return G(a,b)},g:function(){return 1}},{code:"a",f:"((am)|(pm))",
a:function(a){return 12>a.getHours()?"am":"pm"},c:function(a){return H(a)},b:function(a){return I(a)},set:function(a,b){return G(a,b)},g:function(){return 1}},{code:"mm",f:"\\d{2,2}",a:function(a){return p(a.getMinutes())},c:function(a){return b(a)},b:function(a){return c(a)},set:function(a,b){return f(a,b)},g:function(a){return 5<a.getMinutes()?1:2}},{code:"m",f:"\\d{1,2}",a:function(a){return a.getMinutes().toString()},c:function(a){return b(a)},b:function(a){return c(a)},set:function(a,b){return f(a,
b)},g:function(a){return 5<a.getMinutes()?1:2}},{code:"ss",f:"\\d{2,2}",a:function(a){return p(a.getSeconds())},c:function(a){return k(a)},b:function(a){return g(a)},set:function(a,b){return h(a,b)},g:function(a){return 5<a.getSeconds()?1:2}},{code:"s",f:"\\d{1,2}",a:function(a){return a.getSeconds().toString()},c:function(a){return k(a)},b:function(a){return g(a)},set:function(a,b){return h(a,b)},g:function(a){return 5<a.getSeconds()?1:2}},{code:"ZZ",f:"(\\+|\\-)\\d{2,2}:\\d{2,2}",a:function(a){return L(a,
!0)}},{code:"Z",f:"(\\+|\\-)\\d{4,4}",a:function(a){return L(a,!1)}}]}(),q=function(){return function(h,k){var g=this;this.V=function(f){return f};this.clone=function(f){return new Date(f.valueOf())};this.R=function(f){return g.c(g.clone(f))};this.P=function(f){return g.b(g.clone(f))};this.W=function(f){if(void 0===g.a)return g;g.value=g.a(g.clone(f));return g};this.toString=function(){return g.value};this.l=function(){return g.w};this.J=function(){return g.K};this.m=function(f,b){return g.set(g.clone(f),
b)};this.G=function(f){return void 0===g.g?void 0:g.g(g.clone(f))};"object"===typeof h?(this.a=h.a,this.c=h.c,this.b=h.b,this.set=h.set,this.g=h.g,this.K=h.f,this.w=void 0!==this.c&&void 0!==this.b):(this.value=h,this.K=this.V(this.value),this.w=!1);"boolean"===typeof k&&(this.w=k)}}(),O=function(){function h(){}h.parse=function(k){function g(){if(0<e.length){var b=new q(e,void 0);c.push(b);e=""}}for(var f=0,b=!1,c=[],e="",n;f<k.length;)b||"["!==k[f]?b&&"]"===k[f]?(b=!1,f++):b?(e+=k[f],f++):N.some(function(b){if(h.C(k,
f,"{"+b.code+"}")){g();var e=new q(b,!1);c.push(e);n=b.code.length+2;return!0}if(h.C(k,f,b.code))return g(),e=new q(b,void 0),c.push(e),n=b.code.length,!0})?f+=n:(e+=k[f],f++):(b=!0,f++);g();return c};h.C=function(h,g,f){return h.slice(g,g+f.length)===f};return h}();window.Datium=function(){return function(h){new P(h.element,"h:mma {ddd} MMM Do, YYYY")}}();var P=function(){return function(h,k,g,f){var b=this;this.element=h;this.u=g;this.s=f;this.v=this.B=this.A=!1;this.i="";this.N=function(b){var e=
"";b.forEach(function(b){e+=b.J()});return new RegExp("^"+e+"$","i")};this.M=function(){function c(){b.element.removeEventListener("mousedown",f);document.removeEventListener("mouseup",e);document.removeEventListener("touchstart",c)}function e(){h&&(h=!1,b.selectedIndex=b.H(b.element.selectionStart===g?b.element.selectionEnd:b.element.selectionStart),(0<b.element.selectionStart||b.element.selectionEnd<b.element.value.length)&&b.update())}function f(){clearInterval(q);h=!0;b.element.setSelectionRange(void 0,
void 0);setTimeout(function(){g=b.element.selectionStart})}b.element.addEventListener("focus",function(){return b.focus()});b.element.addEventListener("keydown",function(c){return b.S(c)});b.element.addEventListener("paste",function(){return b.U()});document.addEventListener("keydown",function(c){c.shiftKey&&9===c.keyCode?b.A=!0:9===c.keyCode&&(b.B=!0);setTimeout(function(){b.A=!1;b.B=!1})});b.element.addEventListener("dragenter",function(b){return b.preventDefault()});b.element.addEventListener("dragover",
function(b){return b.preventDefault()});b.element.addEventListener("drop",function(b){return b.preventDefault()});b.element.addEventListener("cut",function(b){return b.preventDefault()});var g,h=!1;b.element.addEventListener("mousedown",f);document.addEventListener("mouseup",e);document.addEventListener("touchstart",c);var k,m,q=setInterval(function(){b.v||0===b.element.selectionStart&&b.element.selectionEnd===b.element.value.length||b.element.selectionStart===k&&b.element.selectionEnd===m||(b.selectedIndex=
b.H(b.element.selectionStart+(b.element.selectionEnd-b.element.selectionStart)/2),b.update());k=b.element.selectionStart;m=b.element.selectionEnd})};this.U=function(){b.v=!0;var c=b.element.value;setTimeout(function(){if(b.O.test(b.element.value)){var e=new Date(b.j.valueOf()),f="";b.h.forEach(function(c){var g=b.element.value.replace(f,"").match(c.J())[0];f+=g;c.l()&&(e=c.m(e,g))});b.update(e)}else b.element.value=c;b.v=!1})};this.S=function(c){if(36!==c.keyCode&&35!==c.keyCode||!c.shiftKey)if(67!==
c.keyCode||!c.ctrlKey)if(65!==c.keyCode||!c.ctrlKey)if(86!==c.keyCode||!c.ctrlKey)if(37!==c.keyCode&&39!==c.keyCode||!c.shiftKey){if(36===c.keyCode)b.selectedIndex=b.D(),b.update(),c.preventDefault();else if(35===c.keyCode)b.selectedIndex=b.F(),b.update(),c.preventDefault();else if(37===c.keyCode)b.selectedIndex=b.I(),b.update(),c.preventDefault();else if(c.shiftKey&&9===c.keyCode){var e=b.I();e!==b.selectedIndex&&(b.selectedIndex=e,b.update(),c.preventDefault())}else 39===c.keyCode?(b.selectedIndex=
b.o(),b.update(),c.preventDefault()):9===c.keyCode?(e=b.o(),e!==b.selectedIndex&&(b.selectedIndex=e,b.update(),c.preventDefault())):(38===c.keyCode?(e=b.h[b.selectedIndex].R(b.j),b.update(e)):40===c.keyCode&&(e=b.h[b.selectedIndex].P(b.j),b.update(e)),c.preventDefault());e={48:"0",96:"0",49:"1",97:"1",50:"2",98:"2",51:"3",99:"3",52:"4",100:"4",53:"5",101:"5",54:"6",102:"6",55:"7",103:"7",56:"8",104:"8",57:"9",105:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",
77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"}[c.keyCode];8===c.keyCode?b.L():void 0!==e?b.i+=e:c.shiftKey||(b.i="");0<b.i.length&&(c=b.h[b.selectedIndex].m(b.j,b.i),void 0!==c&&void 0!==b.h[b.selectedIndex].G(c)&&b.i.length>=b.h[b.selectedIndex].G(c)&&(b.selectedIndex=b.o()),void 0===c?b.i=b.i.slice(0,b.i.length-1):b.update(c))}};this.L=function(){if(2>b.i.length){var c=b.j.valueOf(),e=b.h[b.selectedIndex].m(b.j,"ZERO_OUT");e.valueOf()!==c&&b.update(e)}b.i=
b.i.slice(0,b.i.length-1)};this.I=function(){for(var c=b.selectedIndex;0<=--c;)if(b.h[c].l())return c;return b.selectedIndex};this.o=function(){for(var c=b.selectedIndex;++c<b.h.length;)if(b.h[c].l())return c;return b.selectedIndex};this.H=function(c){for(var e=0,f,g,h=0;h<b.h.length;h++){if(b.h[h].l()){var k=c-e,m=c-(e+b.h[h].toString().length);if(0<k&&0>m)return h;k=Math.min(Math.abs(k),Math.abs(m));if(void 0==f||k<=g)f=h,g=k}e+=b.h[h].toString().length}return f};this.focus=function(){b.B?(b.selectedIndex=
b.D(),setTimeout(function(){b.update()})):b.A&&(b.selectedIndex=b.F(),setTimeout(function(){b.update()}))};this.D=function(){for(var c=0;c<b.h.length;c++)if(b.h[c].l())return c};this.F=function(){for(var c=b.h.length-1;0<=c;c--)if(b.h[c].l())return c};this.update=function(c){void 0===c&&(c=b.j);void 0!==b.u&&c.valueOf()<b.u.valueOf()&&(c=new Date(b.u.valueOf()));void 0!==b.s&&c.valueOf()<b.s.valueOf()&&(c=new Date(b.s.valueOf()));b.selectedIndex!==b.T&&(b.i="");b.T=b.selectedIndex;b.j=new Date(c.valueOf());
var e="";b.h.forEach(function(b){e+=b.W(c).toString()});b.element.value=e;b.X()};this.X=function(){if(void 0!==b.selectedIndex&&document.activeElement===b.element){for(var c=0,e=0;e<b.selectedIndex;e++)c+=b.h[e].toString().length;b.element.setSelectionRange(c,c+b.h[b.selectedIndex].toString().length)}};this.h=O.parse(k);this.O=this.N(this.h);this.M();h.setAttribute("spellcheck","false");this.update(new Date(0))}}()})();
