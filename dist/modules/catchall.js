/*! sutility - v0.0.1 - 2015-06-17 */
this.catchall=function(a){var b=null,c={},d={},e={prefix:"/defaultPrefix",partialPrefix:"/defaultPrefix/defaultFilterresult",replace:["/filter/","/filter/filterresult/"]},f={multi:!1,"default":null},g=function(b){return this.config=a.update(a.cloneObj(e),b),this};return g.prototype.key=function(b,e){c[b]=a.update(a.cloneObj(f),e);var h=decodeURIComponent(window.location.pathname),i=h.replace(this.config.prefix,"");i=i.split("/"),a.each(i,function(c){a.strStartsWith(c,b+"-")&&(d[b]=a.assignIfNotDefined(d[b],[]),c.length>b.length+1&&d[b].push(c))}),g.prototype.add=a.assignIfNotDefined(g.prototype.add,{}),g.prototype.add[b]=function(a,e){var f=b+"-"+a.toString()+(e?"-"+e.toString():"");c[b].multi?(d[b]=d[b]||[],d[b].push(f)):d[b]=[f]},g.prototype.remove=a.assignIfNotDefined(g.prototype.remove,{}),g.prototype.remove[b]=function(c,e){var f=b+"-"+c.toString()+(e?"-"+e.toString():"");d[b]=a.filter(d[b],function(a){return a!==f})},g.prototype.reset=a.assignIfNotDefined(g.prototype.reset,{}),g.prototype.reset[b]=function(){var e=c[b]["default"],f="";f=a["if"].is.equal(c[b].multi,"multi",function(){return[]}),d[b]=e?e:f}},g.prototype.partial=function(){var b=window.location.origin+this.config.partialPrefix;return a.each(d,function(c,d){a.each(c,function(c){var d=a.fine(c.split("-"),function(b){return a.is.value(b)});d&&(b+="/"+c)})}),decodeURIComponent(b.toLowerCase())},g.prototype.build=function(b){var c=window.location.origin+this.config.prefix;return a.each(d,function(b,d){a.each(b,function(b){var d=a.fine(b.split("-"),function(b){return a.is.value(b)});d&&(c+="/"+b)})}),decodeURIComponent(c.toLowerCase())},function(a){return b?b:b=new g(a)}}(this);
//# sourceMappingURL=catchall.js.map