this.trim = function (str) {
    return str.replace(/^\\s*(\\S*(\\s+\\S+)*)\\s*$/, "$1");
}