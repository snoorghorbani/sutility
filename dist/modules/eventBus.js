/*! sutility - v0.0.84 - 2015-11-07 */
this.eventBus={topics:{},sub:function(a,b){this.topics[a]||(this.topics[a]=[]),this.topics[a].push(b)},unsub:function(){},pub:function(a,b){!this.topics[a]||this.topics[a].length<1||this.topics[a].forEach(function(a){a(b||{})})}};
//# sourceMappingURL=eventBus.js.map