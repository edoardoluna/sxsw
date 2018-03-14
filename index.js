const Alexa = require('alexa-sdk');
const startHandlers = require('start-handlers');
const videoHandlers = require('video-handlers');
const config = require('./secrets/config.json')

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = config.APP_ID;
  alexa.registerHandlers(startHandlers.handlers, videoHandlers.handlers);
  alexa.execute();
};
