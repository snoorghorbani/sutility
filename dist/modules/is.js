/*! sutility - v0.0.84 - 2015-11-11 */
this.is=function(a,b){var c=function(a,b){if(a.matches)return a.matches(b);var c=this.argToArray(a.parentNode.querySelectorAll(b));return c.indexOf(a)>-1?!0:!1};c.object=function(a){return"[object Object]"===Object.prototype.toString.call(a)},c.nodeList=function(a){return"[object NodeList]"===Object.prototype.toString.call(a)},c.element=function(a){return Object.prototype.toString.call(a).search("Element")>-1},c.HTMLCollection=function(a){return"[object HTMLCollection]"===Object.prototype.toString.call(a)},c.array=function(a){return"[object Array]"===Object.prototype.toString.call(a)},c.number=function(a){return"[object Number]"===Object.prototype.toString.call(a)},c["function"]=function(a){return"[object Function]"===Object.prototype.toString.call(a)},c.string=function(a){return"[object String]"===Object.prototype.toString.call(a)},c.undefined=function(a){return"[object Undefined]"===Object.prototype.toString.call(a)},c.event=function(a){return Object.prototype.toString.call(a).toLowerCase().search("event")>-1},c.defined=function(a){return"[object Undefined]"!==Object.prototype.toString.call(a)&&"[object Null]"!==Object.prototype.toString.call(a)&&""!==Object},c.json=function(){},c.error=function(){},c.startWith=function(a,b){return 0===a.indexOf(b)},c.endWith=function(a){},c.value=function(a){return a?!0:!1},c.empty=function(b){if(a.is.object(0))for(var c in b)if(b.hasOwnProperty(c))return!1;return a.is.array(b)?0===b.length:!0},c.truthy=function(){},c.scalar=function(a){return c.defined(a)&&c.not.array(this.is.array)&&c.not.object(a)&&c.not["function"](a)},c.prototypeProp=function(a,b){return a[b]&&!a.hasOwnProperty(b)},c.equal=function(a,b){return JSON.stringify(a)==JSON.stringify(b)?!0:!1},c.equalText=function(a,b){return a.toLowerCase(a)===b.toLowerCase(b)?!0:!1},c.closet=function(b,c){return a.is.equal(a.partial(b,a.report.skeleton(c)),c)},c.contain=function(b,c){var d=a.is.regex(c)?c:new RegExp(c,"g");return b.match(d)&&b.match(d).length>0},c.regex=function(a){return"RegExp"===a.constructor.name},c.ie=function(){return window.navigator.userAgent.indexOf("Trident")>0},c.same=function(a,b){return a.isEqualNode?a.isEqualNode(b):a===b};var d,e={};for(d in c)(function(a){c.hasOwnProperty(a)&&(e[a]=function(b,d,e){return!c[a](b,d,e)})})(d);c.not=e;var f={};for(d in c)(function(a){c.hasOwnProperty(a)&&(f[a]=function(a){})})(d);c.all=f;var g={};for(var h in c)(function(a){c.hasOwnProperty(a)&&(g[a]=function(a){})})(h);return c.any=g,c}(this),this["if"]=function(a){var b={};b.is={},b.is.not={};for(var c in a.is)(function(c){"not"!=c&&(b.is[c]=function(b,d,e){return a.is[c](b)?d():e&&e()},b.is.not[c]=function(b,d,e){return a.is.not[c](b)?d():e&&e()})})(c);return b}(this);
//# sourceMappingURL=is.js.map