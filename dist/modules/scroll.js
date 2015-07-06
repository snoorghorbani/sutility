/*! sutility - v0.0.5 - 2015-07-05 */
this.scroll=function(){var a=function(){};return a.to=function(a,b,c){var d=_.selectFirst(a);if(!(0>c)){var e=b-d.scrollTop,f=e/c*10;setTimeout(function(){d.scrollTop=d.scrollTop+f,d.scrollTop!==b&&_.scroll.to(d,b,c-10)},10)}},a}();
//# sourceMappingURL=scroll.js.map