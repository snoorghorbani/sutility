/*! sutility - v0.0.982 - 2016-07-04 */
this.getTransitionEvent=function(){var a=document.createElement("div"),b={WebkitTransition:"webkitTransitionEnd",OTransition:"TranstionEnd",MozTransition:"transtionend",transition:"transtionend"};for(var c in b)if(_.is.defined(a.style[c]))return b[c]};
//# sourceMappingURL=getTransitionEvent.js.map