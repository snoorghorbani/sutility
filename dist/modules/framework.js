/*! sutility - v0.0.1 - 2015-06-17 */
this.framework=function(a){var b=function(){},c={},d={},e={},f={};b.factory=function(b){return function(b,d){var e=a.camelCase(b);window[e+"s"]&&a.fail(e+"s exists"),window[e+"s"]={};var f=d();c[e]=function(a,b,c){return window[e+"s"][a]=new f(a,b,c)}}}(this),b.controller=function(b,c){var e={};return function(b,c){return d[b]={},d[b].fn=c,e[b]=d[b].scope=a.scope(),a.ready(function(){var c=a.selectFirst('[data-controller="'+b+'"]');g(d[b],c)}),d[b].scope}}(this),b.loadJS=function(b){var c=[];return function(b){for(var d=a.fn(),f=[],g=0;g<b.length;g++)a.is.array(e[b[g]])?a.each(e[b[g]],function(a){e[a]||(e[a]=a),f.push(e[a])}):f.push(e[b[g]]);for(var h,g=0;h=f[g];g++){var i=h;a.loadJS(i,function(b){for(var d=0;d<c.length;d++)c[d].done||(c[d].depen=a.array.remove(c[d].depen,b),0===c[d].depen.length&&(c[d].done=!0,c[d].thenFn()))})}return{then:function(a){d=a,c.push({depen:f,thenFn:a})}}}}(this),b.loadCSS=function(b){return function(b){for(var c=[],d=0;d<b.length;d++)a.is.array(f[b[d]])?a.each(f[b[d]],function(a){f[a]||(f[a]=a),c.push(f[a])}):c.push(f[b[d]]);for(var d=0;d<c.length;d++)that.loadCSS(c[d]);return this}}(this),b.config=function(a){return function(a){that.extend(e,a.js),that.extend(f,a.css)}}(this);var g=function(b,d){b.fn.apply(b.scope,[b.scope,d]);for(var e in c){var f=d.querySelectorAll("["+e+"]");a.each(f,function(a){var d=a.getAttribute(e),f=b.scope.config[d]||{};c[e](d,a,f)})}};return b}(this);
//# sourceMappingURL=framework.js.map