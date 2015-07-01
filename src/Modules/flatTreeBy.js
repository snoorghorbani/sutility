this.flatTreeBy = function (data, childAttr, parentAttr, res, parentIdn, defaultRootValue, depth) {
    res = res || [];
    depth = depth || 0;
    _.each(_.cloneObj(data), function (item) {
        //TODO :: check for dont have "parentIdn" & "depth" attr
        item.parentIdn = parentIdn || defaultRootValue || 'root';
        item.depth = depth;
        res.push(item);
        if (item[childAttr] && item[childAttr].length > 0) {
            that.flatTreeBy(item[childAttr], childAttr, parentAttr, res, item[parentAttr], defaultRootValue, depth + 1);
        }
        delete item[childAttr];
    });
};
