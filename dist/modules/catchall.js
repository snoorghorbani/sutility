/*! sutility - v0.0.986 - 2016-07-04 */
this.catchall=function(a){var b=null,c={},d={},e={urlPrefix:"/filter",routePrefix:"/filter/filterresult"},f={fixedName:null,multi:!1,"default":null},g=function(b){return this.config=a.update(a.cloneObj(e),b),this};return g.prototype.key=function(b,e){c[b]=a.update(a.cloneObj(f),e),c[b]["default"]=e["default"]?a.is.array(e["default"])?e["default"]:[e["default"]]:[],d[b]=d[b]||[],a.each(c[b]["default"],function(e){var f=a.is.array(e)?e[0]:e,g=a.is.array(e)?e[1]:void 0,h=b+"-"+f.toString()+(g?"-"+g.toString():"");c[b].multi?d[b].push(h):d[b]=[h]});var h=decodeURIComponent(window.location.pathname),i=h.replace(this.config.urlPrefix,"");if(i=i.split("/"),a.each(i,function(c){a.is.startWith(c,b+"-")&&(d[b]=a.assignIfNotDefined(d[b],[]),c.length>b.length+1&&d[b].push(c))}),g.prototype.add=a.assignIfNotDefined(g.prototype.add,{}),g.prototype.add[b]=function(a,e){var f=b+"-"+a.toString()+(e?"-"+e.toString():"");c[b].multi?(d[b]=d[b]||[],d[b].push(f)):d[b]=[f]},g.prototype.remove=a.assignIfNotDefined(g.prototype.remove,{}),g.prototype.remove[b]=function(e,f){var g=b+"-"+e.toString()+(f?"-"+f.toString():"");d[b]=a.filter(d[b],function(a){return a.toLowerCase()!==g.toLowerCase()});var h=c[b].fixedName;h&&(g=h+"-"+e.toString()+(f?"-"+f.toString():""),d[h]=a.filter(d[h],function(a){return a.toLowerCase()!==g.toLowerCase()}))},g.prototype.reset=a.assignIfNotDefined(g.prototype.reset,{}),g.prototype.reset[b]=function(){d[b]=[],a.each(c[b]["default"],function(e){var f=a.is.array(e)?e[0]:e,g=a.is.array(e)?e[1]:void 0,h=b+"-"+f.toString()+(g?"-"+g.toString():"");c[b].multi?d[b].push(h):d[b]=[h]})},g.prototype.get=a.assignIfNotDefined(g.prototype.get,{}),g.prototype.get[b]=function(){var a;return a=d[b]},e.fixedName){var j=a.clone(e);delete j.fixedName,this.key(e.fixedName,j)}},g.prototype.getRoute=function(){var b=window.location.origin+this.config.routePrefix||"fortest"+this.config.routePrefix;return a.each(d,function(c,d){a.each(c,function(c){var d=a.fine(c.split("-"),function(b){return a.is.value(b)});d&&(b+="/"+c)})}),decodeURIComponent(b.toLowerCase())},g.prototype.getUrl=function(b){var c=window.location.origin+this.config.urlPrefix||"fortest"+this.config.urlPrefix;return a.each(d,function(b,d){a.each(b,function(b){var d=a.fine(b.split("-"),function(b){return a.is.value(b)});d&&(c+="/"+b)})}),decodeURIComponent(c.toLowerCase())},g.prototype.url=function(b){var c=window.location.origin+b||"fortest"+b;return a.each(d,function(b,d){a.each(b,function(b){var d=a.fine(b.split("-"),function(b){return a.is.value(b)});d&&(c+="/"+b)})}),decodeURIComponent(c.toLowerCase())},function(a){return b?b:b=new g(a)}}(this);
//# sourceMappingURL=catchall.js.map