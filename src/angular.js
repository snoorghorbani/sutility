angular.module('sutility', [])
    .provider('_', function () {
        return {
            _: SUTILITY.install(),
            $get: function () {
                return window.SUTILITY.install();
            }
        };
    });