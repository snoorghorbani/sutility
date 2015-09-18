/*! sutility - v0.0.79 - 2015-09-18 */
this.transitionCallback=function(a,b){var c=this.getTransitionEvent(),d=function(){b(),a.removeEventListener(c,d)};a.addEventListener(c,d)};
//# sourceMappingURL=transitionCallback.js.map