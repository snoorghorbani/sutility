//#region move to pattern namespace
this._Observable = {
    observers: [],
    lastId: -1,
    addObserver: function (observer) {
        this.observers.push({
            callback: observer,
            id: ++this.lastId
        });
        
        return this.lastId;
    },
    removeObserver: function (id) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
            this.observers[i];
            if (this.observers[i].id == id) {
                this.observers.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    notifyObservers: function (message) {
        for (var i = this.observers.length - 1; i >= 0; i--) {
            this.observers[i].callback(message);
        }
    }
};
this.Observable = (function (that, undefined) {
    
    function Observable(obj) {
        this.subsciber = [];
    }
    
    // this method will handle adding observers to the internal list
    Observable.prototype.observe = function observeObject(obj) {
        console.log('added new observer');
        this.subsciber.push(obj);
    };
    
    Observable.prototype.unobserve = function unobserveObject(obj) {
        for (var i = 0, len = this.subsciber.length; i < len; i++) {
            if (this.subsciber[i] === obj) {
                this.subsciber.splice(i, 1);
                console.log('removed existing observer');
                return true;
            }
        }
        return false;
    };
    
    Observable.prototype.notify = function notifyObservers() {
        var args = Array.prototype.slice.call(arguments, 0);
        for (var i = 0, len = this.subsciber.length; i < len; i++) {
            this.subsciber[i].update.apply(null, args);
        }
    };
    
    Observable.set = function (val) {
                //that.update(obj, val);
                //this.notify();
    };
    
    return Observable;
})(this);
