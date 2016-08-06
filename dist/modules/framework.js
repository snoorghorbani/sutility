/*! sutility - v0.0.988 - 2016-08-06 */
this.framework=function(a){return function(b){b=b||{},b.version=b.version||1,b.controllerHolder=b.controllerHolder||window,b.run_env||a.fail("you must define application run_env function in app.js"),window.RUN_ENV=b.run_env();var c=function(){},d={},e={},f={},g=[],h=[],i={},j={};c.compile=function(b){var c=a.selectFirst(b),d=a.select("[data-controller]",c);a.each(d,function(b){k(e[a.dataset.get(b,"controller")]),a.each(e,function(b,c){var d=a.selectFirst('[data-controller="'+c+'"]');d||(e[c].active=!1)})}),a.each(g,function(a){a(c)})},c.registerOnCompileTime=function(a){g.push(a)},c.factory=function(b){return function(b,c){var e=a.camelCase(b);window[e+"s"]&&a.fail(e+"s exists"),window[e+"s"]={};var f=c();return d[e]=function(a,b,c,d,g){return window[e+"s"][g]?window[e+"s"][g]:window[e+"s"][g]=new f(a,b,c,d)},f}}(this);var k=function(b){var c,d,f=a.selectFirst('[data-controller="'+b.name+'"]'),g=f;if(f){do g=g.parentNode,d=a.dataset.get(g,"controller"),d&&(c=k(e[d]));while(g&&"HTML"!=g.tagName&&!d);d&&b.scope.fn.__proto__&&(b.scope.fn.__proto__=e[d].scope.fn,b.scope.event.__proto__=e[d].scope.event,b.scope["const"].__proto__=e[d].scope["const"],b.scope.module.__proto__=e[d].scope.module),l(b,f)}return f};c.controller=function(c,d){var g={};return function(c,d){return f[c]=d,e[c]={},e[c].active=!1,e[c].name=c,e[c].fn=d,g[c]=e[c].scope=a.scope(),b.controllerHolder[c]=e[c].scope}}(this),c.loadJS=function(c){var d=[],e={};return function(c){var f=a.fn(),g=[];if("development"==RUN_ENV){for(var h=0;h<c.length;h++)a.is.array(i[c[h]])?a.each(i[c[h]],function(a){i[a]||(i[a]=a),e[i[a]]||(g.push(i[a]),e[i[a]]=!1)}):e[i[c[h]]]||(g.push(i[c[h]]),e[i[c[h]]]=!1);for(var h=0;h<g.length;h++)g[h]+="?version="+b.version;for(var j,h=0;j=g[h];h++){var k=j;a.loadJS(k,function(b){e[b]=!0;for(var c=d.length-1;c>=0;c--)d[c].done||(d[c].depen=a.array.remove(d[c].depen,b),0===d[c].depen.length&&(d[c].done=!0,d[c].thenFn()))})}}return{then:function(a){f=a,0==g.length?f():d.push({depen:g,thenFn:a})}}}}(this),c.loadCSS=function(b){return function(b){for(var c=[],d=0;d<b.length;d++)a.is.array(j[b[d]])?a.each(j[b[d]],function(a){j[a]||(j[a]=a),c.push(j[a])}):c.push(j[b[d]]);for(var d=0;d<c.length;d++)that.loadCSS(c[d]);return this}}(this),c.config=function(a){return function(a){that.extend(i,a.js),that.extend(j,a.css)}}(this);var l=function(b,c){if(!b.active){b.fn.apply(b.scope,[b.scope,c]);for(var e in d){var f=a.dashCase(e),g=a.argToArray(c.querySelectorAll("["+f+"]"));a.each(g,function(a){var c=a.getAttribute(f),g=b.scope.config[c]||{};d[e](c,a,g)}),g=a.argToArray(c.querySelectorAll("[data-"+f+"]")),a.each(g,function(c){var g=a.is(c,'[data-controller="'+b.name+'"] [data-controller] '+c.tagName.toLowerCase()+(c.id?"#"+c.id:""));if(!g){var h=c.getAttribute("data-"+f),i=h+(c.id?c.id:""),j=b.scope.config[h]||{};d[e](h,c,j,b,i)}})}b.active=!0}};return a.ready(function(){h=a.lexer("data-controller"),a.each(h,function(b){a.callWhen(function(){var c=!0;return a.each(b.parentIds,function(a){f[a]||(c=!1)}),c},function(){return!!k(e[b.id])})})}),c}}(this);
//# sourceMappingURL=framework.js.map