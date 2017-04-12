/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ethereum-play-web3js',
    podModuePrefix:'ethereum-play-web3js/modules',
	  //web3Provider: 'http://localhost:8545',
    web3UserPassword:'smile921',
    web3AccountAddr:'',
  	web3Provider: 'http://10.88.1.61:8545',
    web3Provider3: 'http://112.64.159.162:10005',
    web3Provider1: 'http://127.0.0.1:8545',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  // ENV.contentSecurityPolicy = {
  //   // ... other stuff here
  //   // 'connect-src': "'self' http://112.64.159.162:10005"
  //   'connect-src': "'self' http://127.0.0.1:8545"
  // }
  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
