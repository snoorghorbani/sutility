/*! sutility - v0.0.7 - 2015-07-14 */
this.scroll=function(){var a=function(){};return a.to=function(a,b,c){var d=_.selectFirst(a);if(!(0>c)){var e=b-window.pageYOffset,f=e/c*10;setTimeout(function(){var a=window.pageYOffset+f;window.scrollTo(0,a),d.scrollTop!==b&&_.scroll.to(d,b,c-10)},10)}},a}();
//# sourceMappingURL=scroll.js.map