/*! sutility - v0.0.76 - 2015-09-11 */
this.dispatcher=function(a){var b={},c=function(c,e,f){b[e]||(b[e]=[],d(e));for(var g,h={fn:f,domOrSelector:c},i=!1,j=0;g=b[e][j];j++)a.is.equal(h,g)&&(i=!0);b[e].push(h)},d=function(c){document.body.addEventListener(c,function(d){for(var e,f=!1,g=0;e=b[c][g];g++){var h=d.target;if(f=!1,a.is.element(e.domOrSelector)){do a.is.same(h,e.domOrSelector)?(e.fn(d,h,e.domOrSelector),f=!0):h=h.parentNode;while(!f&&"body"!=h.tagName.toLowerCase())}else if(a.is.string(e.domOrSelector))do a.is(h,e.domOrSelector)?(e.fn(d,h,e.domOrSelector),f=!0):h=h.parentNode;while(!f&&"body"!=h.tagName.toLowerCase())}})};return c}(this);
//# sourceMappingURL=dispatcher.js.map