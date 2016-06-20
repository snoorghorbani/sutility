;this.dashCase = function (str) {
    return str.replace(/([A-Z])|([\W|\_])/g, function (match, a, b, index, originText) {
        return (!(/[\w]/.test(match))) ? '-'
          : (/[\w]/.test(match && index == 0)) ? match.toLowerCase()
          : (/[\w]/.test(match)) ? '-' + match.toLowerCase()
          : '-';
    });
};