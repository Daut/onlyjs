;(function () {
    var only = function (obj, keys, ignore) {
        var state = true;

        ignore && ignore.forEach(function (value) {
            delete obj[value];
        });

        keys.forEach(function (value) {
            state = state && (Object.keys(obj).indexOf(value) !== -1);
            if (state) {
                delete obj[value];
            }
        });

        return state && (Object.keys(obj).length === 0);
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = only;
    } else {
        window.only = only;
    }
})();