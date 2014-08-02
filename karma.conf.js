/*globals module,process,require */
module.exports = function(config) {
   "use strict";

   config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
         "test/vendor/jquery/jquery.min.js",
         "test/vendor/underscore/underscore-min.js",
         "lib/pow-core.js",
         "lib/test/*.js"
      ],
      reporters: ['dots'],
      port: 9876,
      autoWatch: true,
      background:true,
      // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS, IE (only Windows)
      browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],
      singleRun: false,
      reportSlowerThan: 500,
      plugins: [
         'karma-firefox-launcher',
         'karma-chrome-launcher',
         'karma-jasmine'
      ]
   });
};