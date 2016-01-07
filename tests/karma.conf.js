module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.0/angular-mocks.js',
      'app/js/*.js',
      'tests/unit/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
