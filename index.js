const Alexa = require('alexa-sdk');
const startHandlers = require('start-handlers');
const videoHandlers = require('video-handlers');
const config = require('./secrets/config.json')

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = config.APP_ID // APP_ID is your skill id which can be found in the Amazon developer console where you create the skill.
  alexa.registerHandlers(startHandlers.handlers, videoHandlers.handlers);
  alexa.execute();
}
