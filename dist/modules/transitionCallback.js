/*! sutility - v0.0.6 - 2015-07-11 */
this.transitionCallback=function(a,b){var c=this.getTransitionEvent(),d=function(){b(),a.removeEventListener(c,d)};a.addEventListener(c,d)};
//# sourceMappingURL=transitionCallback.js.map