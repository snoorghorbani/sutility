/*! sutility - v0.0.981 - 2016-07-04 */
this.css=function(a){var b=["transition","transform"],c=["webkit","Moz","o","ms"],d=function(d,e){for(var f,g=this.select(d),h=0;f=g[h];h++)for(var i in e)b.indexOf(a.camelCase(i))==-1?f.style[a.camelCase(i)]=e[i]:a.each(c,function(b){f.style[b+a.pascalCase(i)]=e[i]})};return d.computedValue=function(b,c,d){if(window.getComputedStyle){var e=a.selectFirst(b),f=window.getComputedStyle(e,null).getPropertyValue(c);return d&&(f=a.regex.matchFirst(f)),f}a.fail('add shim for "window.getComputedStyle" in _.css.computedValue')},d}(this);
//# sourceMappingURL=css.js.map