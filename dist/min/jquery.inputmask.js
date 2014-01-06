/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.4.15
*/
(function(d){if(void 0===d.fn.inputmask){var L=function(d){var c=document.createElement("input");d="on"+d;var a=d in c;a||(c.setAttribute(d,"return;"),a="function"==typeof c[d]);return a},J=function(e,c,a){return(e=a.aliases[e])?(e.alias&&J(e.alias,void 0,a),d.extend(!0,a,e),d.extend(!0,a,c),!0):!1},M=function(e){function c(a){e.numericInput&&(a=a.split("").reverse().join(""));var b=!1,g=0,c=e.greedy,s=e.repeat;"*"==s&&(c=!1);1==a.length&&!1==c&&0!=s&&(e.placeholder="");a=d.map(a.split(""),function(a,
d){var c=[];if(a==e.escapeChar)b=!0;else if(a!=e.optionalmarker.start&&a!=e.optionalmarker.end||b){var n=e.definitions[a];if(n&&!b)for(var l=0;l<n.cardinality;l++)c.push(e.placeholder.charAt((g+l)%e.placeholder.length));else c.push(a),b=!1;g+=c.length;return c}});for(var n=a.slice(),l=1;l<s&&c;l++)n=n.concat(a.slice());return{mask:n,repeat:s,greedy:c}}function a(a){e.numericInput&&(a=a.split("").reverse().join(""));var b=!1,g=!1,c=!1;return d.map(a.split(""),function(a,d){var l=[];if(a==e.escapeChar)g=
!0;else{if(a!=e.optionalmarker.start||g){if(a!=e.optionalmarker.end||g){var f=e.definitions[a];if(f&&!g){for(var p=f.prevalidator,y=p?p.length:0,z=1;z<f.cardinality;z++){var C=y>=z?p[z-1]:[],H=C.validator,C=C.cardinality;l.push({fn:H?"string"==typeof H?RegExp(H):new function(){this.test=H}:/./,cardinality:C?C:1,optionality:b,newBlockMarker:!0==b?c:!1,offset:0,casing:f.casing,def:f.definitionSymbol||a});!0==b&&(c=!1)}l.push({fn:f.validator?"string"==typeof f.validator?RegExp(f.validator):new function(){this.test=
f.validator}:/./,cardinality:f.cardinality,optionality:b,newBlockMarker:c,offset:0,casing:f.casing,def:f.definitionSymbol||a})}else l.push({fn:null,cardinality:0,optionality:b,newBlockMarker:c,offset:0,casing:null,def:a}),g=!1;c=!1;return l}b=!1}else b=!0;c=!0}})}function b(a){for(var b=a.length,d=0;d<b&&a.charAt(d)!=e.optionalmarker.start;d++);var g=[a.substring(0,d)];d<b&&g.push(a.substring(d+1,b));return g}function f(y,h,w){for(var m=0,s=0,n=h.length,l=0;l<n&&!(h.charAt(l)==e.optionalmarker.start&&
m++,h.charAt(l)==e.optionalmarker.end&&s++,0<m&&m==s);l++);m=[h.substring(0,l)];l<n&&m.push(h.substring(l+1,n));l=b(m[0]);1<l.length?(h=y+l[0]+(e.optionalmarker.start+l[1]+e.optionalmarker.end)+(1<m.length?m[1]:""),-1==d.inArray(h,g)&&""!=h&&(g.push(h),n=c(h),p.push({mask:h,_buffer:n.mask,buffer:n.mask.slice(),tests:a(h),lastValidPosition:-1,greedy:n.greedy,repeat:n.repeat,metadata:w})),h=y+l[0]+(1<m.length?m[1]:""),-1==d.inArray(h,g)&&""!=h&&(g.push(h),n=c(h),p.push({mask:h,_buffer:n.mask,buffer:n.mask.slice(),
tests:a(h),lastValidPosition:-1,greedy:n.greedy,repeat:n.repeat,metadata:w})),1<b(l[1]).length&&f(y+l[0],l[1]+m[1],w),1<m.length&&1<b(m[1]).length&&(f(y+l[0]+(e.optionalmarker.start+l[1]+e.optionalmarker.end),m[1],w),f(y+l[0],m[1],w))):(h=y+m,-1==d.inArray(h,g)&&""!=h&&(g.push(h),n=c(h),p.push({mask:h,_buffer:n.mask,buffer:n.mask.slice(),tests:a(h),lastValidPosition:-1,greedy:n.greedy,repeat:n.repeat,metadata:w})))}var p=[],g=[];d.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));d.isArray(e.mask)?
d.each(e.mask,function(a,d){void 0!=d.mask?f("",d.mask.toString(),d):f("",d.toString())}):f("",e.mask.toString());return e.greedy?p:p.sort(function(a,d){return a.mask.length-d.mask.length})},T=null!==navigator.userAgent.match(/msie 10/i),ea=null!==navigator.userAgent.match(/iphone/i),U=null!==navigator.userAgent.match(/android.*safari.*/i),X=null!==navigator.userAgent.match(/android.*chrome.*/i),fa=L("paste")&&!T?"paste":L("input")?"input":"propertychange",A=function(e,c,a){function b(){return e[c]}
function f(){return b().tests}function p(){return b()._buffer}function g(){return b().buffer}function y(q,t,v){function f(d,b,q,t){for(var g=m(d),e=q?1:0,R="",aa=b.buffer,k=b.tests[g].cardinality;k>e;k--)R+=G(aa,g-(k-1));q&&(R+=q);return null!=b.tests[g].fn?b.tests[g].fn.test(R,aa,d,t,a):q==G(b._buffer,d,!0)||q==a.skipOptionalPartCharacter?{refresh:!0,c:G(b._buffer,d,!0),pos:d}:!1}if(v=!0===v){var p=f(q,b(),t,v);!0===p&&(p={pos:q});return p}var h=[],p=!1,y=c,u=g().slice(),r=b().lastValidPosition;
l(q);var z=[];d.each(e,function(a,d){if("object"==typeof d){c=a;var e=q,l=b().lastValidPosition,m;if(l==r){if(1<e-r)for(l=-1==l?0:l;l<e&&(m=f(l,b(),u[l],!0),!1!==m);l++)F(g(),l,u[l],!0),!0===m&&(m={pos:l}),m=m.pos||l,b().lastValidPosition<m&&(b().lastValidPosition=m);if(!w(e)&&!f(e,b(),t,v)){l=n(e)-e;for(m=0;m<l&&!1===f(++e,b(),t,v);m++);z.push(c)}}(b().lastValidPosition>=r||c==y)&&0<=e&&e<s()&&(p=f(e,b(),t,v),!1!==p&&(!0===p&&(p={pos:e}),m=p.pos||e,b().lastValidPosition<m&&(b().lastValidPosition=
m)),h.push({activeMasksetIndex:a,result:p}))}});c=y;return function(a,b){var g=!1;d.each(b,function(b,q){if(g=-1==d.inArray(q.activeMasksetIndex,a)&&!1!==q.result)return!1});if(g)b=d.map(b,function(b,q){if(-1==d.inArray(b.activeMasksetIndex,a))return b;e[b.activeMasksetIndex].lastValidPosition=r});else{var v=-1,c=-1,l;d.each(b,function(b,q){-1!=d.inArray(q.activeMasksetIndex,a)&&!1!==q.result&(-1==v||v>q.result.pos)&&(v=q.result.pos,c=q.activeMasksetIndex)});b=d.map(b,function(b,g){if(-1!=d.inArray(b.activeMasksetIndex,
a)){if(b.result.pos==v)return b;if(!1!==b.result){for(var k=q;k<v;k++)if(l=f(k,e[b.activeMasksetIndex],e[c].buffer[k],!0),!1===l){e[b.activeMasksetIndex].lastValidPosition=v-1;break}else F(e[b.activeMasksetIndex].buffer,k,e[c].buffer[k],!0),e[b.activeMasksetIndex].lastValidPosition=k;l=f(v,e[b.activeMasksetIndex],t,!0);!1!==l&&(F(e[b.activeMasksetIndex].buffer,v,t,!0),e[b.activeMasksetIndex].lastValidPosition=v);return b}}})}return b}(z,h)}function h(){var a=c,t={activeMasksetIndex:0,lastValidPosition:-1,
next:-1};d.each(e,function(a,d){"object"==typeof d&&(c=a,b().lastValidPosition>t.lastValidPosition?(t.activeMasksetIndex=a,t.lastValidPosition=b().lastValidPosition,t.next=n(b().lastValidPosition)):b().lastValidPosition==t.lastValidPosition&&(-1==t.next||t.next>n(b().lastValidPosition))&&(t.activeMasksetIndex=a,t.lastValidPosition=b().lastValidPosition,t.next=n(b().lastValidPosition)))});c=-1!=t.lastValidPosition&&e[a].lastValidPosition==t.lastValidPosition?a:t.activeMasksetIndex;a!=c&&(C(g(),n(t.lastValidPosition),
s()),b().writeOutBuffer=!0);u.data("_inputmask").activeMasksetIndex=c}function w(a){a=m(a);a=f()[a];return void 0!=a?a.fn:!1}function m(a){return a%f().length}function s(){return a.getMaskLength(p(),b().greedy,b().repeat,g(),a)}function n(a){var b=s();if(a>=b)return b;for(;++a<b&&!w(a););return a}function l(a){if(0>=a)return 0;for(;0<--a&&!w(a););return a}function F(a,b,d,e){e&&(b=A(a,b));e=f()[m(b)];var g=d;if(void 0!=g&&void 0!=e)switch(e.casing){case "upper":g=d.toUpperCase();break;case "lower":g=
d.toLowerCase()}a[b]=g}function G(a,b,d){d&&(b=A(a,b));return a[b]}function A(a,b){for(var d;void 0==a[b]&&a.length<s();)for(d=0;void 0!==p()[d];)a.push(p()[d++]);return b}function z(a,b,d){a._valueSet(b.join(""));void 0!=d&&r(a,d)}function C(a,b,d,e){for(var g=s();b<d&&b<g;b++)!0===e?w(b)||F(a,b,""):F(a,b,G(p().slice(),b,!0))}function H(a,b){var d=m(b);F(a,b,G(p(),d))}function O(b){return a.placeholder.charAt(b%a.placeholder.length)}function P(a,g,f,m,h){m=void 0!=m?m.slice():M(a._valueGet()).split("");
d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=-1)});!0!==f&&(c=0);g&&a._valueSet("");s();d.each(m,function(e,c){if(!0===h){var m=b().p,m=-1==m?m:l(m),s=-1==m?e:n(m);-1==d.inArray(c,p().slice(m+1,s))&&d(a).trigger("_keypress",[!0,c.charCodeAt(0),g,f,e])}else d(a).trigger("_keypress",[!0,c.charCodeAt(0),g,f,e])});!0===f&&-1!=b().p&&(b().lastValidPosition=l(b().p))}function J(a){return d.inputmask.escapeRegex.call(this,a)}function M(a){return a.replace(RegExp("("+
J(p().join(""))+")*$"),"")}function W(a){var b=g(),d=b.slice(),e,c;for(c=d.length-1;0<=c;c--)if(e=m(c),f()[e].optionality)if(w(c)&&y(c,b[c],!0))break;else d.pop();else break;z(a,d)}function L(b,e){if(!f()||!0!==e&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var c=d.map(g(),function(a,b){return w(b)&&y(b,a,!0)?a:null}),c=(B?c.reverse():c).join("");return void 0!=a.onUnMask?a.onUnMask.call(this,g().join(""),c):c}function I(b){!B||"number"!=typeof b||a.greedy&&""==a.placeholder||(b=g().length-
b);return b}function r(b,e,g){var c=b.jquery&&0<b.length?b[0]:b;if("number"==typeof e)e=I(e),g=I(g),d(b).is(":visible")&&(g="number"==typeof g?g:e,c.scrollLeft=c.scrollWidth,!1==a.insertMode&&e==g&&g++,c.setSelectionRange?(c.selectionStart=e,c.selectionEnd=U?e:g):c.createTextRange&&(b=c.createTextRange(),b.collapse(!0),b.moveEnd("character",g),b.moveStart("character",e),b.select()));else{if(!d(b).is(":visible"))return{begin:0,end:0};c.setSelectionRange?(e=c.selectionStart,g=c.selectionEnd):document.selection&&
document.selection.createRange&&(b=document.selection.createRange(),e=0-b.duplicate().moveStart("character",-1E5),g=e+b.text.length);e=I(e);g=I(g);return{begin:e,end:g}}}function S(b){if("*"!=a.repeat){var g=!1,f=0,n=c;d.each(e,function(a,d){if("object"==typeof d){c=a;var e=l(s());if(d.lastValidPosition>=f&&d.lastValidPosition==e){for(var n=!0,h=0;h<=e;h++){var r=w(h),y=m(h);if(r&&(void 0==b[h]||b[h]==O(h))||!r&&b[h]!=p()[y]){n=!1;break}}if(g=g||n)return!1}f=d.lastValidPosition}});c=n;return g}}function T(q){function t(a){a=
d._data(a).events;d.each(a,function(a,b){d.each(b,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type&&"_keypress"!=b.type){var d=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;else return d.apply(this,arguments)}}})})}function v(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get){if(!a._valueGet){var e=b.get,g=b.set;a._valueGet=function(){return B?e.call(this).split("").reverse().join(""):e.call(this)};
a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=d(this),b=d(this).data("_inputmask"),g=b.masksets,c=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):e.call(this)!=g[c]._buffer.join("")?e.call(this):""},set:function(a){g.call(this,a);d(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(e=a.__lookupGetter__("value"),g=a.__lookupSetter__("value"),
a._valueGet=function(){return B?e.call(this).split("").reverse().join(""):e.call(this)},a._valueSet=function(a){g.call(this,B?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=d(this),b=d(this).data("_inputmask"),g=b.masksets,c=b.activeMasksetIndex;return b&&b.opts.autoUnmask?a.inputmask("unmaskedvalue"):e.call(this)!=g[c]._buffer.join("")?e.call(this):""}),a.__defineSetter__("value",function(a){g.call(this,a);d(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||
(a._valueGet=function(){return B?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=B?a.split("").reverse().join(""):a}),void 0==d.valHooks.text||!0!=d.valHooks.text.inputmaskpatch)e=d.valHooks.text&&d.valHooks.text.get?d.valHooks.text.get:function(a){return a.value},g=d.valHooks.text&&d.valHooks.text.set?d.valHooks.text.set:function(a,b){a.value=b;return a},jQuery.extend(d.valHooks,{text:{get:function(a){var b=d(a);if(b.data("_inputmask")){if(b.data("_inputmask").opts.autoUnmask)return b.inputmask("unmaskedvalue");
a=e(a);b=b.data("_inputmask");return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return e(a)},set:function(a,b){var e=d(a),c=g(a,b);e.data("_inputmask")&&e.triggerHandler("setvalue.inputmask");return c},inputmaskpatch:!0}})}function A(a,d,e,c){var h=g();if(!1!==c)for(;!w(a)&&0<=a-1;)a--;for(c=a;c<d&&c<s();c++)if(w(c)){H(h,c);var q=n(c),r=G(h,q);if(r!=O(q))if(q<s()&&!1!==y(c,r,!0)&&f()[m(c)].def==f()[m(q)].def)F(h,c,r,!0);else if(w(c))break}else H(h,c);void 0!=e&&F(h,l(d),e);if(!1==b().greedy){d=
M(h.join("")).split("");h.length=d.length;c=0;for(e=h.length;c<e;c++)h[c]=d[c];0==h.length&&(b().buffer=p().slice())}return a}function J(a,d,e){var c=g();if(G(c,a,!0)!=O(a))for(var h=l(d);h>a&&0<=h;h--)if(w(h)){var n=l(h),q=G(c,n);q!=O(n)&&!1!==y(n,q,!0)&&f()[m(h)].def==f()[m(n)].def&&(F(c,h,q,!0),H(c,n))}else H(c,h);void 0!=e&&G(c,a)==O(a)&&F(c,a,e);a=c.length;if(!1==b().greedy){e=M(c.join("")).split("");c.length=e.length;h=0;for(n=c.length;h<n;h++)c[h]=e[h];0==c.length&&(b().buffer=p().slice())}return d-
(a-c.length)}function L(d,c,k){if(a.numericInput||B){switch(c){case a.keyCode.BACKSPACE:c=a.keyCode.DELETE;break;case a.keyCode.DELETE:c=a.keyCode.BACKSPACE}if(B){var h=k.end;k.end=k.begin;k.begin=h}}h=!0;k.begin==k.end?(h=c==a.keyCode.BACKSPACE?k.begin-1:k.begin,a.isNumeric&&""!=a.radixPoint&&g()[h]==a.radixPoint&&(k.begin=g().length-1==h?k.begin:c==a.keyCode.BACKSPACE?h:n(h),k.end=k.begin),h=!1,c==a.keyCode.BACKSPACE?k.begin--:c==a.keyCode.DELETE&&k.end++):1!=k.end-k.begin||a.insertMode||(h=!1,
c==a.keyCode.BACKSPACE&&k.begin--);C(g(),k.begin,k.end);var f=s();if(!1==a.greedy)A(k.begin,f,void 0,!B&&c==a.keyCode.BACKSPACE&&!h);else{for(var l=k.begin,m=k.begin;m<k.end;m++)if(w(m)||!h)l=A(k.begin,f,void 0,!B&&c==a.keyCode.BACKSPACE&&!h);h||(k.begin=l)}c=n(-1);C(g(),k.begin,k.end,!0);P(d,!1,void 0==e[1]||c>=k.end,g());b().lastValidPosition<c?(b().lastValidPosition=-1,b().p=c):b().p=k.begin}function ba(e){V=!1;var c=this,k=d(c),f=e.keyCode,l=r(c);f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||ea&&
127==f||e.ctrlKey&&88==f?(e.preventDefault(),88==f&&(K=g().join("")),L(c,f,l),h(),z(c,g(),b().p),c._valueGet()==p().join("")&&k.trigger("cleared"),a.showTooltip&&k.prop("title",b().mask)):f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=n(b().lastValidPosition);a.insertMode||d!=s()||e.shiftKey||d--;r(c,e.shiftKey?l.begin:d,d)},0):f==a.keyCode.HOME&&!e.shiftKey||f==a.keyCode.PAGE_UP?r(c,0,e.shiftKey?l.begin:0):f==a.keyCode.ESCAPE||90==f&&e.ctrlKey?(P(c,!0,!1,K.split("")),k.click()):
f!=a.keyCode.INSERT||e.shiftKey||e.ctrlKey?!1!=a.insertMode||e.shiftKey||(f==a.keyCode.RIGHT?setTimeout(function(){var a=r(c);r(c,a.begin)},0):f==a.keyCode.LEFT&&setTimeout(function(){var a=r(c);r(c,a.begin-1)},0)):(a.insertMode=!a.insertMode,r(c,a.insertMode||l.begin!=s()?l.begin:l.begin-1));k=r(c);!0===a.onKeyDown.call(this,e,g(),a)&&r(c,k.begin,k.end);Y=-1!=d.inArray(f,a.ignorables)}function ca(f,m,k,q,p,t){if(void 0==k&&V)return!1;V=!0;var u=d(this);f=f||window.event;k=k||f.which||f.charCode||
f.keyCode;if((!f.ctrlKey||!f.altKey)&&(f.ctrlKey||f.metaKey||Y)&&!0!==m)return!0;if(k){!0!==m&&46==k&&!1==f.shiftKey&&","==a.radixPoint&&(k=44);var x,w,v=String.fromCharCode(k);m?(k=p?t:b().lastValidPosition+1,x={begin:k,end:k}):x=r(this);t=B?1<x.begin-x.end||1==x.begin-x.end&&a.insertMode:1<x.end-x.begin||1==x.end-x.begin&&a.insertMode;var A=c;t&&(c=A,d.each(e,function(a,d){"object"==typeof d&&(c=a,b().undoBuffer=g().join(""))}),L(this,a.keyCode.DELETE,x),a.insertMode||d.each(e,function(a,d){"object"==
typeof d&&(c=a,J(x.begin,s()),b().lastValidPosition=n(b().lastValidPosition))}),c=A);var C=g().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==m&&-1!=C&&(a.greedy&&x.begin<=C?(x.begin=l(x.begin),x.end=x.begin):v==a.radixPoint&&(x.begin=C,x.end=x.begin));var D=x.begin;k=y(D,v,p);!0===p&&(k=[{activeMasksetIndex:c,result:k}]);var E=-1;d.each(k,function(d,e){c=e.activeMasksetIndex;b().writeOutBuffer=!0;var f=e.result;if(!1!==f){var h=!1,k=g();!0!==f&&(h=f.refresh,D=void 0!=f.pos?f.pos:D,v=void 0!=f.c?
f.c:v);if(!0!==h){if(!0==a.insertMode){f=s();for(k=k.slice();G(k,f,!0)!=O(f)&&f>=D;)f=0==f?-1:l(f);f>=D?(J(D,s(),v),k=b().lastValidPosition,f=n(k),f!=s()&&k>=D&&G(g(),f,!0)!=O(f)&&(b().lastValidPosition=f)):b().writeOutBuffer=!1}else F(k,D,v,!0);if(-1==E||E>n(D))E=n(D)}else!p&&(k=D<s()?D+1:D,-1==E||E>k)&&(E=k);E>b().p&&(b().p=E)}});!0!==p&&(c=A,h());if(!1!==q&&(d.each(k,function(a,b){if(b.activeMasksetIndex==c)return w=b,!1}),void 0!=w)){var H=this;setTimeout(function(){a.onKeyValidation.call(H,w.result,
a)},0);if(b().writeOutBuffer&&!1!==w.result){var I=g();q=m?void 0:a.numericInput?D>C?l(E):v==a.radixPoint?E-1:l(E-1):E;z(this,I,q);!0!==m&&setTimeout(function(){!0===S(I)&&u.trigger("complete");Q=!0;u.trigger("input")},0)}else t&&(b().buffer=b().undoBuffer.split(""))}a.showTooltip&&u.prop("title",b().mask);f.preventDefault()}}function U(b){var e=d(this),c=b.keyCode,f=g();X&&c==a.keyCode.BACKSPACE&&da==this._valueGet()&&ba.call(this,b);a.onKeyUp.call(this,b,f,a);c==a.keyCode.TAB&&a.showMaskOnFocus&&
(e.hasClass("focus.inputmask")&&0==this._valueGet().length?(f=p().slice(),z(this,f),r(this,0),K=g().join("")):(z(this,f),f.join("")==p().join("")&&-1!=d.inArray(a.radixPoint,f)?(r(this,I(0)),e.click()):r(this,I(0),I(s()))))}u=d(q);if(u.is(":input")){u.data("_inputmask",{masksets:e,activeMasksetIndex:c,opts:a,isRTL:!1});a.showTooltip&&u.prop("title",b().mask);b().greedy=b().greedy?b().greedy:0==b().repeat;if(null!=u.attr("maxLength")){var N=u.prop("maxLength");-1<N&&d.each(e,function(a,b){"object"==
typeof b&&"*"==b.repeat&&(b.repeat=N)});s()>=N&&-1<N&&(N<p().length&&(p().length=N),!1==b().greedy&&(b().repeat=Math.round(N/p().length)),u.prop("maxLength",2*s()))}v(q);var V=!1,Q=!1,Y=!1;a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==q.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&u.css("text-align","right");if("rtl"==q.dir||a.numericInput){q.dir="ltr";u.removeAttr("dir");var Z=u.data("_inputmask");Z.isRTL=!0;u.data("_inputmask",Z);B=!0}u.unbind(".inputmask");
u.removeClass("focus.inputmask");u.closest("form").bind("submit",function(){K!=g().join("")&&u.change()}).bind("reset",function(){setTimeout(function(){u.trigger("setvalue")},0)});u.bind("mouseenter.inputmask",function(){!d(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=g().join("")&&z(this,g())}).bind("blur.inputmask",function(){var b=d(this),f=this._valueGet(),k=g();b.removeClass("focus.inputmask");K!=g().join("")&&b.change();a.clearMaskOnLostFocus&&""!=f&&(f==p().join("")?
this._valueSet(""):W(this));!1===S(k)&&(b.trigger("incomplete"),a.clearIncomplete&&(d.each(e,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1)}),c=0,a.clearMaskOnLostFocus?this._valueSet(""):(k=p().slice(),z(this,k))))}).bind("focus.inputmask",function(){var e=d(this),c=this._valueGet();a.showMaskOnFocus&&!e.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c)&&this._valueGet()!=g().join("")&&z(this,g(),n(b().lastValidPosition));e.addClass("focus.inputmask");
K=g().join("")}).bind("mouseleave.inputmask",function(){var b=d(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==b.attr("placeholder")||(this._valueGet()==p().join("")||""==this._valueGet()?this._valueSet(""):W(this)))}).bind("click.inputmask",function(){var e=this;setTimeout(function(){var c=r(e),f=g();if(c.begin==c.end){var c=a.isRTL?I(c.begin):c.begin,h=b().lastValidPosition,f=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=d.inArray(a.radixPoint,f)?a.numericInput?
n(d.inArray(a.radixPoint,f)):d.inArray(a.radixPoint,f):n(h):n(h);c<f?w(c)?r(e,c):r(e,n(c)):r(e,f)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){r(a,0,n(b().lastValidPosition))},0)}).bind(fa+".inputmask dragdrop.inputmask drop.inputmask",function(b){if(!0===Q)return Q=!1,!0;var c=this,e=d(c);if("propertychange"==b.type&&c._valueGet().length<=s())return!0;setTimeout(function(){var b=void 0!=a.onBeforePaste?a.onBeforePaste.call(this,c._valueGet()):c._valueGet();P(c,!0,
!1,b.split(""),!0);!0===S(g())&&e.trigger("complete");e.click()},0)}).bind("setvalue.inputmask",function(){P(this,!0);K=g().join("");this._valueGet()==p().join("")&&this._valueSet("")}).bind("_keypress.inputmask",ca).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared).bind("keyup.inputmask",U);X?u.bind("input.inputmask",function(a){if(!0===Q)return Q=!1,!0;a=d(this);da=g().join("");P(this,!1,!1);z(this,g());!0===S(g())&&a.trigger("complete");
a.click()}):u.bind("keydown.inputmask",ba).bind("keypress.inputmask",ca);P(q,!0,!1);K=g().join("");var $;try{$=document.activeElement}catch(ga){}$===q?(u.addClass("focus.inputmask"),r(q,n(b().lastValidPosition))):a.clearMaskOnLostFocus?g().join("")==p().join("")?q._valueSet(""):W(q):z(q,g());t(q)}}var B=!1,K=g().join(""),u,da;return{isComplete:function(a){return S(a)},unmaskedvalue:function(a,b){B=a.data("_inputmask").isRTL;return L(a,b)},mask:function(a){T(a)}}};d.inputmask={defaults:{placeholder:"_",
optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:d.noop,onincomplete:d.noop,oncleared:d.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:d.noop,onKeyDown:d.noop,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:d.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",
skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(e,c,a,b,d){d=e.length;c||("*"==a?d=b.length+1:1<a&&(d+=e.length*(a-1)));return d}},escapeRegex:function(d){return d.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(d,c){}};d.fn.inputmask=function(e,c){var a=d.extend(!0,{},d.inputmask.defaults,
c),b,f=0;if("string"===typeof e)switch(e){case "mask":return J(a.alias,c,a),b=M(a),0==b.length?this:this.each(function(){A(d.extend(!0,{},b),0,a).mask(this)});case "unmaskedvalue":var p=d(this);return p.data("_inputmask")?(b=p.data("_inputmask").masksets,f=p.data("_inputmask").activeMasksetIndex,a=p.data("_inputmask").opts,A(b,f,a).unmaskedvalue(p)):p.val();case "remove":return this.each(function(){var c=d(this);if(c.data("_inputmask")){b=c.data("_inputmask").masksets;f=c.data("_inputmask").activeMasksetIndex;
a=c.data("_inputmask").opts;this._valueSet(A(b,f,a).unmaskedvalue(c,!0));c.removeData("_inputmask");c.unbind(".inputmask");c.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(this,"value"));e&&e.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));
try{delete this._valueGet,delete this._valueSet}catch(h){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(b=this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,b[f]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return b=this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,a=this.data("_inputmask").opts,A(b,f,a).isComplete(this[0]._valueGet().split(""));
case "getmetadata":if(this.data("_inputmask"))return b=this.data("_inputmask").masksets,f=this.data("_inputmask").activeMasksetIndex,b[f].metadata;break;default:return J(e,c,a)||(a.mask=e),b=M(a),0==b.length?this:this.each(function(){A(d.extend(!0,{},b),f,a).mask(this)})}else{if("object"==typeof e)return a=d.extend(!0,{},d.inputmask.defaults,e),J(a.alias,e,a),b=M(a),0==b.length?this:this.each(function(){A(d.extend(!0,{},b),f,a).mask(this)});if(void 0==e)return this.each(function(){var b=d(this).attr("data-inputmask");
if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),e=d.parseJSON("{"+b+"}");d.extend(!0,e,c);a=d.extend(!0,{},d.inputmask.defaults,e);J(a.alias,e,a);a.alias=void 0;d(this).inputmask(a)}catch(f){}})}}}})(jQuery);
