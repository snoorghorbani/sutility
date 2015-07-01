this.randColor = function () {
    var r = this.random(1, 256).toFixed();
    var g = this.random(1, 256).toFixed();
    var b = this.random(1, 256).toFixed();
    var a = 1;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};