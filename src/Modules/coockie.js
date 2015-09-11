this.cookie = (function (_) {
                var Fn = function () { };

                Fn.set = function (key, value, exdays) {
                    if (_.is.object(value)) {
                        value = JSON.stringify(value);
                    }
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toUTCString();

                    document.cookie = _.compileString('{{key}}={{value}};{{expires}},', { key: key, value: value, expires: expires });
                    return document.cookie;
                };
                Fn.get = function (key) {
                    var name = key + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1);
                        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
                    }
                    return "";
                };
                Fn.remove = function (key) {
                    Fn.set(key, '', 0);
                };

                return Fn;
            })(this);