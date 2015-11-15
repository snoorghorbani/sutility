this.mediaHandler = (function (_) {
    var handler = {
        "in": {},
        "out": {},
        "only": {},
        "is": {},
        "if": {
            "is": {
                "not": {}
            }
        }
    };
    var mediasState = {};
    var medias = {};
    var matchMedias = {};
    var callOnChangeFnFns = [];
    var subscibeOnMediaIn = function (media, fn, falseFn) {
        var mq = window.matchMedia(media.selector);
        mq.addListener(function () {
            (mq.matches ? fn : falseFn || _.fn())();
        });
        (mq.matches ? fn : falseFn || _.fn())();
    }
    var subscibeOnMediaOut = function (media, fn) {
        var mq = window.matchMedia(media);
        mq.addListener(function () {
            !mq.matches && fn();
        });;
    }
    var isInTheMedia = function (media, fn) {
        return (fn && mediasState[media.name]) ? fn() : matchMedias[media.name].matches;
    };
    // var isOutOfMedia = function (media, fn) {
    //     return (fn && !mediasState[media.name]) ? fn() : !matchMedias[media.name].matches;
    // };
    var subscribeChangeEvent = function (media) {
        var mq = window.matchMedia(media.selector);
        matchMedias[media.name] = mq;
        mq.addListener(function () {
            if (mq.matches) {
                callOnChangeFn([media]);
            } else {
            };
        });
    }
    handler.init = function (config) {
        medias = config;
        for (var i in medias) {
            subscribeChangeEvent({ name: i, selector: medias[i] });

            handler['in'][i] = _.leftCurry(subscibeOnMediaIn)({ name: i, selector: medias[i] });
            handler.out[i] = _.leftCurry(subscibeOnMediaOut)({ name: i, selector: medias[i] });
            handler.only[i] = _.leftCurry(_.fn)({ name: i, selector: medias[i] });
            handler.is[i] = _.leftCurry(isInTheMedia)({ name: i, selector: medias[i] });
            //handler['if'].is[i] = _.leftCurry(ifIsInMedia)({ name: i, selector: medias[i] });
            //handler['if'].is.not[i] = _.leftCurry(ifIsOutOfMedia)({ name: i, selector: medias[i] });
        }
    };
    var callOnChangeFn = function (currentMedias, fn) {
        if (fn)
            fn(currentMedias);
        else
            for (var i = 0, fn; fn = callOnChangeFnFns[i]; i++) fn(currentMedias);
    };
    //var medaChange = _.callConstantly(callOnChangeFn, 1);
    handler.onChange = function (fn, callOnInit) {
        callOnInit = _.assignIfNotDefined(callOnInit, true);
        callOnChangeFnFns.push(fn);
        var currentMedias = [];
        for (var i in matchMedias) {
            if (matchMedias[i].matches) currentMedias.push({ name: i, selector: medias[i] });
        };
        callOnInit && callOnChangeFn(currentMedias, fn);
    }
    handler.getMatchesMedia = function () {
        var res = [];
        for (var i in matchMedias) {
            if (matchMedias[i].matches) res.push({ name: i, selector: matchMedias[i].media });
        }
        return res;
    }
    return handler;
}(this));