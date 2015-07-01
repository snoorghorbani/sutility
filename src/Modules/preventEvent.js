
this.preventEvent = function (e) {
    var eve = e || window.event;
    eve.preventDefault();
    eve.stopPropagation();
};
