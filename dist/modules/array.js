/*! sutility - v0.0.5 - 2015-07-05 */
this.array=function(a){var b=function(){};b.compact=function(b){return a.filter(b,a.i)},b.union=function(b){var c={},d=[];return a.each(b,function(a){c[a]=""}),a.each(c,function(a,b){d.push(b)}),d},b.uniq=function(a){};var c=function(b,d,e){for(var f=-1,g=b.length,h=-1,i=[];++f<g;){var j=b[f];if(a.is.array(j)&&(e||a.is.array(j)||a.is.arguments(j))){d&&(j=c(j,d,e));for(var k=-1,l=j.length;++k<l;)i[++h]=j[k]}else e||(i[++h]=j)}return i};return b.flattenDeep=function(a){var b=a?a.length:0;return b?c(a,!0):[]},b.remove=function(b,c){return a.filter(b,function(a){return c!==a})},b.shift=function(a,b){var c,d=0;if("number"==typeof b)d=b;else if(that.is["function"](b))for(var e=0;b(a[e++]);)d++;else d++;return c=a.slice(0,d),that.is.array(c)&&1===c.length?c[0]:c},b.reverse=function(a){for(var b=[],c=a.length-1,d=0;c>=0;c--,d++)b[d]=a[c];return b},b.concat=function(a,b){return a.concat(b)},b.indexOf=function(b,c,d){var e;return a.is["function"](c)?a.each(b,function(a,b){c.call(d,a)&&(e=b)}):e=b.indexOf(c),e},b}(this);
//# sourceMappingURL=array.js.map