/*! sutility - v0.0.988 - 2016-08-06 */
this.eventBus={topics:{},sub:function(a,b){this.topics[a]||(this.topics[a]=[]),this.topics[a].push(b)},unsub:function(){},pub:function(a,b){!this.topics[a]||this.topics[a].length<1||this.topics[a].forEach(function(a){a(b||{})})}};
//# sourceMappingURL=eventBus.js.map