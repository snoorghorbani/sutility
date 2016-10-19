/*! sutility - v0.0.994 - 2016-10-19 */
this.scroll=function(){var a=function(){};return a.to=function(a,b,c){var d=_.selectFirst(a);if(!(c<0)){var e=b-window.pageYOffset,f=e/c*10;setTimeout(function(){var a=window.pageYOffset+f;window.scrollTo(0,a),d.scrollTop!==b&&_.scroll.to(d,b,c-10)},10)}},a}();
//# sourceMappingURL=scroll.js.map