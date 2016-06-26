;
this.date = (function () {
    var PERSIAN_EPOCH = 1948320.5,
        GREGORIAN_EPOCH = 1721425.5;

    var date = {};
    date.persian = {};
    date.persian.to = {};
    date.georgian = {};
    date.georgian.to = {};
    date.julian = {};
    date.julian.to = {};

    date.persian.to.julian = function (year, month, day) {
        var epbase, epyear;
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);

        epbase = year - ((year >= 0) ? 474 : 473);
        epyear = 474 + _.math.mod(epbase, 2820);

        return day +
                ((month <= 7) ?
                    ((month - 1) * 31) :
                    (((month - 1) * 30) + 6)
                ) +
                Math.floor(((epyear * 682) - 110) / 2816) +
                (epyear - 1) * 365 +
                Math.floor(epbase / 2820) * 1029983 +
                (PERSIAN_EPOCH - 1);
    }
    date.persian.to.georgian = function (year, month, day) {
        return date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
    }

    date.georgian.to.julian = function (year, month, day) {
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);

        return (GREGORIAN_EPOCH - 1) +
               (365 * (year - 1)) +
               Math.floor((year - 1) / 4) +
               (-Math.floor((year - 1) / 100)) +
               Math.floor((year - 1) / 400) +
               Math.floor((((367 * month) - 362) / 12) +
               ((month <= 2) ? 0 :
                                   (_.is.georgianLeapYear(year) ? -1 : -2)
               ) +
               day);
    }
    date.georgian.to.persian = function (year, month, day) {
        return date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
    }

    date.julian.to.georgian = function (jd) {
        var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,
            yindex, dyindex, year, month, day, yearday, leapadj;
        jd = parseInt(jd);

        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = _.math.mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = _.math.mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = _.math.mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - _.date.georgian.to.julian(year, 1, 1);
        leapadj = ((wjd < _.date.georgian.to.julian(year, 3, 1)) ? 0
                                                      :
                      (_.is.georgianLeapYear(year) ? 1 : 2)
                  );
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - _.date.georgian.to.julian(year, month, 1)) + 1;

        return new Array(year, month, day);
    }
    date.julian.to.persian = function (jd) {
        var year, month, day, depoch, cycle, cyear, ycycle,
            aux1, aux2, yday;
        jd = parseInt(jd);

        jd = Math.floor(jd) + 0.5;

        depoch = jd - _.date.persian.to.julian(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = _.math.mod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        } else {
            aux1 = Math.floor(cyear / 366);
            aux2 = _.math.mod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
                        aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year--;
        }
        yday = (jd - _.date.persian.to.julian(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - _.date.persian.to.julian(year, month, 1)) + 1;
        return new Array(year, month, day);
    }

    return date;
})()
;
