};
return {
    install: function () {
        return (instance)?instance : new U();
    },
    installTo: function (_) {
        return (Object.prototype.toString.call(_) === '[object Object]') ? U.call(_) : window[_] = this.install();
    }
};

})();

if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) {
    exports = module.exports = SUTILITY.install();;
} else {
    window.SUTILITY = SUTILITY;
}
}).call(this);