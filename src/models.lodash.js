'use strict';

angular.module('angular.models')

// Lodash reference
.factory('_', ['$window',
  function ($window) {
    'use strict';
    var _ = $window._;

    return _;
  }
]);