this.mediaHandler = (function (_) {
    var handler = {
        "in": {},
        "out": {},
        "only": {}
    };
    var medias = {};
    var subscibeOnMediaIn = function (media, fn) {
        var mq = window.matchMedia(media);
        mq.addListener(function () {
            if (mq.matches) fn();
        });;
    }
    var subscibeOnMediaOut = function (media, fn) {
        var mq = window.matchMedia(media);
        mq.addListener(function () {
            if (!mq.matches) fn();
        });;
    }
    handler.init = function (config) {
        medias = config;
        for (var i in medias) {
            handler.in[i] = _.leftCurry(subscibeOnMediaIn)(medias[i]);
            handler.out[i] = _.leftCurry(subscibeOnMediaOut)(medias[i]);
            handler.only[i] = _.leftCurry(_.fn)(medias[i]);
        }
    };
    return handler;
}(_));

//mediaHandler.init({
//    mobile: 'screen and (min-width: 300px) and (max-width: 600px)',
//    tablet: 'screen and (min-width: 600px) and (max-width: 900px)',
//    wide: 'screen and (min-width: 900px) and (max-width: 1200px)',
//    large: 'screen and (min-width: 900px)'
//})

//mediaHandler.in.mobile(function () { console.log("in mobile : " + app.values.medias.mobile) });
//mediaHandler.in.tablet(function () { console.log("in tablet : " + app.values.medias.tablet) });
//mediaHandler.in.wide(function () { console.log("in wide : " + app.values.medias.wide) });
//mediaHandler.in.large(function () { console.log("in large : " + app.values.medias.large) });
//mediaHandler.out.mobile(function () { console.log("out mobile : " + app.values.medias.mobile) });
//mediaHandler.out.tablet(function () { console.log("out tablet : " + app.values.medias.tablet) });
//mediaHandler.out.wide(function () { console.log("out wide : " + app.values.medias.wide) });
//mediaHandler.out.large(function () { console.log("out large : " + app.values.medias.large) });