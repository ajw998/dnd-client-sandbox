const webpack = require('webpack');
const dotenv = require('dotenv');

global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

dotenv.config();

module.exports = function (config, env) {
  config.resolve.alias.src = env.src;
  config.plugins.push(
    // Variables injected at compile time
    new webpack.DefinePlugin({
      __FIREBASE_AUTH_DOMAIN__: JSON.stringify(process.env.AUTH_DOMAIN), 
      __ENV__: JSON.stringify(process.env.ENV), 
      __PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID),
      __FIREBASE_API_KEY__: JSON.stringify(process.env.FIREBASE_API_KEY),
      __FEATURE_CHARACTER_DETAILS__: JSON.stringify(false),
      __FEATURE_CALCULATOR__: JSON.stringify(false),
      __SUPER_ADMIN_ID__: JSON.stringify(process.env.SUPER_ADMIN_ID),
      __APP_ID__: JSON.stringify(process.env.APP_ID),
      __STORAGE_BUCKET__: JSON.stringify(process.env.STORAGE_BUCKET),
      __MESSAGING_SENDER_ID__: JSON.stringify(process.env.MESSAGING_SENDER_ID),
    }),
  );
};
