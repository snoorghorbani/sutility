/*! sutility - v0.0.84 - 2015-11-11 */
this.attach=function(a){var b={},c=function(c,e,f){b[e]||(b[e]=[],d(e));for(var g,h={fn:f,domOrSelector:c},i=0;g=b[e][i];i++)if(a.is.equal(h,g))return i;return b[e].push(h),b[e].length-1},d=function(c){document.body.addEventListener(c,function(d){for(var e,f=!1,g=0;e=b[c][g];g++){var h=d.target;if(f=!1,a.is.element(e.domOrSelector)){do a.is.same(h,e.domOrSelector)?(e.fn(d,h,e.domOrSelector),f=!0):h=h.parentNode;while(!f&&"body"!=h.tagName.toLowerCase())}else if(a.is.string(e.domOrSelector))do a.is(h,e.domOrSelector)?(e.fn(d,h,e.domOrSelector),f=!0):h=h.parentNode;while(!f&&"body"!=h.tagName.toLowerCase())}})};return c}(this);
//# sourceMappingURL=attach.js.map