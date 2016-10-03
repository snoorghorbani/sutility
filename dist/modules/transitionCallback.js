/*! sutility - v0.0.989 - 2016-10-03 */
this.transitionCallback=function(a,b){var c=this.getTransitionEvent(),d=function(){b(),a.removeEventListener(c,d)};a.addEventListener(c,d)};
//# sourceMappingURL=transitionCallback.js.map