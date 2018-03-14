const startHandlers = {
  "LaunchRequest" : function() {
      //emit response directly
      this.emit(':tell', 'Hello, Welcome to Practice Hero!');
  },
  "HelloWorldIntent" : function() {
      //emit response directly
      this.emit(':tell', 'Hello World!');
  },
  "Unhandled" : function() {
      //emit response directly
      this.emit(':tell', 'I don\'t understand what are you saying lol.');
  }
};

exports.handlers = startHandlers;