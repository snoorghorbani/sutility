/*! sutility - v0.0.71 - 2015-09-11 */
this._Observable={observers:[],lastId:-1,addObserver:function(a){return this.observers.push({callback:a,id:++this.lastId}),this.lastId},removeObserver:function(a){for(var b=this.observers.length-1;b>=0;b--)if(this.observers[b],this.observers[b].id==a)return this.observers.splice(b,1),!0;return!1},notifyObservers:function(a){for(var b=this.observers.length-1;b>=0;b--)this.observers[b].callback(a)}},this.Observable=function(a,b){function c(a){this.subsciber=[]}return c.prototype.observe=function(a){this.subsciber.push(a)},c.prototype.unobserve=function(a){for(var b=0,c=this.subsciber.length;c>b;b++)if(this.subsciber[b]===a)return this.subsciber.splice(b,1),!0;return!1},c.prototype.notify=function(){for(var a=Array.prototype.slice.call(arguments,0),b=0,c=this.subsciber.length;c>b;b++)this.subsciber[b].update.apply(null,a)},c.set=function(a){},c}(this);
//# sourceMappingURL=observable.js.map