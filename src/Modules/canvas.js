this.canvas = (function (_) {
    var Fn = function () { };
    
    fn.arc = function (ctx, x, y, r, f, t, b) {
        ctx.beginPath();
        ctx.arc(x, y, r, f, t, b);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };
    fn.rect = function (ctx, x, y, w, h, fill, stroke) {
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.closePath();
        if (fill !== false) ctx.fill();
        if (stroke !== false) ctx.stroke();
    };
    fn.text = function (ctx, text, x, y) {
        ctx.beginPath();
        ctx.fillText(text, x, y);
        ctx.fill();
        ctx.closePath();

    };
    fn.line = function (ctx, startPoint, endPoint) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.closePath();
        ctx.stroke();
    };
})(this)
