/*! sutility - v0.0.7 - 2015-07-14 */
this.getCumulativeOffset=function(a){var b,c;if(b=c=0,a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return{x:b,y:c}};
//# sourceMappingURL=getCumulativeOffset.js.map