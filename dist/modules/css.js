/*! sutility - v0.0.1 - 2015-06-25 */
this.css=function(a){var b=function(a,b){for(var c,d=this.select(a),e=0;c=d[e];e++)for(var f in b)c.style[f]=b[f]};return b.computedValue=function(b,c,d){if(window.getComputedStyle){var e=a.selectFirst(b),f=window.getComputedStyle(e,null).getPropertyValue(c);return d&&(f=a.regex.matchFirst(f)),f}a.fail('add shim for "window.getComputedStyle" in _.css.computedValue')},b}(this);
//# sourceMappingURL=css.js.map