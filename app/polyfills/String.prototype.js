(function () {
    'use strict';

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (search, pos) {
            return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        };
    }
}());

(function () {
    'use strict';

    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (search, this_len) {
            if (this_len === undefined || this_len > this.length) { // eslint-disable-line angular/definedundefined
                this_len = this.length;
            }
            return this.substring(this_len - search.length, this_len) === search;
        };
    }
}());