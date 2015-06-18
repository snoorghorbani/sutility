this.compare = function (value, condition, param) {
    switch (condition) {
        case 'eq':
            return value == param;
        case 'neq':
            return value != param;
        case 'grt':
            return value > param;
        case 'lst':
            return value < param;
        case 'ct':
            return value.toString().indexOf(param.toString()) > -1;
    }
};
this.compare.conditions = { 'equal': 'eq', 'neq': 'neq', 'grt': 'grt', 'lst': 'lst', 'ct': 'ct' };
