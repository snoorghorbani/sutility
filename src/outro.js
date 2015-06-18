   };
return {
installHelperOn: function (_this) {
    U.call(_this);
},
get: function () {
    return new U();
}
};

})();

if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) {
    exports = module.exports = UTILITY.get();;
} else {
this._ = UTILITY.get();
}
}).call(this);