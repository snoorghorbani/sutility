/*! sutility - v0.0.82 - 2015-11-06 */
this.className=function(a,b){var c=function(a,b){};return c.add=function(b,c){for(var d=a.select(b),e=0;e<d.length;e++)d[e].classList?DOMTokenList.prototype.add.apply(d[e].classList,a.spliteAndTrim(c)):-1===d[e].className.indexOf(c)&&(d[e].className=d[e].className+" "+c)},c.remove=function(b,c){var d=a.select(b);if(a.is.ie())for(var e=0;e<d.length;e++){if(d[e].classList)for(var f=a.spliteAndTrim(c),g=0;g<f.length;g++)DOMTokenList.prototype.remove.call(d[e].classList,f[g]);var h=new RegExp(c,"g");d[e].className=d[e].className.replace(h,"").trim()}else for(var e=0;e<d.length;e++)if(d[e].classList)DOMTokenList.prototype.remove.apply(d[e].classList,a.spliteAndTrim(c));else{var h=new RegExp(c,"g");d[e].className=d[e].className.replace(h,"").trim()}var d=a.select(b);if(a.is.ie())for(var e=0;e<d.length;e++){if(d[e].classList)for(var f=a.spliteAndTrim(c),e=0;e<f.length;e++)DOMTokenList.prototype.remove.apply(d[e].classList,f[e]);var h=new RegExp(c,"g");d[e].className=d[e].className.replace(h,"").trim()}for(var e=0;e<d.length;e++)if(d[e].classList)DOMTokenList.prototype.remove.apply(d[e].classList,a.spliteAndTrim(c));else{var h=new RegExp(c,"g");d[e].className=d[e].className.replace(h,"").trim()}},c.toggle=function(){},c.change=function(b,c,d){var e=a.select(b);a.className.remove(e,c),a.className.add(e,d)},c.contains=function(b,c){var d=a.selectFirst(b);return d.classList.contains(c)},c["if"]=function(b,c,d){for(var e=a.select(b),f=0;f<e.length;f++)(d(e[f])?a.className.add:a.className.remove)(e[f],c)},c}(this);
//# sourceMappingURL=className.js.map