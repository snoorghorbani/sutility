this.compileString = function (str, varDef, fn) {
    var regex = /\{\{/;
    var result = [];
    var varStartIdx = str.search(regex);
    if (varStartIdx > -1) {
        result[result.length] = str.substring(0, varStartIdx);
        str = str.substring(varStartIdx);
        
        var varEndIdx = str.search(/\}\}/);
        //TODO :: window and scope check 
        var varKey = str.substring(2, varEndIdx);
        var varValue = varDef[varKey.trim()];
        if (this.is.object(varValue))
            varValue = fn.call(null, varValue);
        
        result[result.length] = varValue;
        
        str = str.substring(varEndIdx + 2);
        
        //recur
        result = result.concat(this.compileString(str, varDef, fn));
    } else {
        result[result.length] = str;
    }
    return result.join('');
};
