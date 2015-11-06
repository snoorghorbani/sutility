/*! sutility - v0.0.82 - 2015-11-06 */
this.transitionCallback=function(a,b){var c=this.getTransitionEvent(),d=function(){b(),a.removeEventListener(c,d)};a.addEventListener(c,d)};
//# sourceMappingURL=transitionCallback.js.map