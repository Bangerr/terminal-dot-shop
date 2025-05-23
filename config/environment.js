'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'terminal-dot-shop',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-simple-auth': {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'coffees',
      routeIfAlreadyAuthenticated: 'coffees',
    },
    terminalShopOAuth2: {
      TERMINAL_SHOP_CLIENT_ID: process.env.TERMINAL_SHOP_CLIENT_ID,
      TERMINAL_SHOP_CLIENT_SECRET: process.env.TERMINAL_SHOP_CLIENT_SECRET,
      TERMINAL_SHOP_REDIRECT_URI: '',
      TERMINAL_SHOP_AUTHORIZE_URL: 'https://auth.terminal.shop/authorize',
      TERMINAL_SHOP_API_BASE: 'https://api.terminal.shop',
      TERMINAL_SHOP_TOKEN_URL: 'https://auth.terminal.shop/token',
      scope: 'lol',
    },
  };

  if (environment === 'development') {
    ENV.terminalShopOAuth2.TERMINAL_SHOP_REDIRECT_URI = 'http://localhost:4200/auth/callback';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.terminalShopOAuth2.TERMINAL_SHOP_REDIRECT_URI = 'https://terminal-dot-shop.pages.dev/auth/callback';
  }

  return ENV;
};
