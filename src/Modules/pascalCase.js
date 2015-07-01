this.pascalCase = function (str) {
    if (DEBUG) {
        if (!str) debugger;
    }
    return str[0].toUpperCase() + str.substr(1, str.lenght);
};
