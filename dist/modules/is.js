/*! sutility - v0.0.1 - 2015-06-18 */
this.is=function(a,b){var c=function(a,b){if(a.matches)return a.matches(b);var c=this.argToArray(a.parentNode.querySelectorAll(b));return c.indexOf(a)>-1?!0:!1};c.object=function(a){return"[object Object]"===Object.prototype.toString.call(a)},c.nodeList=function(a){return"[object NodeList]"===Object.prototype.toString.call(a)},c.HTMLCollection=function(a){return"[object HTMLCollection]"===Object.prototype.toString.call(a)},c.array=function(a){return"[object Array]"===Object.prototype.toString.call(a)},c.number=function(a){return"[object Number]"===Object.prototype.toString.call(a)},c["function"]=function(a){return"[object Function]"===Object.prototype.toString.call(a)},c.string=function(a){return"[object String]"===Object.prototype.toString.call(a)},c.undefined=function(a){return"[object Undefined]"===Object.prototype.toString.call(a)},c.event=function(a){return!!Object.prototype.toString.call(a).toLowerCase().search("event")},c.defined=function(a){return"[object Undefined]"!==Object.prototype.toString.call(a)&&"[object Null]"!==Object.prototype.toString.call(a)&&""!==Object},c.json=function(){},c.error=function(){},c.startWith=function(){},c.endWith=function(){},c.value=function(a){return a?!0:!1},c.empty=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},c.truthy=function(){},c.scalar=function(a){return c.defined(a)&&c.not.array(this.is.array)&&c.not.object(a)&&c.not["function"](a)},c.prototypeProp=function(a,b){return a[b]&&!a.hasOwnProperty(b)},c.equal=function(a,b){return a||that.warn("equal function :"+a+" is Not Object"),b||that.warn("equal function :"+b+" is Not Object"),JSON.stringify(a)==JSON.stringify(b)?!0:!1};var d,e={};for(d in c)(function(a){c.hasOwnProperty(a)&&(e[a]=function(b){return!c[a](b)})})(d);c.not=e;var f={};for(d in c)(function(a){c.hasOwnProperty(a)&&(f[a]=function(a){})})(d);c.all=f;var g={};for(var h in c)(function(a){c.hasOwnProperty(a)&&(g[a]=function(a){})})(h);return c.any=g,c}(this);
//# sourceMappingURL=is.js.map