/*! sutility - v0.0.5 - 2015-07-02 */
this.framework=function(a){var b=function(){},c={},d={},e={},f={};b.factory=function(b){return function(b,d){window[camelCaseName+"s"]&&a.fail(camelCaseName+"s exists"),window[camelCaseName+"s"]={};var e=d();c[camelCaseName]=function(a,b,c){return window[camelCaseName+"s"][a]=new e(a,b,c)}}}(this),b.controller=function(b,c){var e={};return function(b,c){return d[b]={},d[b].fn=c,e[b]=d[b].scope=a.scope(),a.ready(function(){var c=a.selectFirst('[data-controller="'+b+'"]');g(d[b],c)}),d[b].scope}}(this),b.loadJS=function(b){var c=[],d={};return function(b){for(var f=a.fn(),g=[],h=0;h<b.length;h++)a.is.array(e[b[h]])?a.each(e[b[h]],function(a){e[a]||(e[a]=a),d[e[a]]||(g.push(e[a]),d[e[a]]=!1)}):d[e[b[h]]]||(g.push(e[b[h]]),d[e[b[h]]]=!1);for(var i,h=0;i=g[h];h++){var j=i;a.loadJS(j,function(b){d[b]=!0;for(var e=c.length-1;e>=0;e--)c[e].done||(c[e].depen=a.array.remove(c[e].depen,b),0===c[e].depen.length&&(c[e].done=!0,c[e].thenFn()))})}return{then:function(a){f=a,0==g.length?f():c.push({depen:g,thenFn:a})}}}}(this),b.loadCSS=function(b){return function(b){for(var c=[],d=0;d<b.length;d++)a.is.array(f[b[d]])?a.each(f[b[d]],function(a){f[a]||(f[a]=a),c.push(f[a])}):c.push(f[b[d]]);for(var d=0;d<c.length;d++)that.loadCSS(c[d]);return this}}(this),b.config=function(a){return function(a){that.extend(e,a.js),that.extend(f,a.css)}}(this);var g=function(b,d){b.fn.apply(b.scope,[b.scope,d]);for(var e in c){var f=a.dashCase(e),g=d.querySelectorAll("["+f+"]");a.each(g,function(a){var d=a.getAttribute(f),g=b.scope.config[d]||{};c[e](d,a,g)})}};return b}(this);
//# sourceMappingURL=framework.js.map