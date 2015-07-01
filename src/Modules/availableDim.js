this.availableDim = function () {
    var inner = document.createElement('div');
    
    inner.style.position = 'fixed';
    inner.style.top = '0px';
    inner.style.right = '0px';
    inner.style.bottom = '0px';
    inner.style.left = '0px';
    document.body.appendChild(inner);
    
    var height = inner.offsetHeight;
    var width = inner.offsetWidth;
    inner.parentNode.removeChild(inner);
    return {
        height: height,
        width: width
    };
};
