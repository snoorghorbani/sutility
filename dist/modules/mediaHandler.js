/*! sutility - v0.0.87 - 2016-06-08 */
this.mediaHandler=function(a){var b={"in":{},out:{},only:{},is:{},"if":{is:{not:{}}}},c={},d={},e={},f=[],g=function(b,c,d){var e=window.matchMedia(b.selector);e.addListener(function(){(e.matches?c:d||a.fn())()}),(e.matches?c:d||a.fn())()},h=function(a,b){var c=window.matchMedia(a);c.addListener(function(){!c.matches&&b()})},i=function(a,b){return b&&c[a.name]?b():e[a.name].matches},j=function(a){var b=window.matchMedia(a.selector);e[a.name]=b,b.addListener(function(){b.matches&&k([a])})};b.init=function(c){d=c;for(var e in d)j({name:e,selector:d[e]}),b["in"][e]=a.leftCurry(g)({name:e,selector:d[e]}),b.out[e]=a.leftCurry(h)({name:e,selector:d[e]}),b.only[e]=a.leftCurry(a.fn)({name:e,selector:d[e]}),b.is[e]=a.leftCurry(i)({name:e,selector:d[e]})};var k=function(a,b){if(b)b(a);else for(var b,c=0;b=f[c];c++)b(a)};return b.onChange=function(b,c){c=a.assignIfNotDefined(c,!0),f.push(b);var g=[];for(var h in e)e[h].matches&&g.push({name:h,selector:d[h]});c&&k(g,b)},b.getMatchesMedia=function(){var a=[];for(var b in e)e[b].matches&&a.push({name:b,selector:e[b].media});return a},b}(this);
//# sourceMappingURL=mediaHandler.js.map