"format global";!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in m||(m[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==n.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=m[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(n.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=m[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return r[a]||(r[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],n=m[k],o=r[k];o?j=o.exports:n&&!n.declarative?j=n.esModule:n?(h(n),o=n.module,j=o.exports):j=l(k),o&&o.importers?(o.importers.push(c),c.dependencies.push(o)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=m[a];if(c)c.declarative?k(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=l(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b["default"]:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=m[g];h&&j(h)}b.evaluated=!0;var k=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);if(k&&(d.exports=k),c=d.exports,c&&c.__esModule)b.esModule=c;else{if(b.esModule={},("object"==typeof c||"function"==typeof c)&&c!==a)if(o){var l;for(var n in c)(l=Object.getOwnPropertyDescriptor(c,n))&&q(b.esModule,n,l)}else{var p=c&&c.hasOwnProperty;for(var n in c)(!p||c.hasOwnProperty(n))&&(b.esModule[n]=c[n])}b.esModule["default"]=c,q(b.esModule,"__useDefault",{value:!0})}}}function k(b,c){var d=m[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==n.call(c,g)&&(m[g]?k(g,c):l(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function l(a){if(s[a])return s[a];if("@node/"==a.substr(0,6))return require(a.substr(6));var b=m[a];if(!b)throw"Module "+a+" not present.";return f(a),k(a,[]),m[a]=void 0,b.declarative&&q(b.module.exports,"__esModule",{value:!0}),s[a]=b.declarative?b.module.exports:b.esModule}var m={},n=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},o=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(p){o=!1}var q;!function(){try{Object.defineProperty({},"a",{})&&(q=Object.defineProperty)}catch(a){q=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var r={},s={};return function(a,d,e){return function(f){f(function(f){var g={_nodeRequire:"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,register:b,registerDynamic:c,get:l,set:function(a,b){s[a]=b},newModule:function(a){return a}};g.set("@empty",{});for(var h=0;h<d.length;h++)(function(a,b){b&&b.__esModule?g.register(a,[],function(a){return{setters:[],execute:function(){for(var c in b)"__esModule"==c||"object"==typeof c&&c+""=="Module"||a(c,b[c])}}}):g.registerDynamic(a,[],!1,function(){return b})})(d[h],arguments[h]);e(g);var i=l(a[0]);if(a.length>1)for(var h=1;h<a.length;h++)l(a[h]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)(["1"],[],function(a){a.register("2",[],function(a){var b;return{setters:[],execute:function(){b=function(){function a(a,b){"object"==typeof a?(this.str=a.str,this.inc=a.inc,this.dec=a.dec,this.set=a.set,this.maxBuffer=a.maxBuffer,this.regExpString=a.regExp,this.selectable=void 0!==this.inc&&void 0!==this.dec):(this.value=a,this.regExpString=this.regExpEscape(this.value),this.selectable=!1),"boolean"==typeof b&&(this.selectable=b)}return a.prototype.regExpEscape=function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},a.prototype.increment=function(a){return this.inc(a)},a.prototype.decrement=function(a){return this.dec(a)},a.prototype.setValue=function(a){return void 0===this.str?this:(this.value=this.str(a),this)},a.prototype.toString=function(){return this.value},a.prototype.isSelectable=function(){return this.selectable},a.prototype.getRegExpString=function(){return this.regExpString},a.prototype.getDateFromString=function(a,b){return this.set(a,b)},a.prototype.getMaxBufferSize=function(a){return void 0!==this.maxBuffer?this.maxBuffer(a):void 0},a}(),a("default",b)}}}),a.register("3",[],function(a){function b(a){return new i(a)}function c(a,b){var c=-a.getTimezoneOffset(),e=c>=0?"+":"-",f=b?":":"";return e+d(c/60,2)+f+d(c%60,2)}function d(a,b){for(var c=Math.abs(a).toString();c.length<b;)c="0"+c;return c}function e(a){var b=a%10,c=a%100;return 1==b&&11!=c?a+"st":2==b&&12!=c?a+"nd":3==b&&13!=c?a+"rd":a+"th"}function f(a){return 0===a?12:a>12?a-12:a}var g,h,i,j;return{setters:[],execute:function(){g=["January","February","March","April","May","June","July","August","September","October","November","December"],h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=function(){function a(a){this.date=new Date(a.valueOf())}return a.prototype.setSeconds=function(a){var b;if("ZERO_OUT"===a)return this.date.setSeconds(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0>b||b>59?(this.date=void 0,this):(this.date.setSeconds(b),this)},a.prototype.setMinutes=function(a){var b;if("ZERO_OUT"===a)return this.date.setMinutes(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0>b||b>59?(this.date=void 0,this):(this.date.setMinutes(b),this)},a.prototype.setHours=function(a){var b,c=this.date.getHours()>11?"PM":"AM";if("ZERO_OUT"===a)return this.date.setHours("AM"===c?0:12),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0===b&&(b=1),1>b||b>12?(this.date=void 0,this):(12===b&&"AM"===c&&(b=0),12!==b&&"PM"===c&&(b+=12),this.date.setHours(b),this)},a.prototype.setMilitaryHours=function(a){var b;if("ZERO_OUT"===a)return this.date.setHours(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0>b||b>23?(this.date=void 0,this):(this.date.getHours()===b+1?(this.date.setHours(b),this.date.getHours()!==b&&this.date.setHours(b-1)):this.date.setHours(b),this)},a.prototype.setDate=function(a){var b;if("ZERO_OUT"===a)return this.date.setDate(1),this;if("string"==typeof a&&/\d{1,2}.*$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0===b&&(b=1),1>b||b>this.daysInMonth()?(this.date=void 0,this):(this.date.setDate(b),this)},a.prototype.setDay=function(a){var b;if("ZERO_OUT"===a)return this.setDay(0);if("number"==typeof a)b=a;else if("string"!=typeof a||!h.some(function(c){return new RegExp("^"+a+".*$","i").test(c)?(b=h.indexOf(c),!0):void 0}))return this.date=void 0,this;if(0>b||b>6)return this.date=void 0,this;var c=this.date.getDay()-b;return this.date.setDate(this.date.getDate()-c),this},a.prototype.setMonth=function(a){var b;if("ZERO_OUT"===a)return this.date.setMonth(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return 0===b&&(b=1),1>b||b>12?(this.date=void 0,this):(this.date.setMonth(b-1),this)},a.prototype.setMonthString=function(a){var b;return"ZERO_OUT"===a?(this.date.setMonth(0),this):"string"==typeof a&&g.some(function(c){return new RegExp("^"+a+".*$","i").test(c)?(b=g.indexOf(c)+1,!0):void 0})?1>b||b>12?(this.date=void 0,this):(this.date.setMonth(b-1),this):(this.date=void 0,this)},a.prototype.setYear=function(a){var b;if("ZERO_OUT"===a)return this.date.setFullYear(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return this.date.setFullYear(b),this},a.prototype.setTwoDigitYear=function(a){var b,c=100*Math.floor(this.date.getFullYear()/100);if("ZERO_OUT"===a)return this.date.setFullYear(c),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return this.date.setFullYear(c+b),this},a.prototype.setUnixSecondTimestamp=function(a){var b;if("ZERO_OUT"===a)return this.date=new Date(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return this.date=new Date(1e3*b),this},a.prototype.setUnixMillisecondTimestamp=function(a){var b;if("ZERO_OUT"===a)return this.date=new Date(0),this;if("string"==typeof a&&/^\d+$/.test(a))b=parseInt(a);else{if("number"!=typeof a)return this.date=void 0,this;b=a}return this.date=new Date(b),this},a.prototype.setMeridiem=function(a){var b=this.date.getHours();if("ZERO_OUT"===a)return this;if("string"==typeof a&&/^am?$/i.test(a))b-=12;else{if("string"!=typeof a||!/^pm?$/i.test(a))return this.date=void 0,this;b+=12}return 0>b||b>23?this:(this.date.setHours(b),this)},a.prototype.daysInMonth=function(){return new Date(this.date.getFullYear(),this.date.getMonth()+1,0).getDate()},a.prototype.maxMonthStringBuffer=function(){var a=this.date.getMonth();return 0===a?2:1===a?1:2===a?3:3===a?2:4===a?3:5===a?3:6===a?3:7===a?2:1},a.prototype.maxMonthBuffer=function(){return this.date.getMonth()>0?1:2},a.prototype.maxDateBuffer=function(){return 10*this.date.getDate()>this.daysInMonth()?1:2},a.prototype.maxDayStringBuffer=function(){return this.date.getDay()%2==0?2:1},a.prototype.maxMilitaryHoursBuffer=function(){return this.date.getHours()>2?1:2},a.prototype.maxHoursBuffer=function(){return this.date.getHours()>11?this.date.getHours()>13?1:2:this.date.getHours()>1?1:2},a.prototype.maxMinutesBuffer=function(){return this.date.getMinutes()>5?1:2},a.prototype.maxSecondsBuffer=function(){return this.date.getSeconds()>5?1:2},a}(),a("formatBlocks",j=[{code:"YYYY",regExp:"\\d{4,4}",str:function(a){return a.getFullYear().toString()},inc:function(a){return b(a).setYear(a.getFullYear()+1).date},dec:function(a){return b(a).setYear(a.getFullYear()-1).date},set:function(a,c){return b(a).setYear(c).date},maxBuffer:function(a){return 4}},{code:"YY",regExp:"\\d{2,2}",str:function(a){return a.getFullYear().toString().slice(-2)},inc:function(a){return b(a).setYear(a.getFullYear()+1).date},dec:function(a){return b(a).setYear(a.getFullYear()-1).date},set:function(a,c){return b(a).setTwoDigitYear(c).date},maxBuffer:function(a){return 2}},{code:"MMMM",regExp:"(("+g.join(")|(")+"))",str:function(a){return g[a.getMonth()]},inc:function(a){return b(a).setMonth(a.getMonth()+2).date},dec:function(a){return b(a).setMonth(a.getMonth()).date},set:function(a,c){return b(a).setMonthString(c).date},maxBuffer:function(a){return b(a).maxMonthStringBuffer()}},{code:"MMM",regExp:"(("+g.map(function(a){return a.slice(0,3)}).join(")|(")+"))",str:function(a){return g[a.getMonth()].slice(0,3)},inc:function(a){return b(a).setMonth(a.getMonth()+2).date},dec:function(a){return b(a).setMonth(a.getMonth()).date},set:function(a,c){return b(a).setMonthString(c).date},maxBuffer:function(a){return b(a).maxMonthStringBuffer()}},{code:"MM",regExp:"\\d{2,2}",str:function(a){return d(a.getMonth()+1,2)},inc:function(a){return b(a).setMonth(a.getMonth()+2).date},dec:function(a){return b(a).setMonth(a.getMonth()).date},set:function(a,c){return b(a).setMonth(c).date},maxBuffer:function(a){return b(a).maxMonthBuffer()}},{code:"M",regExp:"\\d{1,2}",str:function(a){return(a.getMonth()+1).toString()},inc:function(a){return b(a).setMonth(a.getMonth()+2).date},dec:function(a){return b(a).setMonth(a.getMonth()).date},set:function(a,c){return b(a).setMonth(c).date},maxBuffer:function(a){return b(a).maxMonthBuffer()}},{code:"DD",regExp:"\\d{2,2}",str:function(a){return d(a.getDate(),2)},inc:function(a){return b(a).setDate(a.getDate()+1).date},dec:function(a){return b(a).setDate(a.getDate()-1).date},set:function(a,c){return b(a).setDate(c).date},maxBuffer:function(a){return b(a).maxDateBuffer()}},{code:"Do",regExp:"\\d{1,2}((th)|(nd)|(rd)|(st))",str:function(a){return e(a.getDate())},inc:function(a){return b(a).setDate(a.getDate()+1).date},dec:function(a){return b(a).setDate(a.getDate()-1).date},set:function(a,c){return b(a).setDate(c).date},maxBuffer:function(a){return b(a).maxDateBuffer()}},{code:"D",regExp:"\\d{1,2}",str:function(a){return a.getDate().toString()},inc:function(a){return b(a).setDate(a.getDate()+1).date},dec:function(a){return b(a).setDate(a.getDate()-1).date},set:function(a,c){return b(a).setDate(c).date},maxBuffer:function(a){return b(a).maxDateBuffer()}},{code:"dddd",regExp:"(("+h.join(")|(")+"))",str:function(a){return h[a.getDay()]},inc:function(a){return b(a).setDay(a.getDay()+1).date},dec:function(a){return b(a).setDay(a.getDay()-1).date},set:function(a,c){return b(a).setDay(c).date},maxBuffer:function(a){return b(a).maxDayStringBuffer()}},{code:"ddd",regExp:"(("+h.map(function(a){return a.slice(0,3)}).join(")|(")+"))",str:function(a){return h[a.getDay()].slice(0,3)},inc:function(a){return b(a).setDay(a.getDay()+1).date},dec:function(a){return b(a).setDay(a.getDay()-1).date},set:function(a,c){return b(a).setDay(c).date},maxBuffer:function(a){return b(a).maxDayStringBuffer()}},{code:"X",regExp:"\\d{1,}",str:function(a){return Math.floor(a.valueOf()/1e3).toString()},inc:function(a){return new Date(a.valueOf()+1e3)},dec:function(a){return new Date(a.valueOf()-1e3)},set:function(a,c){return b(a).setUnixSecondTimestamp(c).date}},{code:"x",regExp:"\\d{1,}",str:function(a){return a.valueOf().toString()},inc:function(a){return new Date(a.valueOf()+1)},dec:function(a){return new Date(a.valueOf()-1)},set:function(a,c){return b(a).setUnixMillisecondTimestamp(c).date}},{code:"HH",regExp:"\\d{2,2}",str:function(a){return d(a.getHours(),2)},inc:function(a){return b(a).setMilitaryHours(a.getHours()+1).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-1).date},set:function(a,c){return b(a).setMilitaryHours(c).date},maxBuffer:function(a){return b(a).maxMilitaryHoursBuffer()}},{code:"H",regExp:"\\d{1,2}",str:function(a){return a.getHours().toString()},inc:function(a){return b(a).setMilitaryHours(a.getHours()+1).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-1).date},set:function(a,c){return b(a).setMilitaryHours(c).date},maxBuffer:function(a){return b(a).maxMilitaryHoursBuffer()}},{code:"hh",regExp:"\\d{2,2}",str:function(a){return d(f(a.getHours()),2)},inc:function(a){return b(a).setMilitaryHours(a.getHours()+1).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-1).date},set:function(a,c){return b(a).setHours(c).date},maxBuffer:function(a){return b(a).maxHoursBuffer()}},{code:"h",regExp:"\\d{1,2}",str:function(a){return f(a.getHours()).toString()},inc:function(a){return b(a).setMilitaryHours(a.getHours()+1).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-1).date},set:function(a,c){return b(a).setHours(c).date},maxBuffer:function(a){return b(a).maxHoursBuffer()}},{code:"A",regExp:"((AM)|(PM))",str:function(a){return a.getHours()<12?"AM":"PM"},inc:function(a){return b(a).setMilitaryHours(a.getHours()+12).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-12).date},set:function(a,c){return b(a).setMeridiem(c).date},maxBuffer:function(a){return 1}},{code:"a",regExp:"((am)|(pm))",str:function(a){return a.getHours()<12?"am":"pm"},inc:function(a){return b(a).setMilitaryHours(a.getHours()+12).date},dec:function(a){return b(a).setMilitaryHours(a.getHours()-12).date},set:function(a,c){return b(a).setMeridiem(c).date},maxBuffer:function(a){return 1}},{code:"mm",regExp:"\\d{2,2}",str:function(a){return d(a.getMinutes(),2)},inc:function(a){return b(a).setMinutes(a.getMinutes()+1).date},dec:function(a){return b(a).setMinutes(a.getMinutes()-1).date},set:function(a,c){return b(a).setMinutes(c).date},maxBuffer:function(a){return b(a).maxMinutesBuffer()}},{code:"m",regExp:"\\d{1,2}",str:function(a){return a.getMinutes().toString()},inc:function(a){return b(a).setMinutes(a.getMinutes()+1).date},dec:function(a){return b(a).setMinutes(a.getMinutes()-1).date},set:function(a,c){return b(a).setMinutes(c).date},maxBuffer:function(a){return b(a).maxMinutesBuffer()}},{code:"ss",regExp:"\\d{2,2}",str:function(a){return d(a.getSeconds(),2)},inc:function(a){return b(a).setSeconds(a.getSeconds()+1).date},dec:function(a){return b(a).setSeconds(a.getSeconds()-1).date},set:function(a,c){return b(a).setSeconds(c).date},maxBuffer:function(a){return b(a).maxSecondsBuffer()}},{code:"s",regExp:"\\d{1,2}",str:function(a){return a.getSeconds().toString()},inc:function(a){return b(a).setSeconds(a.getSeconds()+1).date},dec:function(a){return b(a).setSeconds(a.getSeconds()-1).date},set:function(a,c){return b(a).setSeconds(c).date},maxBuffer:function(a){return b(a).maxSecondsBuffer()}},{code:"ZZ",regExp:"(\\+|\\-)\\d{2,2}:\\d{2,2}",str:function(a){return c(a,!0)}},{code:"Z",regExp:"(\\+|\\-)\\d{4,4}",str:function(a){return c(a,!1)}}])}}}),a.register("4",["3","2"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(){}return a.parse=function(a){for(var d,e=this,f=0,g=!1,h=[],i="",j=function(){i.length>0&&(h.push(new c["default"](i)),i="")};f<a.length;)g||"["!==a[f]?g&&"]"===a[f]?(g=!1,f++):g?(i+=a[f],f++):b.formatBlocks.some(function(b){return e.findAt(a,f,"{"+b.code+"}")?(j(),h.push(new c["default"](b,!1)),d=b.code.length+2,!0):e.findAt(a,f,b.code)?(j(),h.push(new c["default"](b)),d=b.code.length,!0):void 0})?f+=d:(i+=a[f],f++):(g=!0,f++);return j(),h},a.findAt=function(a,b,c){return a.slice(b,b+c.length)===c},a}(),a("default",d)}}}),a.register("5",["4"],function(a){var b,c,d;return{setters:[function(a){b=a}],execute:function(){!function(a){a[a.RIGHT=39]="RIGHT",a[a.LEFT=37]="LEFT",a[a.TAB=9]="TAB",a[a.UP=38]="UP",a[a.DOWN=40]="DOWN",a[a.V=86]="V",a[a.C=67]="C",a[a.A=65]="A",a[a.HOME=36]="HOME",a[a.END=35]="END",a[a.BACKSPACE=8]="BACKSPACE"}(c||(c={})),a("KeyCodes",c),d=function(){function a(a,c){this.element=a,this.shiftTabDown=!1,this.tabDown=!1,this.textBuffer="",this.keyMap={48:"0",96:"0",49:"1",97:"1",50:"2",98:"2",51:"3",99:"3",52:"4",100:"4",53:"5",101:"5",54:"6",102:"6",55:"7",103:"7",56:"8",104:"8",57:"9",105:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"},this.dateParts=b["default"].parse(c),this.dateStringRegExp=this.concatRegExp(this.dateParts),this.bindEvents(),this.element.setAttribute("spellcheck","false"),this.update(new Date)}return a.prototype.concatRegExp=function(a){var b="";return a.forEach(function(a){b+=a.getRegExpString()}),new RegExp("^"+b+"$","i")},a.prototype.bindEvents=function(){var a=this;this.element.addEventListener("focus",function(){return a.focus()}),this.element.addEventListener("blur",function(){return a.blur()}),this.element.addEventListener("mousedown",function(b){return a.mousedown(b)}),this.element.addEventListener("keydown",function(b){return a.keydown(b)}),this.element.addEventListener("paste",function(){return a.paste()}),document.addEventListener("mouseup",function(){return a.mouseup()}),document.addEventListener("keydown",function(b){b.shiftKey&&b.keyCode===c.TAB?a.shiftTabDown=!0:b.keyCode===c.TAB&&(a.tabDown=!0),setTimeout(function(){a.shiftTabDown=!1,a.tabDown=!1})}),this.element.addEventListener("dragenter",function(a){return a.preventDefault()}),this.element.addEventListener("dragover",function(a){return a.preventDefault()}),this.element.addEventListener("drop",function(a){return a.preventDefault()}),this.element.addEventListener("cut",function(a){return a.preventDefault()})},a.prototype.mouseup=function(){var a=this.element.selectionStart;a===this.downSelectionStart&&(a=this.element.selectionEnd),this.selectedIndex=this.getNearestSelectableIndex(a),(0!==this.element.selectionStart||this.element.selectionEnd!==this.element.value.length)&&this.update()},a.prototype.paste=function(){var a=this,b=this.element.value;setTimeout(function(){if(!a.dateStringRegExp.test(a.element.value))return void(a.element.value=b);var c=new Date(a.curDate.valueOf()),d="";a.dateParts.forEach(function(b){var e=a.element.value.replace(d,"").match(b.getRegExpString())[0];d+=e,b.isSelectable()&&(c=b.getDateFromString(c,e))}),a.update(c)})},a.prototype.keydown=function(a){if((a.keyCode!==c.HOME&&a.keyCode!==c.END||!a.shiftKey)&&!(a.keyCode===c.C&&a.ctrlKey||a.keyCode===c.A&&a.ctrlKey||a.keyCode===c.V&&a.ctrlKey||(a.keyCode===c.LEFT||a.keyCode===c.RIGHT)&&a.shiftKey)){if(a.keyCode===c.HOME)this.selectedIndex=this.getFirstSelectable(),this.update(),a.preventDefault();else if(a.keyCode===c.END)this.selectedIndex=this.getLastSelectable(),this.update(),a.preventDefault();else if(a.keyCode===c.LEFT)this.selectedIndex=this.getPreviousSelectable(),this.update(),a.preventDefault();else if(a.shiftKey&&a.keyCode===c.TAB){var b=this.getPreviousSelectable();b!==this.selectedIndex&&(this.selectedIndex=b,this.update(),a.preventDefault())}else if(a.keyCode===c.RIGHT)this.selectedIndex=this.getNextSelectable(),this.update(),a.preventDefault();else if(a.keyCode===c.TAB){var d=this.getNextSelectable();d!==this.selectedIndex&&(this.selectedIndex=d,this.update(),a.preventDefault())}else if(a.keyCode===c.UP){var e=this.dateParts[this.selectedIndex].increment(this.curDate);this.update(e),a.preventDefault()}else if(a.keyCode===c.DOWN){var e=this.dateParts[this.selectedIndex].decrement(this.curDate);this.update(e),a.preventDefault()}else a.preventDefault();var f=this.keyMap[a.keyCode];if(a.keyCode===c.BACKSPACE?this.backspace():void 0!==f?this.textBuffer+=f:a.shiftKey||(this.textBuffer=""),this.textBuffer.length>0){var g=(this.curDate.valueOf(),this.dateParts[this.selectedIndex].getDateFromString(this.curDate,this.textBuffer));void 0!==g&&void 0!==this.dateParts[this.selectedIndex].getMaxBufferSize(g)&&this.textBuffer.length>=this.dateParts[this.selectedIndex].getMaxBufferSize(g)&&(this.selectedIndex=this.getNextSelectable()),void 0===g?this.textBuffer=this.textBuffer.slice(0,this.textBuffer.length-1):this.update(g)}}},a.prototype.backspace=function(){if(this.textBuffer.length<2){var a=this.curDate.valueOf(),b=this.dateParts[this.selectedIndex].getDateFromString(this.curDate,"ZERO_OUT");b.valueOf()!==a&&this.update(b)}this.textBuffer=this.textBuffer.slice(0,this.textBuffer.length-1)},a.prototype.getPreviousSelectable=function(){for(var a=this.selectedIndex;--a>=0;)if(this.dateParts[a].isSelectable())return a;return this.selectedIndex},a.prototype.getNextSelectable=function(){for(var a=this.selectedIndex;++a<this.dateParts.length;)if(this.dateParts[a].isSelectable())return a;return this.selectedIndex},a.prototype.mousedown=function(a){var b=this;2!==a.button&&(this.element.setSelectionRange(void 0,void 0),setTimeout(function(){b.downSelectionStart=b.element.selectionStart}))},a.prototype.getNearestSelectableIndex=function(a){for(var b,c,d=0,e=0;e<this.dateParts.length;e++){if(this.dateParts[e].isSelectable()){var f=a-d,g=a-(d+this.dateParts[e].toString().length);if(f>0&&0>g)return e;var h=Math.min(Math.abs(f),Math.abs(g));(void 0==b||c>=h)&&(b=e,c=h)}d+=this.dateParts[e].toString().length}return b},a.prototype.focus=function(){var a=this;this.tabDown?(this.selectedIndex=this.getFirstSelectable(),setTimeout(function(){a.update()})):this.shiftTabDown&&(this.selectedIndex=this.getLastSelectable(),setTimeout(function(){a.update()}))},a.prototype.blur=function(){this.element.setSelectionRange(void 0,void 0)},a.prototype.getFirstSelectable=function(){for(var a=0;a<this.dateParts.length;a++)if(this.dateParts[a].isSelectable())return a},a.prototype.getLastSelectable=function(){for(var a=this.dateParts.length-1;a>=0;a--)if(this.dateParts[a].isSelectable())return a},a.prototype.update=function(a){void 0===a&&(a=this.curDate),this.selectedIndex!==this.lastSelectedIndex&&(this.textBuffer=""),this.lastSelectedIndex=this.selectedIndex,this.curDate=new Date(a.valueOf());var b="";this.dateParts.forEach(function(c){b+=c.setValue(a).toString()}),this.element.value=b,this.updateSelection()},a.prototype.updateSelection=function(){if(void 0!==this.selectedIndex&&document.activeElement===this.element){for(var a=0,b=0;b<this.selectedIndex;b++)a+=this.dateParts[b].toString().length;var c=a+this.dateParts[this.selectedIndex].toString().length;this.element.setSelectionRange(a,c)}},a}(),a("default",d)}}}),a.register("1",["5"],function(a){var b,c;return{setters:[function(a){b=a}],execute:function(){c=function(){function a(a){new b["default"](a.element,a.displayFormat)}return a}(),window.Datium=c}}})})(function(a){a()});