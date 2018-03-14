const videoHandlers = {
  "StartPracticeIntent" : function() {
    //emit response directly
    // this.emit(':tell', 'Ok, now I will play the video');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video.mp4';
    const metadata = {
      'title': 'Title for Sample Video',
      'subtitle': 'Secondary Title for Sample Video'
    };
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');
  }
};

exports.handlers = videoHandlers;