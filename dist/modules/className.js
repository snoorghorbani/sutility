/*! sutility - v0.0.5 - 2015-07-02 */
this.className=function(a,b){var c=function(a,b){};return c.add=function(b,c){for(var d=a.select(b),e=0;e<d.length;e++)d[e].classList?DOMTokenList.prototype.add.apply(d[e].classList,a.spliteAndTrim(c)):-1===d[e].className.indexOf(c)&&(d[e].className=d[e].className+" "+c)},c.remove=function(b,c){for(var d=a.select(b),e=0;e<d.length;e++)if(d[e].classList)DOMTokenList.prototype.remove.apply(d[e].classList,a.spliteAndTrim(c));else{var f=new RegExp(c,"g");d[e].className=d[e].className.replace(f,"").trim()}},c.toggle=function(){},c.change=function(b,c,d){var e=a.select(b);a.removeClass(e,c),a.addClass(e,d)},c.contains=function(b,c){var d=a.selectFirst(b);return d.classList.contains(c)},c["if"]=function(b,c,d){for(var e=a.select(b),f=0;f<e.length;f++)(d(e[f])?a.className.add:a.className.remove)(e[f],c)},c}(this);
//# sourceMappingURL=className.js.map