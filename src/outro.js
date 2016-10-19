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

if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = SUTILITY.install();;
}
}).call();