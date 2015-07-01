//#region todo move to on() module 
var scrollTopSubs = {};
var scrollDownSubs = {};

this.onScrollDown = function (Y, fn) {
    scrollDownSubs[Y] = scrollDownSubs[Y] || [];
    scrollDownSubs[Y].push(fn);
};
this.onScrollTop = function (Y, fn) {
    scrollTopSubs[Y] = scrollTopSubs[Y] || [];
    scrollTopSubs[Y].push(fn);
};
//#endregion

this.onscroll = (function (onscroll) {
    var methods = [];
    window.onscroll = function () {
        that.each(methods, function (method) {
            method();
        });
    };
    return function (fn) {
        methods.push(fn);
    };
})(window.onscroll);

this.onscroll(function () {
    var cs = window.scrollY;
    that.each(scrollTopSubs, function (state, key) {
        if (key < cs) {
            that.each(scrollTopSubs[key], function (handler) {
                handler();
            });
        }
    });
    that.each(scrollDownSubs, function (state, key) {
        if (key > cs) {
            that.each(scrollDownSubs[key], function (handler) {
                handler();
            });
        }
    });
});
