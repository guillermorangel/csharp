/*!
* Note: While Microsoft is not the author of this script file, Microsoft
* grants you the right to use this file for the sole purpose of either: 
* (i) interacting through your browser with the Microsoft website, subject 
* to the website's terms of use; or (ii) using the files as included with a
* Microsoft product subject to the Microsoft Software License Terms for that
* Microsoft product. Microsoft reserves all other rights to the files not 
* expressly granted by Microsoft, whether by implication, estoppel or
* otherwise. The notices and licenses below are for informational purposes 
* only.
*
* Provided for Informational Purposes Only
* MIT License
*
* Permission is hereby granted, free of charge, to any person obtaining a
* copy of this software and associated documentation files (the "Software"),
* to deal in the Software without restriction, including without limitation
* the rights to use, copy, modify, merge, publish, distribute, sublicense, 
* and/or sell copies of the Software, and to permit persons to whom the 
* Software is furnished to do so, subject to the following conditions:
*
* The copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS 
* OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
* DEALINGS IN THE SOFTWARE.
*/
// Knockout JavaScript library v2.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){ 
function c(a){throw a;}var l=void 0,m=!0,o=null,p=!1,r=window.ko={};r.b=function(a,b){for(var d=a.split("."),e=window,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=b};r.l=function(a,b,d){a[b]=d};
r.a=new function(){function a(a,e){if("INPUT"!=a.tagName||!a.type)return p;if("click"!=e.toLowerCase())return p;var b=a.type.toLowerCase();return"checkbox"==b||"radio"==b}var b=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,d={},e={};d[/Firefox\/2/i.test(navigator.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave".split(",");for(var f in d){var h=d[f];if(h.length)for(var g=0,i=h.length;g<i;g++)e[h[g]]=
f}var j=function(){for(var a=3,e=document.createElement("div"),b=e.getElementsByTagName("i");e.innerHTML="<\!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",b[0];);return 4<a?a:l}();return{Ba:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,e){for(var b=0,f=a.length;b<f;b++)e(a[b])},k:function(a,e){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,e);for(var b=0,f=a.length;b<f;b++)if(a[b]===e)return b;return-1},Wa:function(a,e,b){for(var f=0,d=
a.length;f<d;f++)if(e.call(b,a[f]))return a[f];return o},ca:function(a,e){var b=r.a.k(a,e);0<=b&&a.splice(b,1)},ya:function(a){for(var a=a||[],e=[],b=0,f=a.length;b<f;b++)0>r.a.k(e,a[b])&&e.push(a[b]);return e},ba:function(a,e){for(var a=a||[],b=[],f=0,d=a.length;f<d;f++)b.push(e(a[f]));return b},aa:function(a,e){for(var a=a||[],b=[],f=0,d=a.length;f<d;f++)e(a[f])&&b.push(a[f]);return b},J:function(a,e){for(var b=0,f=e.length;b<f;b++)a.push(e[b]);return a},extend:function(a,e){for(var b in e)e.hasOwnProperty(b)&&
(a[b]=e[b]);return a},U:function(a){for(;a.firstChild;)r.removeNode(a.firstChild)},oa:function(a,e){r.a.U(a);e&&r.a.n(e,function(e){a.appendChild(e)})},Ja:function(a,e){var b=a.nodeType?[a]:a;if(0<b.length){for(var f=b[0],d=f.parentNode,h=0,g=e.length;h<g;h++)d.insertBefore(e[h],f);h=0;for(g=b.length;h<g;h++)r.removeNode(b[h])}},La:function(a,e){0<=navigator.userAgent.indexOf("MSIE 6")?a.setAttribute("selected",e):a.selected=e},z:function(a){return(a||"").replace(b,"")},Db:function(a,e){for(var b=
[],f=(a||"").split(e),d=0,h=f.length;d<h;d++){var g=r.a.z(f[d]);""!==g&&b.push(g)}return b},Cb:function(a,e){a=a||"";return e.length>a.length?p:a.substring(0,e.length)===e},hb:function(a){for(var e=Array.prototype.slice.call(arguments,1),b="return ("+a+")",f=0;f<e.length;f++)e[f]&&"object"==typeof e[f]&&(b="with(sc["+f+"]) { "+b+" } ");return(new Function("sc",b))(e)},fb:function(a,e){if(e.compareDocumentPosition)return 16==(e.compareDocumentPosition(a)&16);for(;a!=o;){if(a==e)return m;a=a.parentNode}return p},
ga:function(a){return r.a.fb(a,document)},s:function(e,b,f){if("undefined"!=typeof jQuery){if(a(e,b))var d=f,f=function(a,e){var b=this.checked;if(e)this.checked=e.Ya!==m;d.call(this,a);this.checked=b};jQuery(e).bind(b,f)}else"function"==typeof e.addEventListener?e.addEventListener(b,f,p):"undefined"!=typeof e.attachEvent?e.attachEvent("on"+b,function(a){f.call(e,a)}):c(Error("Browser doesn't support addEventListener or attachEvent"))},sa:function(b,f){(!b||!b.nodeType)&&c(Error("element must be a DOM node when calling triggerEvent"));
if("undefined"!=typeof jQuery){var d=[];a(b,f)&&d.push({Ya:b.checked});jQuery(b).trigger(f,d)}else if("function"==typeof document.createEvent)"function"==typeof b.dispatchEvent?(d=document.createEvent(e[f]||"HTMLEvents"),d.initEvent(f,m,m,window,0,0,0,0,0,p,p,p,p,0,b),b.dispatchEvent(d)):c(Error("The supplied element doesn't support dispatchEvent"));else if("undefined"!=typeof b.fireEvent){if("click"==f&&"INPUT"==b.tagName&&("checkbox"==b.type.toLowerCase()||"radio"==b.type.toLowerCase()))b.checked=
b.checked!==m;b.fireEvent("on"+f)}else c(Error("Browser doesn't support triggering events"))},d:function(a){return r.V(a)?a():a},eb:function(a,e){return 0<=r.a.k((a.className||"").split(/\s+/),e)},Qa:function(a,e,b){var f=r.a.eb(a,e);if(b&&!f)a.className=(a.className||"")+" "+e;else if(f&&!b){for(var b=(a.className||"").split(/\s+/),f="",d=0;d<b.length;d++)b[d]!=e&&(f+=b[d]+" ");a.className=r.a.z(f)}},outerHTML:function(a){if(j===l){var e=a.outerHTML;if("string"==typeof e)return e}e=window.document.createElement("div");
e.appendChild(a.cloneNode(m));return e.innerHTML},Ma:function(a,e){var b=r.a.d(e);if(b===o||b===l)b="";"innerText"in a?a.innerText=b:a.textContent=b;if(9<=j)a.innerHTML=a.innerHTML},yb:function(a,e){for(var a=r.a.d(a),e=r.a.d(e),b=[],f=a;f<=e;f++)b.push(f);return b},X:function(a){for(var e=[],b=0,f=a.length;b<f;b++)e.push(a[b]);return e},ob:6===j,pb:7===j,Ca:function(a,e){for(var b=r.a.X(a.getElementsByTagName("INPUT")).concat(r.a.X(a.getElementsByTagName("TEXTAREA"))),f="string"==typeof e?function(a){return a.name===
e}:function(a){return e.test(a.name)},d=[],h=b.length-1;0<=h;h--)f(b[h])&&d.push(b[h]);return d},vb:function(a){return"string"==typeof a&&(a=r.a.z(a))?window.JSON&&window.JSON.parse?window.JSON.parse(a):(new Function("return "+a))():o},qa:function(a){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&c(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(r.a.d(a))},wb:function(a,e,b){var b=b||{},f=b.params||{},d=b.includeFields||this.Ba,h=a;if("object"==typeof a&&"FORM"==a.tagName)for(var h=a.action,g=d.length-1;0<=g;g--)for(var j=r.a.Ca(a,d[g]),i=j.length-1;0<=i;i--)f[j[i].name]=j[i].value;var e=r.a.d(e),u=document.createElement("FORM");u.style.display="none";u.action=h;u.method="post";for(var y in e)a=document.createElement("INPUT"),a.name=y,a.value=r.a.qa(r.a.d(e[y])),u.appendChild(a);for(y in f)a=document.createElement("INPUT"),
a.name=y,a.value=f[y],u.appendChild(a);document.body.appendChild(u);b.submitter?b.submitter(u):u.submit();setTimeout(function(){u.parentNode.removeChild(u)},0)}}};r.b("ko.utils",r.a);
r.a.n([["arrayForEach",r.a.n],["arrayFirst",r.a.Wa],["arrayFilter",r.a.aa],["arrayGetDistinctValues",r.a.ya],["arrayIndexOf",r.a.k],["arrayMap",r.a.ba],["arrayPushAll",r.a.J],["arrayRemoveItem",r.a.ca],["extend",r.a.extend],["fieldsIncludedWithJsonPost",r.a.Ba],["getFormFields",r.a.Ca],["postJson",r.a.wb],["parseJson",r.a.vb],["registerEventHandler",r.a.s],["stringifyJson",r.a.qa],["range",r.a.yb],["toggleDomNodeCssClass",r.a.Qa],["triggerEvent",r.a.sa],["unwrapObservable",r.a.d]],function(a){r.b("ko.utils."+
a[0],a[1])});Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,d=Array.prototype.slice.call(arguments),a=d.shift();return function(){return b.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});
r.a.e=new function(){var a=0,b="__ko__"+(new Date).getTime(),d={};return{get:function(a,b){var d=r.a.e.getAll(a,p);return d===l?l:d[b]},set:function(a,b,d){d===l&&r.a.e.getAll(a,p)===l||(r.a.e.getAll(a,m)[b]=d)},getAll:function(e,f){var h=e[b];if(!(h&&"null"!==h)){if(!f)return;h=e[b]="ko"+a++;d[h]={}}return d[h]},clear:function(a){var f=a[b];f&&(delete d[f],a[b]=o)}}};r.b("ko.utils.domData",r.a.e);r.b("ko.utils.domData.clear",r.a.e.clear);
r.a.A=new function(){function a(a,b){var h=r.a.e.get(a,d);h===l&&b&&(h=[],r.a.e.set(a,d,h));return h}function b(e){var b=a(e,p);if(b)for(var b=b.slice(0),d=0;d<b.length;d++)b[d](e);r.a.e.clear(e);"function"==typeof jQuery&&"function"==typeof jQuery.cleanData&&jQuery.cleanData([e])}var d="__ko_domNodeDisposal__"+(new Date).getTime();return{va:function(e,b){"function"!=typeof b&&c(Error("Callback must be a function"));a(e,m).push(b)},Ia:function(e,b){var h=a(e,p);h&&(r.a.ca(h,b),0==h.length&&r.a.e.set(e,
d,l))},F:function(a){if(!(1!=a.nodeType&&9!=a.nodeType)){b(a);var f=[];r.a.J(f,a.getElementsByTagName("*"));for(var a=0,d=f.length;a<d;a++)b(f[a])}},removeNode:function(a){r.F(a);a.parentNode&&a.parentNode.removeChild(a)}}};r.F=r.a.A.F;r.removeNode=r.a.A.removeNode;r.b("ko.cleanNode",r.F);r.b("ko.removeNode",r.removeNode);r.b("ko.utils.domNodeDisposal",r.a.A);r.b("ko.utils.domNodeDisposal.addDisposeCallback",r.a.A.va);r.b("ko.utils.domNodeDisposal.removeDisposeCallback",r.a.A.Ia);
r.a.ma=function(a){var b;if("undefined"!=typeof jQuery){if((b=jQuery.clean([a]))&&b[0]){for(a=b[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var d=r.a.z(a).toLowerCase();b=document.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];a="ignored<div>"+
d[1]+a+d[2]+"</div>";for("function"==typeof window.innerShiv?b.appendChild(window.innerShiv(a)):b.innerHTML=a;d[0]--;)b=b.lastChild;b=r.a.X(b.lastChild.childNodes)}return b};r.a.Z=function(a,b){r.a.U(a);if(b!==o&&b!==l)if("string"!=typeof b&&(b=b.toString()),"undefined"!=typeof jQuery)jQuery(a).html(b);else for(var d=r.a.ma(b),e=0;e<d.length;e++)a.appendChild(d[e])};r.b("ko.utils.parseHtmlFragment",r.a.ma);r.b("ko.utils.setHtml",r.a.Z);
r.r=function(){function a(){return(4294967296*(1+Math.random())|0).toString(16).substring(1)}function b(a,f){if(a)if(8==a.nodeType){var d=r.r.Ga(a.nodeValue);d!=o&&f.push({cb:a,tb:d})}else if(1==a.nodeType)for(var d=0,g=a.childNodes,i=g.length;d<i;d++)b(g[d],f)}var d={};return{ka:function(b){"function"!=typeof b&&c(Error("You can only pass a function to ko.memoization.memoize()"));var f=a()+a();d[f]=b;return"<\!--[ko_memo:"+f+"]--\>"},Ra:function(a,b){var h=d[a];h===l&&c(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return h.apply(o,b||[]),m}finally{delete d[a]}},Sa:function(a,f){var d=[];b(a,d);for(var g=0,i=d.length;g<i;g++){var j=d[g].cb,k=[j];f&&r.a.J(k,f);r.r.Ra(d[g].tb,k);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},Ga:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:o}}}();r.b("ko.memoization",r.r);r.b("ko.memoization.memoize",r.r.ka);r.b("ko.memoization.unmemoize",r.r.Ra);r.b("ko.memoization.parseMemoText",r.r.Ga);
r.b("ko.memoization.unmemoizeDomNodeAndDescendants",r.r.Sa);r.Aa={throttle:function(a,b){a.throttleEvaluation=b;var d=o;return r.i({read:a,write:function(e){clearTimeout(d);d=setTimeout(function(){a(e)},b)}})},notify:function(a,b){a.equalityComparer="always"==b?function(){return p}:r.w.fn.equalityComparer;return a}};r.b("ko.extenders",r.Aa);r.Oa=function(a,b){this.da=a;this.bb=b;r.l(this,"dispose",this.v)};r.Oa.prototype.v=function(){this.nb=m;this.bb()};
r.R=function(){this.u={};r.a.extend(this,r.R.fn);r.l(this,"subscribe",this.ra);r.l(this,"extend",this.extend);r.l(this,"getSubscriptionsCount",this.kb)};
r.R.fn={ra:function(a,b,d){var d=d||"change",a=b?a.bind(b):a,e=new r.Oa(a,function(){r.a.ca(this.u[d],e)}.bind(this));this.u[d]||(this.u[d]=[]);this.u[d].push(e);return e},notifySubscribers:function(a,b){b=b||"change";this.u[b]&&r.a.n(this.u[b].slice(0),function(b){b&&b.nb!==m&&b.da(a)})},kb:function(){var a=0,b;for(b in this.u)this.u.hasOwnProperty(b)&&(a+=this.u[b].length);return a},extend:function(a){var b=this;if(a)for(var d in a){var e=r.Aa[d];"function"==typeof e&&(b=e(b,a[d]))}return b}};
r.Ea=function(a){return"function"==typeof a.ra&&"function"==typeof a.notifySubscribers};r.b("ko.subscribable",r.R);r.b("ko.isSubscribable",r.Ea);r.T=function(){var a=[];return{Xa:function(b){a.push({da:b,za:[]})},end:function(){a.pop()},Ha:function(b){r.Ea(b)||c("Only subscribable things can act as dependencies");if(0<a.length){var d=a[a.length-1];0<=r.a.k(d.za,b)||(d.za.push(b),d.da(b))}}}}();var B={undefined:m,"boolean":m,number:m,string:m};
r.w=function(a){function b(){if(0<arguments.length){if(!b.equalityComparer||!b.equalityComparer(d,arguments[0]))b.H(),d=arguments[0],b.G();return this}r.T.Ha(b);return d}var d=a;r.R.call(b);b.G=function(){b.notifySubscribers(d)};b.H=function(){b.notifySubscribers(d,"beforeChange")};r.a.extend(b,r.w.fn);r.l(b,"valueHasMutated",b.G);r.l(b,"valueWillMutate",b.H);return b};r.w.fn={B:r.w,equalityComparer:function(a,b){return a===o||typeof a in B?a===b:p}};
r.V=function(a){return a===o||a===l||a.B===l?p:a.B===r.w?m:r.V(a.B)};r.P=function(a){return"function"==typeof a&&a.B===r.w?m:"function"==typeof a&&a.B===r.i&&a.lb?m:p};r.b("ko.observable",r.w);r.b("ko.isObservable",r.V);r.b("ko.isWriteableObservable",r.P);
r.Q=function(a){0==arguments.length&&(a=[]);a!==o&&a!==l&&!("length"in a)&&c(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));var b=new r.w(a);r.a.extend(b,r.Q.fn);r.l(b,"remove",b.remove);r.l(b,"removeAll",b.zb);r.l(b,"destroy",b.fa);r.l(b,"destroyAll",b.ab);r.l(b,"indexOf",b.indexOf);r.l(b,"replace",b.replace);return b};
r.Q.fn={remove:function(a){for(var b=this(),d=[],e="function"==typeof a?a:function(b){return b===a},f=0;f<b.length;f++){var h=b[f];e(h)&&(0===d.length&&this.H(),d.push(h),b.splice(f,1),f--)}d.length&&this.G();return d},zb:function(a){if(a===l){var b=this(),d=b.slice(0);this.H();b.splice(0,b.length);this.G();return d}return!a?[]:this.remove(function(b){return 0<=r.a.k(a,b)})},fa:function(a){var b=this(),d="function"==typeof a?a:function(b){return b===a};this.H();for(var e=b.length-1;0<=e;e--)d(b[e])&&
(b[e]._destroy=m);this.G()},ab:function(a){return a===l?this.fa(function(){return m}):!a?[]:this.fa(function(b){return 0<=r.a.k(a,b)})},indexOf:function(a){var b=this();return r.a.k(b,a)},replace:function(a,b){var d=this.indexOf(a);0<=d&&(this.H(),this()[d]=b,this.G())}};r.a.n("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){r.Q.fn[a]=function(){var b=this();this.H();b=b[a].apply(b,arguments);this.G();return b}});
r.a.n(["slice"],function(a){r.Q.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});r.b("ko.observableArray",r.Q);function C(a,b){a&&"object"==typeof a?b=a:(b=b||{},b.read=a||b.read);"function"!=typeof b.read&&c("Pass a function that returns the value of the dependentObservable");return b}
r.i=function(a,b,d){function e(){r.a.n(q,function(a){a.v()});q=[]}function f(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(v),v=setTimeout(h,a)):h()}function h(){if(j&&"function"==typeof d.disposeWhen&&d.disposeWhen())g.v();else{try{e();r.T.Xa(function(a){q.push(a.ra(f))});var a=d.read.call(d.owner||b);g.notifySubscribers(i,"beforeChange");i=a}finally{r.T.end()}g.notifySubscribers(i);j=m}}function g(){if(0<arguments.length)"function"===typeof d.write?d.write.apply(d.owner||b,arguments):c("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
else return j||h(),r.T.Ha(g),i}var i,j=p,d=C(a,d),k="object"==typeof d.disposeWhenNodeIsRemoved?d.disposeWhenNodeIsRemoved:o,n=o;if(k){n=function(){g.v()};r.a.A.va(k,n);var t=d.disposeWhen;d.disposeWhen=function(){return!r.a.ga(k)||"function"==typeof t&&t()}}var q=[],v=o;g.jb=function(){return q.length};g.lb="function"===typeof d.write;g.v=function(){k&&r.a.A.Ia(k,n);e()};r.R.call(g);r.a.extend(g,r.i.fn);d.deferEvaluation!==m&&h();r.l(g,"dispose",g.v);r.l(g,"getDependenciesCount",g.jb);return g};
r.i.fn={B:r.i};r.i.B=r.w;r.b("ko.dependentObservable",r.i);r.b("ko.computed",r.i);
(function(){function a(e,f,h){h=h||new d;e=f(e);if(!("object"==typeof e&&e!==o&&e!==l&&!(e instanceof Date)))return e;var g=e instanceof Array?[]:{};h.save(e,g);b(e,function(b){var d=f(e[b]);switch(typeof d){case "boolean":case "number":case "string":case "function":g[b]=d;break;case "object":case "undefined":var k=h.get(d);g[b]=k!==l?k:a(d,f,h)}});return g}function b(a,b){if(a instanceof Array)for(var d=0;d<a.length;d++)b(d);else for(d in a)b(d)}function d(){var a=[],b=[];this.save=function(d,g){var i=
r.a.k(a,d);0<=i?b[i]=g:(a.push(d),b.push(g))};this.get=function(d){d=r.a.k(a,d);return 0<=d?b[d]:l}}r.Pa=function(b){0==arguments.length&&c(Error("When calling ko.toJS, pass the object you want to convert."));return a(b,function(a){for(var b=0;r.V(a)&&10>b;b++)a=a();return a})};r.toJSON=function(a){a=r.Pa(a);return r.a.qa(a)}})();r.b("ko.toJS",r.Pa);r.b("ko.toJSON",r.toJSON);
r.h={q:function(a){return"OPTION"==a.tagName?a.__ko__hasDomDataOptionValue__===m?r.a.e.get(a,r.c.options.la):a.getAttribute("value"):"SELECT"==a.tagName?0<=a.selectedIndex?r.h.q(a.options[a.selectedIndex]):l:a.value},S:function(a,b){if("OPTION"==a.tagName)switch(typeof b){case "string":r.a.e.set(a,r.c.options.la,l);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=b;break;default:r.a.e.set(a,r.c.options.la,b),a.__ko__hasDomDataOptionValue__=m,a.value="number"===typeof b?
b:""}else if("SELECT"==a.tagName)for(var d=a.options.length-1;0<=d;d--){if(r.h.q(a.options[d])==b){a.selectedIndex=d;break}}else{if(b===o||b===l)b="";a.value=b}}};r.b("ko.selectExtensions",r.h);r.b("ko.selectExtensions.readValue",r.h.q);r.b("ko.selectExtensions.writeValue",r.h.S);
r.j=function(){function a(a,e){for(var d=o;a!=d;)d=a,a=a.replace(b,function(a,b){return e[b]});return a}var b=/\@ko_token_(\d+)\@/g,d=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,e=["true","false"];return{D:[],Y:function(b){var e=r.a.z(b);if(3>e.length)return[];"{"===e.charAt(0)&&(e=e.substring(1,e.length-1));for(var b=[],d=o,i,j=0;j<e.length;j++){var k=e.charAt(j);if(d===o)switch(k){case '"':case "'":case "/":d=j,i=k}else if(k==i&&"\\"!==e.charAt(j-1)){k=e.substring(d,j+
1);b.push(k);var n="@ko_token_"+(b.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1),j=j-(k.length-n.length),d=o}}i=d=o;for(var t=0,q=o,j=0;j<e.length;j++){k=e.charAt(j);if(d===o)switch(k){case "{":d=j;q=k;i="}";break;case "(":d=j;q=k;i=")";break;case "[":d=j,q=k,i="]"}k===q?t++:k===i&&(t--,0===t&&(k=e.substring(d,j+1),b.push(k),n="@ko_token_"+(b.length-1)+"@",e=e.substring(0,d)+n+e.substring(j+1),j-=k.length-n.length,d=o))}i=[];e=e.split(",");d=0;for(j=e.length;d<j;d++)t=e[d],q=t.indexOf(":"),
0<q&&q<t.length-1?(k=t.substring(q+1),i.push({key:a(t.substring(0,q),b),value:a(k,b)})):i.push({unknown:a(t,b)});return i},ia:function(a){for(var b="string"===typeof a?r.j.Y(a):a,g=[],a=[],i,j=0;i=b[j];j++)if(0<g.length&&g.push(","),i.key){var k;a:{k=i.key;var n=r.a.z(k);switch(n.length&&n.charAt(0)){case "'":case '"':break a;default:k="'"+n+"'"}}i=i.value;g.push(k);g.push(":");g.push(i);n=r.a.z(i);if(0<=r.a.k(e,r.a.z(n).toLowerCase())?0:n.match(d)!==o)0<a.length&&a.push(", "),a.push(k+" : function(__ko_value) { "+
i+" = __ko_value; }")}else i.unknown&&g.push(i.unknown);b=g.join("");0<a.length&&(b=b+", '_ko_property_writers' : { "+a.join("")+" } ");return b},rb:function(a,b){for(var e=0;e<a.length;e++)if(r.a.z(a[e].key)==b)return m;return p}}}();r.b("ko.jsonExpressionRewriting",r.j);r.b("ko.jsonExpressionRewriting.bindingRewriteValidators",r.j.D);r.b("ko.jsonExpressionRewriting.parseObjectLiteral",r.j.Y);r.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",r.j.ia);
(function(){function a(a){return 8==a.nodeType&&(f?a.text:a.nodeValue).match(h)}function b(a){return 8==a.nodeType&&(f?a.text:a.nodeValue).match(g)}function d(e,d){for(var f=e,g=1,h=[];f=f.nextSibling;){if(b(f)&&(g--,0===g))return h;h.push(f);a(f)&&g++}d||c(Error("Cannot find closing comment tag to match: "+e.nodeValue));return o}function e(a,b){var e=d(a,b);return e?0<e.length?e[e.length-1].nextSibling:a.nextSibling:o}var f="<\!--test--\>"===document.createComment("test").text,h=f?/^<\!--\s*ko\s+(.*\:.*)\s*--\>$/:
/^\s*ko\s+(.*\:.*)\s*$/,g=f?/^<\!--\s*\/ko\s*--\>$/:/^\s*\/ko\s*$/,i={ul:m,ol:m};r.f={C:{},childNodes:function(b){return a(b)?d(b):b.childNodes},ha:function(b){if(a(b))for(var b=r.f.childNodes(b),e=0,d=b.length;e<d;e++)r.removeNode(b[e]);else r.a.U(b)},oa:function(b,e){if(a(b)){r.f.ha(b);for(var d=b.nextSibling,f=0,g=e.length;f<g;f++)d.parentNode.insertBefore(e[f],d)}else r.a.oa(b,e)},xb:function(b,e){a(b)?b.parentNode.insertBefore(e,b.nextSibling):b.firstChild?b.insertBefore(e,b.firstChild):b.appendChild(e)},
mb:function(b,e,d){a(b)?b.parentNode.insertBefore(e,d.nextSibling):d.nextSibling?b.insertBefore(e,d.nextSibling):b.appendChild(e)},nextSibling:function(d){return a(d)?e(d).nextSibling:d.nextSibling&&b(d.nextSibling)?l:d.nextSibling},ta:function(b){return(b=a(b))?b[1]:o},ib:function(a){if(r.f.ta(a)){var b;b=r.f.childNodes(a);for(var e=[],d=0,f=b.length;d<f;d++)r.a.A.F(b[d]),e.push(r.a.outerHTML(b[d]));b=String.prototype.concat.apply("",e);r.f.ha(a);(new r.m.I(a)).text(b)}},Fa:function(d){if(i[d.tagName.toLowerCase()]){var f=
d.firstChild;if(f){do if(1===f.nodeType){var g;g=f.firstChild;var h=o;if(g){do if(h)h.push(g);else if(a(g)){var q=e(g,m);q?g=q:h=[g]}else b(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h){h=f.nextSibling;for(q=0;q<g.length;q++)h?d.insertBefore(g[q],h):d.appendChild(g[q])}}while(f=f.nextSibling)}}}}})();r.L=function(){};
r.a.extend(r.L.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=o;case 8:return r.f.ta(a)!=o;default:return p}},getBindings:function(a,b){var d=this.getBindingsString(a,b);return d?this.parseBindingsString(d,b):o},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return r.f.ta(a);default:return o}},parseBindingsString:function(a,b){try{var d=b.$data,e=" { "+r.j.ia(a)+" } ";return r.a.hb(e,d===o?window:
d,b)}catch(f){c(Error("Unable to parse bindings.\nMessage: "+f+";\nBindings value: "+a))}}});r.L.instance=new r.L;r.b("ko.bindingProvider",r.L);
(function(){function a(a,d){for(var h,g=d.childNodes[0];h=g;)g=r.f.nextSibling(h),b(a,h,p)}function b(b,f,h){var g=m,i=1==f.nodeType;i&&r.f.Fa(f);if(i&&h||r.L.instance.nodeHasBindings(f))g=d(f,o,b,h).Bb;i&&g&&a(b,f)}function d(a,b,d,g){function i(a){return function(){return n[a]}}function j(){return n}var k=0;r.f.ib(a);var n,t;new r.i(function(){var q=d&&d instanceof r.K?d:new r.K(r.a.d(d)),v=q.$data;g&&r.Na(a,q);if(n=("function"==typeof b?b():b)||r.L.instance.getBindings(a,q)){if(0===k){k=1;for(var s in n){var w=
r.c[s];w&&8===a.nodeType&&!r.f.C[s]&&c(Error("The binding '"+s+"' cannot be used with virtual elements"));if(w&&"function"==typeof w.init&&(w=(0,w.init)(a,i(s),j,v,q))&&w.controlsDescendantBindings)t!==l&&c(Error("Multiple bindings ("+t+" and "+s+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),t=s}k=2}if(2===k)for(s in n)(w=r.c[s])&&"function"==typeof w.update&&(0,w.update)(a,i(s),j,v,q)}},o,{disposeWhenNodeIsRemoved:a});
return{Bb:t===l}}r.c={};r.K=function(a,b){this.$data=a;b?(this.$parent=b.$data,this.$parents=(b.$parents||[]).slice(0),this.$parents.unshift(this.$parent),this.$root=b.$root):(this.$parents=[],this.$root=a)};r.K.prototype.createChildContext=function(a){return new r.K(a,this)};r.Na=function(a,b){if(2==arguments.length)r.a.e.set(a,"__ko_bindingContext__",b);else return r.a.e.get(a,"__ko_bindingContext__")};r.xa=function(a,b,h){1===a.nodeType&&r.f.Fa(a);return d(a,b,h,m)};r.Ta=function(b,d){1===d.nodeType&&
a(b,d)};r.wa=function(a,d){d&&1!==d.nodeType&&8!==d.nodeType&&c(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));d=d||window.document.body;b(a,d,m)};r.ea=function(a){switch(a.nodeType){case 1:case 8:var b=r.Na(a);if(b)return b;if(a.parentNode)return r.ea(a.parentNode)}};r.$a=function(a){return(a=r.ea(a))?a.$data:l};r.b("ko.bindingHandlers",r.c);r.b("ko.applyBindings",r.wa);r.b("ko.applyBindingsToDescendants",r.Ta);r.b("ko.applyBindingsToNode",
r.xa);r.b("ko.contextFor",r.ea);r.b("ko.dataFor",r.$a)})();r.a.n(["click"],function(a){r.c[a]={init:function(b,d,e,f){return r.c.event.init.call(this,b,function(){var b={};b[a]=d();return b},e,f)}}});
r.c.event={init:function(a,b,d,e){var f=b()||{},h;for(h in f)(function(){var f=h;"string"==typeof f&&r.a.s(a,f,function(a){var h,k=b()[f];if(k){var n=d();try{var t=r.a.X(arguments);t.unshift(e);h=k.apply(e,t)}finally{if(h!==m)a.preventDefault?a.preventDefault():a.returnValue=p}if(n[f+"Bubble"]===p)a.cancelBubble=m,a.stopPropagation&&a.stopPropagation()}})})()}};
r.c.submit={init:function(a,b,d,e){"function"!=typeof b()&&c(Error("The value for a submit binding must be a function"));r.a.s(a,"submit",function(d){var h,g=b();try{h=g.call(e,a)}finally{if(h!==m)d.preventDefault?d.preventDefault():d.returnValue=p}})}};r.c.visible={update:function(a,b){var d=r.a.d(b()),e="none"!=a.style.display;if(d&&!e)a.style.display="";else if(!d&&e)a.style.display="none"}};
r.c.enable={update:function(a,b){var d=r.a.d(b());if(d&&a.disabled)a.removeAttribute("disabled");else if(!d&&!a.disabled)a.disabled=m}};r.c.disable={update:function(a,b){r.c.enable.update(a,function(){return!r.a.d(b())})}};function D(a,b,d){d&&b!==r.h.q(a)&&r.h.S(a,b);b!==r.h.q(a)&&r.a.sa(a,"change")}
r.c.value={init:function(a,b,d){var e=["change"],f=d().valueUpdate;f&&("string"==typeof f&&(f=[f]),r.a.J(e,f),e=r.a.ya(e));r.a.n(e,function(e){var f=p;r.a.Cb(e,"after")&&(f=m,e=e.substring(5));var i=f?function(a){setTimeout(a,0)}:function(a){a()};r.a.s(a,e,function(){i(function(){var e=b(),f=r.h.q(a);r.P(e)?e(f):(e=d(),e._ko_property_writers&&e._ko_property_writers.value&&e._ko_property_writers.value(f))})})})},update:function(a,b){var d=r.a.d(b()),e=r.h.q(a),f=d!=e;0===d&&0!==e&&"0"!==e&&(f=m);f&&
(e=function(){r.h.S(a,d)},e(),"SELECT"==a.tagName&&setTimeout(e,0));"SELECT"==a.tagName&&0<a.length&&D(a,d,p)}};
r.c.options={update:function(a,b,d){"SELECT"!=a.tagName&&c(Error("options binding applies only to SELECT elements"));var e=0==a.length,f=r.a.ba(r.a.aa(a.childNodes,function(a){return a.tagName&&"OPTION"==a.tagName&&a.selected}),function(a){return r.h.q(a)||a.innerText||a.textContent}),h=a.scrollTop;a.scrollTop=0;for(var g=r.a.d(b());0<a.length;)r.F(a.options[0]),a.remove(0);if(g){d=d();"number"!=typeof g.length&&(g=[g]);if(d.optionsCaption){var i=document.createElement("OPTION");r.a.Z(i,d.optionsCaption);
r.h.S(i,l);a.appendChild(i)}for(var b=0,j=g.length;b<j;b++){var i=document.createElement("OPTION"),k="string"==typeof d.optionsValue?g[b][d.optionsValue]:g[b],k=r.a.d(k);r.h.S(i,k);var n=d.optionsText,k="function"==typeof n?n(g[b]):"string"==typeof n?g[b][n]:k;if(k===o||k===l)k="";r.a.Ma(i,k);a.appendChild(i)}g=a.getElementsByTagName("OPTION");b=i=0;for(j=g.length;b<j;b++)0<=r.a.k(f,r.h.q(g[b]))&&(r.a.La(g[b],m),i++);if(h)a.scrollTop=h;e&&"value"in d&&D(a,r.a.d(d.value),m)}}};r.c.options.la="__ko.optionValueDomData__";
r.c.selectedOptions={Da:function(a){for(var b=[],a=a.childNodes,d=0,e=a.length;d<e;d++){var f=a[d];"OPTION"==f.tagName&&f.selected&&b.push(r.h.q(f))}return b},init:function(a,b,d){r.a.s(a,"change",function(){var a=b();r.P(a)?a(r.c.selectedOptions.Da(this)):(a=d(),a._ko_property_writers&&a._ko_property_writers.value&&a._ko_property_writers.value(r.c.selectedOptions.Da(this)))})},update:function(a,b){"SELECT"!=a.tagName&&c(Error("values binding applies only to SELECT elements"));var d=r.a.d(b());if(d&&
"number"==typeof d.length)for(var e=a.childNodes,f=0,h=e.length;f<h;f++){var g=e[f];"OPTION"==g.tagName&&r.a.La(g,0<=r.a.k(d,r.h.q(g)))}}};r.c.text={update:function(a,b){r.a.Ma(a,b())}};r.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,b){var d=r.a.d(b());r.a.Z(a,d)}};r.c.css={update:function(a,b){var d=r.a.d(b()||{}),e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);r.a.Qa(a,e,f)}}};
r.c.style={update:function(a,b){var d=r.a.d(b()||{}),e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);a.style[e]=f||""}}};r.c.uniqueName={init:function(a,b){if(b())a.name="ko_unique_"+ ++r.c.uniqueName.Za,(r.a.ob||r.a.pb)&&a.mergeAttributes(document.createElement("<input name='"+a.name+"'/>"),p)}};r.c.uniqueName.Za=0;
r.c.checked={init:function(a,b,d){r.a.s(a,"click",function(){var e;if("checkbox"==a.type)e=a.checked;else if("radio"==a.type&&a.checked)e=a.value;else return;var f=b();"checkbox"==a.type&&r.a.d(f)instanceof Array?(e=r.a.k(r.a.d(f),a.value),a.checked&&0>e?f.push(a.value):!a.checked&&0<=e&&f.splice(e,1)):r.P(f)?f()!==e&&f(e):(f=d(),f._ko_property_writers&&f._ko_property_writers.checked&&f._ko_property_writers.checked(e))});"radio"==a.type&&!a.name&&r.c.uniqueName.init(a,function(){return m})},update:function(a,
b){var d=r.a.d(b());if("checkbox"==a.type)a.checked=d instanceof Array?0<=r.a.k(d,a.value):d;else if("radio"==a.type)a.checked=a.value==d}};r.c.attr={update:function(a,b){var d=r.a.d(b())||{},e;for(e in d)if("string"==typeof e){var f=r.a.d(d[e]);f===p||f===o||f===l?a.removeAttribute(e):a.setAttribute(e,f.toString())}}};
r.c.hasfocus={init:function(a,b,d){function e(a){var e=b();a!=r.a.d(e)&&(r.P(e)?e(a):(e=d(),e._ko_property_writers&&e._ko_property_writers.hasfocus&&e._ko_property_writers.hasfocus(a)))}r.a.s(a,"focus",function(){e(m)});r.a.s(a,"focusin",function(){e(m)});r.a.s(a,"blur",function(){e(p)});r.a.s(a,"focusout",function(){e(p)})},update:function(a,b){var d=r.a.d(b());d?a.focus():a.blur();r.a.sa(a,d?"focusin":"focusout")}};
r.c["with"]={o:function(a){return function(){var b=a();return{"if":b,data:b,templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c["with"].o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c["with"].o(b),d,e,f)}};r.j.D["with"]=p;r.f.C["with"]=m;r.c["if"]={o:function(a){return function(){return{"if":a(),templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c["if"].o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c["if"].o(b),d,e,f)}};
r.j.D["if"]=p;r.f.C["if"]=m;r.c.ifnot={o:function(a){return function(){return{ifnot:a(),templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c.ifnot.o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c.ifnot.o(b),d,e,f)}};r.j.D.ifnot=p;r.f.C.ifnot=m;
r.c.foreach={o:function(a){return function(){var b=r.a.d(a());return!b||"number"==typeof b.length?{foreach:b,templateEngine:r.p.M}:{foreach:b.data,includeDestroyed:b.includeDestroyed,afterAdd:b.afterAdd,beforeRemove:b.beforeRemove,afterRender:b.afterRender,templateEngine:r.p.M}}},init:function(a,b){return r.c.template.init(a,r.c.foreach.o(b))},update:function(a,b,d,e,f){return r.c.template.update(a,r.c.foreach.o(b),d,e,f)}};r.j.D.foreach=p;r.f.C.foreach=m;r.b("ko.allowedVirtualElementBindings",r.f.C);
r.t=function(){};r.t.prototype.renderTemplateSource=function(){c("Override renderTemplateSource")};r.t.prototype.createJavaScriptEvaluatorBlock=function(){c("Override createJavaScriptEvaluatorBlock")};r.t.prototype.makeTemplateSource=function(a){if("string"==typeof a){var b=document.getElementById(a);b||c(Error("Cannot find template with ID "+a));return new r.m.g(b)}if(1==a.nodeType||8==a.nodeType)return new r.m.I(a);c(Error("Unknown template type: "+a))};
r.t.prototype.renderTemplate=function(a,b,d){return this.renderTemplateSource(this.makeTemplateSource(a),b,d)};r.t.prototype.isTemplateRewritten=function(a){return this.allowTemplateRewriting===p?m:this.W&&this.W[a]?m:this.makeTemplateSource(a).data("isRewritten")};r.t.prototype.rewriteTemplate=function(a,b){var d=this.makeTemplateSource(a),e=b(d.text());d.text(e);d.data("isRewritten",m);if("string"==typeof a)this.W=this.W||{},this.W[a]=m};r.b("ko.templateEngine",r.t);
r.$=function(){function a(a,b,d){for(var a=r.j.Y(a),g=r.j.D,i=0;i<a.length;i++){var j=a[i].key;if(g.hasOwnProperty(j)){var k=g[j];"function"===typeof k?(j=k(a[i].value))&&c(Error(j)):k||c(Error("This template engine does not support the '"+j+"' binding within its templates"))}}a="ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { "+r.j.ia(a)+" } })()         })";return d.createJavaScriptEvaluatorBlock(a)+b}var b=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
d=/<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;return{gb:function(a,b){b.isTemplateRewritten(a)||b.rewriteTemplate(a,function(a){return r.$.ub(a,b)})},ub:function(e,f){return e.replace(b,function(b,e,d,j,k,n,t){return a(t,e,f)}).replace(d,function(b,e){return a(e,"<\!-- ko --\>",f)})},Ua:function(a){return r.r.ka(function(b,d){b.nextSibling&&r.xa(b.nextSibling,a,d)})}}}();r.b("ko.templateRewriting",r.$);r.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",r.$.Ua);r.m={};r.m.g=function(a){this.g=a};
r.m.g.prototype.text=function(){if(0==arguments.length)return"script"==this.g.tagName.toLowerCase()?this.g.text:this.g.innerHTML;var a=arguments[0];"script"==this.g.tagName.toLowerCase()?this.g.text=a:r.a.Z(this.g,a)};r.m.g.prototype.data=function(a){if(1===arguments.length)return r.a.e.get(this.g,"templateSourceData_"+a);r.a.e.set(this.g,"templateSourceData_"+a,arguments[1])};r.m.I=function(a){this.g=a};r.m.I.prototype=new r.m.g;
r.m.I.prototype.text=function(){if(0==arguments.length)return r.a.e.get(this.g,"__ko_anon_template__");r.a.e.set(this.g,"__ko_anon_template__",arguments[0])};r.b("ko.templateSources",r.m);r.b("ko.templateSources.domElement",r.m.g);r.b("ko.templateSources.anonymousTemplate",r.m.I);
(function(){function a(a,b,d){for(var g=0;node=a[g];g++)node.parentNode===b&&(1===node.nodeType||8===node.nodeType)&&d(node)}function b(a,b,h,g,i){var i=i||{},j=i.templateEngine||d;r.$.gb(h,j);h=j.renderTemplate(h,g,i);("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)&&c("Template engine must return an array of DOM nodes");j=p;switch(b){case "replaceChildren":r.f.oa(a,h);j=m;break;case "replaceNode":r.a.Ja(a,h);j=m;break;case "ignoreTargetNode":break;default:c(Error("Unknown renderMode: "+
b))}j&&(r.ua(h,g),i.afterRender&&i.afterRender(h,g.$data));return h}var d;r.pa=function(a){a!=l&&!(a instanceof r.t)&&c("templateEngine must inherit from ko.templateEngine");d=a};r.ua=function(b,d){var h=r.a.J([],b),g=0<b.length?b[0].parentNode:o;a(h,g,function(a){r.wa(d,a)});a(h,g,function(a){r.r.Sa(a,[d])})};r.na=function(a,f,h,g,i){h=h||{};(h.templateEngine||d)==l&&c("Set a template engine before calling renderTemplate");i=i||"replaceChildren";if(g){var j=g.nodeType?g:0<g.length?g[0]:o;return new r.i(function(){var d=
f&&f instanceof r.K?f:new r.K(r.a.d(f)),n="function"==typeof a?a(d.$data):a,d=b(g,i,n,d,h);"replaceNode"==i&&(g=d,j=g.nodeType?g:0<g.length?g[0]:o)},o,{disposeWhen:function(){return!j||!r.a.ga(j)},disposeWhenNodeIsRemoved:j&&"replaceNode"==i?j.parentNode:j})}return r.r.ka(function(b){r.na(a,f,h,b,"replaceNode")})};r.Ab=function(a,d,h,g,i){function j(a,b){var d=k(a);r.ua(b,d);h.afterRender&&h.afterRender(b,d.$data)}function k(a){return i.createChildContext(r.a.d(a))}return new r.i(function(){var i=
r.a.d(d)||[];"undefined"==typeof i.length&&(i=[i]);i=r.a.aa(i,function(a){return h.includeDestroyed||a===l||a===o||!r.a.d(a._destroy)});r.a.Ka(g,i,function(d){var f="function"==typeof a?a(d):a;return b(o,"ignoreTargetNode",f,k(d),h)},h,j)},o,{disposeWhenNodeIsRemoved:g})};r.c.template={init:function(a,b){var d=r.a.d(b());"string"!=typeof d&&!d.name&&1==a.nodeType&&((new r.m.I(a)).text(a.innerHTML),r.a.U(a));return{controlsDescendantBindings:m}},update:function(a,b,d,g,i){b=r.a.d(b());g=m;"string"==
typeof b?d=b:(d=b.name,"if"in b&&(g=g&&r.a.d(b["if"])),"ifnot"in b&&(g=g&&!r.a.d(b.ifnot)));var j=o;"object"===typeof b&&"foreach"in b?j=r.Ab(d||a,g&&b.foreach||[],b,a,i):g?(i="object"==typeof b&&"data"in b?i.createChildContext(r.a.d(b.data)):i,j=r.na(d||a,i,b,a)):r.f.ha(a);i=j;(b=r.a.e.get(a,"__ko__templateSubscriptionDomDataKey__"))&&"function"==typeof b.v&&b.v();r.a.e.set(a,"__ko__templateSubscriptionDomDataKey__",i)}};r.j.D.template=function(a){a=r.j.Y(a);return 1==a.length&&a[0].unknown?o:r.j.rb(a,
"name")?o:"This template engine does not support anonymous templates nested within its templates"};r.f.C.template=m})();r.b("ko.setTemplateEngine",r.pa);r.b("ko.renderTemplate",r.na);
r.a.N=function(a,b,d){if(d===l)return r.a.N(a,b,1)||r.a.N(a,b,10)||r.a.N(a,b,Number.MAX_VALUE);for(var a=a||[],b=b||[],e=a,f=b,h=[],g=0;g<=f.length;g++)h[g]=[];for(var g=0,i=Math.min(e.length,d);g<=i;g++)h[0][g]=g;g=1;for(i=Math.min(f.length,d);g<=i;g++)h[g][0]=g;for(var i=e.length,j,k=f.length,g=1;g<=i;g++){j=Math.max(1,g-d);for(var n=Math.min(k,g+d);j<=n;j++)h[j][g]=e[g-1]===f[j-1]?h[j-1][g-1]:Math.min(h[j-1][g]===l?Number.MAX_VALUE:h[j-1][g]+1,h[j][g-1]===l?Number.MAX_VALUE:h[j][g-1]+1)}d=a.length;
e=b.length;f=[];g=h[e][d];if(g===l)h=o;else{for(;0<d||0<e;){i=h[e][d];k=0<e?h[e-1][d]:g+1;n=0<d?h[e][d-1]:g+1;j=0<e&&0<d?h[e-1][d-1]:g+1;if(k===l||k<i-1)k=g+1;if(n===l||n<i-1)n=g+1;j<i-1&&(j=g+1);k<=n&&k<j?(f.push({status:"added",value:b[e-1]}),e--):(n<k&&n<j?f.push({status:"deleted",value:a[d-1]}):(f.push({status:"retained",value:a[d-1]}),e--),d--)}h=f.reverse()}return h};r.b("ko.utils.compareArrays",r.a.N);
(function(){function a(a){if(2<a.length){for(var b=a[0],f=a[a.length-1],h=[b];b!==f;){b=b.nextSibling;if(!b)return;h.push(b)}Array.prototype.splice.apply(a,[0,a.length].concat(h))}}function b(b,e,f,h){var g=[],b=r.i(function(){var b=e(f)||[];0<g.length&&(a(g),r.a.Ja(g,b),h&&h(f,b));g.splice(0,g.length);r.a.J(g,b)},o,{disposeWhenNodeIsRemoved:b,disposeWhen:function(){return 0==g.length||!r.a.ga(g[0])}});return{sb:g,i:b}}r.a.Ka=function(d,e,f,h,g){for(var e=e||[],h=h||{},i=r.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===
l,j=r.a.e.get(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],k=r.a.ba(j,function(a){return a.Va}),n=r.a.N(k,e),e=[],t=0,q=[],k=[],v=o,s=0,w=n.length;s<w;s++)switch(n[s].status){case "retained":var x=j[t];e.push(x);0<x.O.length&&(v=x.O[x.O.length-1]);t++;break;case "deleted":j[t].i.v();a(j[t].O);r.a.n(j[t].O,function(a){q.push({element:a,index:s,value:n[s].value});v=a});t++;break;case "added":var x=n[s].value,z=b(d,f,x,g),u=z.sb;e.push({Va:n[s].value,O:u,i:z.i});for(var z=0,y=u.length;z<
y;z++){var A=u[z];k.push({element:A,index:s,value:n[s].value});v==o?r.f.xb(d,A):r.f.mb(d,A,v);v=A}g&&g(x,u)}r.a.n(q,function(a){r.F(a.element)});f=p;if(!i){if(h.afterAdd)for(s=0;s<k.length;s++)h.afterAdd(k[s].element,k[s].index,k[s].value);if(h.beforeRemove){for(s=0;s<q.length;s++)h.beforeRemove(q[s].element,q[s].index,q[s].value);f=m}}f||r.a.n(q,function(a){r.removeNode(a.element)});r.a.e.set(d,"setDomNodeChildrenFromArrayMapping_lastMappingResult",e)}})();
r.b("ko.utils.setDomNodeChildrenFromArrayMapping",r.a.Ka);r.p=function(){this.allowTemplateRewriting=p};r.p.prototype=new r.t;r.p.prototype.renderTemplateSource=function(a){a=a.text();return r.a.ma(a)};r.p.M=new r.p;r.pa(r.p.M);r.b("ko.nativeTemplateEngine",r.p);
(function(){r.ja=function(){var a=this.qb=function(){if("undefined"==typeof jQuery||!jQuery.tmpl)return 0;try{if(0<=jQuery.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(d,e,f){f=f||{};2>a&&c(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));var h=d.data("precompiled");h||(h=d.text()||"",h=jQuery.template(o,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),d.data("precompiled",h));
d=[e.$data];e=jQuery.extend({koBindingContext:e},f.templateOptions);e=jQuery.tmpl(h,d,e);e.appendTo(document.createElement("div"));jQuery.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){document.write("<script type='text/html' id='"+a+"'>"+b+"<\/script>")};if(0<a)jQuery.tmpl.tag.ko_code={open:"__.push($1 || '');"},jQuery.tmpl.tag.ko_with={open:"with($1) {",close:"} "}};r.ja.prototype=new r.t;
var a=new r.ja;0<a.qb&&r.pa(a);r.b("ko.jqueryTmplTemplateEngine",r.ja)})();
})(window);                  

// SIG // Begin signature block
// SIG // MIIaZgYJKoZIhvcNAQcCoIIaVzCCGlMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFBhfIXJDpU3A
// SIG // lMwRgN6mm8xOFRXpoIIVNjCCBKkwggORoAMCAQICEzMA
// SIG // AACIWQ48UR/iamcAAQAAAIgwDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwNzI2
// SIG // MjA1MDQxWhcNMTMxMDI2MjA1MDQxWjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs3R00II8h6ea
// SIG // 1I6yBEKAlyUu5EHOk2M2XxPytHiYgMYofsyKE+89N4w7
// SIG // CaDYFMVcXtipHX8BwbOYG1B37P7qfEXPf+EhDsWEyp8P
// SIG // a7MJOLd0xFcevvBIqHla3w6bHJqovMhStQxpj4TOcVV7
// SIG // /wkgv0B3NyEwdFuV33fLoOXBchIGPfLIVWyvwftqFifI
// SIG // 9bNh49nOGw8e9OTNTDRsPkcR5wIrXxR6BAf11z2L22d9
// SIG // Vz41622NAUCNGoeW4g93TIm6OJz7jgKR2yIP5dA2qbg3
// SIG // RdAq/JaNwWBxM6WIsfbCBDCHW8PXL7J5EdiLZWKiihFm
// SIG // XX5/BXpzih96heXNKBDRPQIDAQABo4IBHTCCARkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFCZbPltd
// SIG // ll/i93eIf15FU1ioLlu4MA4GA1UdDwEB/wQEAwIHgDAf
// SIG // BgNVHSMEGDAWgBTLEejK0rQWWAHJNy4zFha5TJoKHzBW
// SIG // BgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNDb2RT
// SIG // aWdQQ0FfMDgtMzEtMjAxMC5jcmwwWgYIKwYBBQUHAQEE
// SIG // TjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NlcnRzL01pY0NvZFNpZ1BDQV8w
// SIG // OC0zMS0yMDEwLmNydDANBgkqhkiG9w0BAQUFAAOCAQEA
// SIG // D95ASYiR0TE3o0Q4abJqK9SR+2iFrli7HgyPVvqZ18qX
// SIG // J0zohY55aSzkvZY/5XBml5UwZSmtxsqs9Q95qGe/afQP
// SIG // l+MKD7/ulnYpsiLQM8b/i0mtrrL9vyXq7ydQwOsZ+Bpk
// SIG // aqDhF1mv8c/sgaiJ6LHSFAbjam10UmTalpQqXGlrH+0F
// SIG // mRrc6GWqiBsVlRrTpFGW/VWV+GONnxQMsZ5/SgT/w2at
// SIG // Cq+upN5j+vDqw7Oy64fbxTittnPSeGTq7CFbazvWRCL0
// SIG // gVKlK0MpiwyhKnGCQsurG37Upaet9973RprOQznoKlPt
// SIG // z0Dkd4hCv0cW4KU2au+nGo06PTME9iUgIzCCBLowggOi
// SIG // oAMCAQICCmECjkIAAAAAAB8wDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTEyMDEwOTIy
// SIG // MjU1OFoXDTEzMDQwOTIyMjU1OFowgbMxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDTALBgNVBAsTBE1PUFIxJzAlBgNVBAsT
// SIG // Hm5DaXBoZXIgRFNFIEVTTjpGNTI4LTM3NzctOEE3NjEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
// SIG // ggEBAJbsjkdNVMJclYDXTgs9v5dDw0vjYGcRLwFNDNjR
// SIG // Ri8QQN4LpFBSEogLQ3otP+5IbmbHkeYDym7sealqI5vN
// SIG // Yp7NaqQ/56ND/2JHobS6RPrfQMGFVH7ooKcsQyObUh8y
// SIG // NfT+mlafjWN3ezCeCjOFchvKSsjMJc3bXREux7CM8Y9D
// SIG // SEcFtXogC+Xz78G69LPYzTiP+yGqPQpthRfQyueGA8Az
// SIG // g7UlxMxanMTD2mIlTVMlFGGP+xvg7PdHxoBF5jVTIzZ3
// SIG // yrDdmCs5wHU1D92BTCE9djDFsrBlcylIJ9jC0rCER7t4
// SIG // utV0A97XSxn3U9542ob3YYgmM7RHxqBUiBUrLHUCAwEA
// SIG // AaOCAQkwggEFMB0GA1UdDgQWBBQv6EbIaNNuT7Ig0N6J
// SIG // TvFH7kjB8jAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7
// SIG // syuwwzWzDzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9NaWNyb3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsG
// SIG // AQUFBwEBBEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsG
// SIG // AQUFBwMIMA0GCSqGSIb3DQEBBQUAA4IBAQBz/30unc2N
// SIG // iCt8feNeFXHpaGLwCLZDVsRcSi1o2PlIEZHzEZyF7BLU
// SIG // VKB1qTihWX917sb1NNhUpOLQzHyXq5N1MJcHHQRTLDZ/
// SIG // f/FAHgybgOISCiA6McAHdWfg+jSc7Ij7VxzlWGIgkEUv
// SIG // XUWpyI6zfHJtECfFS9hvoqgSs201I2f6LNslLbldsR4F
// SIG // 50MoPpwFdnfxJd4FRxlt3kmFodpKSwhGITWodTZMt7MI
// SIG // qt+3K9m+Kmr93zUXzD8Mx90Gz06UJGMgCy4krl9DRBJ6
// SIG // XN0326RFs5E6Eld940fGZtPPnEZW9EwHseAMqtX21Tyi
// SIG // 4LXU+Bx+BFUQaxj0kc1Rp5VlMIIFvDCCA6SgAwIBAgIK
// SIG // YTMmGgAAAAAAMTANBgkqhkiG9w0BAQUFADBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcNMTAwODMx
// SIG // MjIxOTMyWhcNMjAwODMxMjIyOTMyWjB5MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29k
// SIG // ZSBTaWduaW5nIFBDQTCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBALJyWVwZMGS/HZpgICBCmXZTbD4b
// SIG // 1m/My/Hqa/6XFhDg3zp0gxq3L6Ay7P/ewkJOI9VyANs1
// SIG // VwqJyq4gSfTwaKxNS42lvXlLcZtHB9r9Jd+ddYjPqnNE
// SIG // f9eB2/O98jakyVxF3K+tPeAoaJcap6Vyc1bxF5Tk/TWU
// SIG // cqDWdl8ed0WDhTgW0HNbBbpnUo2lsmkv2hkL/pJ0KeJ2
// SIG // L1TdFDBZ+NKNYv3LyV9GMVC5JxPkQDDPcikQKCLHN049
// SIG // oDI9kM2hOAaFXE5WgigqBTK3S9dPY+fSLWLxRT3nrAgA
// SIG // 9kahntFbjCZT6HqqSvJGzzc8OJ60d1ylF56NyxGPVjzB
// SIG // rAlfA9MCAwEAAaOCAV4wggFaMA8GA1UdEwEB/wQFMAMB
// SIG // Af8wHQYDVR0OBBYEFMsR6MrStBZYAck3LjMWFrlMmgof
// SIG // MAsGA1UdDwQEAwIBhjASBgkrBgEEAYI3FQEEBQIDAQAB
// SIG // MCMGCSsGAQQBgjcVAgQWBBT90TFO0yaKleGYYDuoMW+m
// SIG // PLzYLTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTAf
// SIG // BgNVHSMEGDAWgBQOrIJgQFYnl+UlE/wq4QpTlVnkpDBQ
// SIG // BgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9taWNyb3Nv
// SIG // ZnRyb290Y2VydC5jcmwwVAYIKwYBBQUHAQEESDBGMEQG
// SIG // CCsGAQUFBzAChjhodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NlcnRzL01pY3Jvc29mdFJvb3RDZXJ0LmNy
// SIG // dDANBgkqhkiG9w0BAQUFAAOCAgEAWTk+fyZGr+tvQLEy
// SIG // tWrrDi9uqEn361917Uw7LddDrQv+y+ktMaMjzHxQmIAh
// SIG // Xaw9L0y6oqhWnONwu7i0+Hm1SXL3PupBf8rhDBdpy6Wc
// SIG // IC36C1DEVs0t40rSvHDnqA2iA6VW4LiKS1fylUKc8fPv
// SIG // 7uOGHzQ8uFaa8FMjhSqkghyT4pQHHfLiTviMocroE6WR
// SIG // Tsgb0o9ylSpxbZsa+BzwU9ZnzCL/XB3Nooy9J7J5Y1ZE
// SIG // olHN+emjWFbdmwJFRC9f9Nqu1IIybvyklRPk62nnqaIs
// SIG // vsgrEA5ljpnb9aL6EiYJZTiU8XofSrvR4Vbo0HiWGFzJ
// SIG // NRZf3ZMdSY4tvq00RBzuEBUaAF3dNVshzpjHCe6FDoxP
// SIG // bQ4TTj18KUicctHzbMrB7HCjV5JXfZSNoBtIA1r3z6Nn
// SIG // CnSlNu0tLxfI5nI3EvRvsTxngvlSso0zFmUeDordEN5k
// SIG // 9G/ORtTTF+l5xAS00/ss3x+KnqwK+xMnQK3k+eGpf0a7
// SIG // B2BHZWBATrBC7E7ts3Z52Ao0CW0cgDEf4g5U3eWh++VH
// SIG // EK1kmP9QFi58vwUheuKVQSdpw5OPlcmN2Jshrg1cnPCi
// SIG // roZogwxqLbt2awAdlq3yFnv2FoMkuYjPaqhHMS+a3ONx
// SIG // PdcAfmJH0c6IybgY+g5yjcGjPa8CQGr/aZuW4hCoELQ3
// SIG // UAjWwz0wggYHMIID76ADAgECAgphFmg0AAAAAAAcMA0G
// SIG // CSqGSIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNj
// SIG // b20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTAr
// SIG // BgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eTAeFw0wNzA0MDMxMjUzMDlaFw0yMTA0
// SIG // MDMxMzAzMDlaMHcxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAf
// SIG // BgNVBAMTGE1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ+h
// SIG // bLHf20iSKnxrLhnhveLjxZlRI1Ctzt0YTiQP7tGn0Uyt
// SIG // dDAgEesH1VSVFUmUG0KSrphcMCbaAGvoe73siQcP9w4E
// SIG // mPCJzB/LMySHnfL0Zxws/HvniB3q506jocEjU8qN+kXP
// SIG // CdBer9CwQgSi+aZsk2fXKNxGU7CG0OUoRi4nrIZPVVIM
// SIG // 5AMs+2qQkDBuh/NZMJ36ftaXs+ghl3740hPzCLdTbVK0
// SIG // RZCfSABKR2YRJylmqJfk0waBSqL5hKcRRxQJgp+E7VV4
// SIG // /gGaHVAIhQAQMEbtt94jRrvELVSfrx54QTF3zJvfO4OT
// SIG // oWECtR0Nsfz3m7IBziJLVP/5BcPCIAsCAwEAAaOCAasw
// SIG // ggGnMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCM0
// SIG // +NlSRnAK7UD7dvuzK7DDNbMPMAsGA1UdDwQEAwIBhjAQ
// SIG // BgkrBgEEAYI3FQEEAwIBADCBmAYDVR0jBIGQMIGNgBQO
// SIG // rIJgQFYnl+UlE/wq4QpTlVnkpKFjpGEwXzETMBEGCgmS
// SIG // JomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixkARkWCW1p
// SIG // Y3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0IFJvb3Qg
// SIG // Q2VydGlmaWNhdGUgQXV0aG9yaXR5ghB5rRahSqClrUxz
// SIG // WPQHEy5lMFAGA1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L21pY3Jvc29mdHJvb3RjZXJ0LmNybDBUBggrBgEFBQcB
// SIG // AQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljcm9zb2Z0Um9v
// SIG // dENlcnQuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0G
// SIG // CSqGSIb3DQEBBQUAA4ICAQAQl4rDXANENt3ptK132855
// SIG // UU0BsS50cVttDBOrzr57j7gu1BKijG1iuFcCy04gE1CZ
// SIG // 3XpA4le7r1iaHOEdAYasu3jyi9DsOwHu4r6PCgXIjUji
// SIG // 8FMV3U+rkuTnjWrVgMHmlPIGL4UD6ZEqJCJw+/b85HiZ
// SIG // Lg33B+JwvBhOnY5rCnKVuKE5nGctxVEO6mJcPxaYiyA/
// SIG // 4gcaMvnMMUp2MT0rcgvI6nA9/4UKE9/CCmGO8Ne4F+tO
// SIG // i3/FNSteo7/rvH0LQnvUU3Ih7jDKu3hlXFsBFwoUDtLa
// SIG // FJj1PLlmWLMtL+f5hYbMUVbonXCUbKw5TNT2eb+qGHpi
// SIG // Ke+imyk0BncaYsk9Hm0fgvALxyy7z0Oz5fnsfbXjpKh0
// SIG // NbhOxXEjEiZ2CzxSjHFaRkMUvLOzsE1nyJ9C/4B5IYCe
// SIG // FTBm6EISXhrIniIh0EPpK+m79EjMLNTYMoBMJipIJF9a
// SIG // 6lbvpt6Znco6b72BJ3QGEe52Ib+bgsEnVLaxaj2JoXZh
// SIG // tG6hE6a/qkfwEm/9ijJssv7fUciMI8lmvZ0dhxJkAj0t
// SIG // r1mPuOQh5bWwymO0eFQF1EEuUKyUsKV4q7OglnUa2ZKH
// SIG // E3UiLzKoCG6gW4wlv6DvhMoh1useT8ma7kng9wFlb4kL
// SIG // fchpyOZu6qeXzjEp/w7FW1zYTRuh2Povnj8uVRZryROj
// SIG // /TGCBJwwggSYAgEBMIGQMHkxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xIzAhBgNVBAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25p
// SIG // bmcgUENBAhMzAAAAiFkOPFEf4mpnAAEAAACIMAkGBSsO
// SIG // AwIaBQCggb4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // IwYJKoZIhvcNAQkEMRYEFOK0ZlNU1kKQXmY9oCx7w7tj
// SIG // wTtcMF4GCisGAQQBgjcCAQwxUDBOoCaAJABNAGkAYwBy
// SIG // AG8AcwBvAGYAdAAgAEwAZQBhAHIAbgBpAG4AZ6EkgCJo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vbGVhcm5pbmcg
// SIG // MA0GCSqGSIb3DQEBAQUABIIBACWkk6k1tP+ec8o1T5XU
// SIG // 8R+2AoeHueAk+yLesX3FtywfpK+OzzGUh4mfzW4hJDI8
// SIG // WbS7B8LWRv/8Ong5LIfStRahHclYmX63AO4UMCazGWWw
// SIG // dPCILuvH0bepEaluqc95AaU+hgdt8vJBckkIzQbQgGs8
// SIG // qZFt9lsW5ZHoQnu31yTX+VvFmiHiptQGEi0mZEo3iM+a
// SIG // n0B7X3cwsCkDeJbeevQ+m4sdd8xlmrXf69PN+6oMK3YV
// SIG // fJnS5zlWYbdEqY9EMac9sJJ2uwselv7qEaep69141zVg
// SIG // G2lB+YAoM3JUbNHd2PrnJWa6NXKmYzq0fcTOZ9hNc+dn
// SIG // 5iPF/0L5ceH5fPqhggIfMIICGwYJKoZIhvcNAQkGMYIC
// SIG // DDCCAggCAQEwgYUwdzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEh
// SIG // MB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // AgphAo5CAAAAAAAfMAkGBSsOAwIaBQCgXTAYBgkqhkiG
// SIG // 9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEP
// SIG // Fw0xMjEwMDEyMjEwMzRaMCMGCSqGSIb3DQEJBDEWBBRj
// SIG // pIoWlTIR8j/Ho6+DO6a8bTOkFDANBgkqhkiG9w0BAQUF
// SIG // AASCAQABlctCEn1vMxEsNVb7TThP6gWZRmKNtkgPvyWi
// SIG // A7tqaYSHZCSlBBGeGjAP6XW2VI2dLbGl70e3gQ+RbdT6
// SIG // KOSlGzqUpM0id6Z1LQXjzfFgk0hO62tKLlhCZ0p9cmc/
// SIG // Z2Bhtk0PhcJV1h+uLqOBCNooz0KN2Pdc4B51S1/OOqV3
// SIG // 9r56HPy48u1BiCIcAQkb4Pb0/vlZ3u4OQB6CmpivS1dv
// SIG // 2wAaFZGp5ahf3QPXkz8BVCGHyt4gTo0WWjCzBH2svnCP
// SIG // 9wUn0M25DQbKqCPzoW903TBAuG01pIKyOSvXcxpcsQSq
// SIG // 7obYDVnO9TVyoD5HwJRmz/Y9GYGcb/GGmbiFC0I/
// SIG // End signature block
