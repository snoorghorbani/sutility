angular.module('sutility', [])
    .provider('_', function () {
        return {
            _: window.SUTILITY.install(),
            $get: function () {
                return window.SUTILITY.install();
            }
        };
    });