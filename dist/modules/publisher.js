/*! sutility - v0.0.80 - 2015-11-03 */
this.publisher=function(a,b){var c={};return c.subscribers={any:[]},c.subscribe=function(a,b){b=b||"any";for(var c,d=_.spliteAndTrim(b),e=0;c=d[e];e++)_.is.not.defined(this.subscribers[c])&&(this.subscribers[c]=[]),this.subscribers[c].push(a)},c.unsubscribe=function(a,b){this.visitSubscribers("unsubscribe",a,b)},c.publish=function(a,b){b=_.assignIfNotDefined(b,{}),this.visitSubscribers("publish",b,a)},c.visitSubscribers=function(a,b,c){if(f)for(var d,e=c||"any",f=this.subscribers[e],g=(f.length,0);d=f[g];g++)"publish"===a?d(b):"unsubscribe"===a&&d==b&&f.splice(g,1)},function(a){a=a||{};var b;for(b in c)c.hasOwnProperty(b)&&_.is["function"](c[b])&&(a[b]=c[b]);return a.subscribers={any:[]},a}}(this);
//# sourceMappingURL=publisher.js.map