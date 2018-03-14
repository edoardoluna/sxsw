const videoHandlers = {
  "StartPracticeIntent" : function() {
    //emit response directly
    // this.emit(':tell', 'Ok, now I will play the video');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video.mp4';
    const metadata = {
      'title': 'Counting Stars',
      'subtitle': 'Practice Hero Backing Track @ 120BPM'
    };
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');
  },
  "IncreaseTempoIntent" : function() {
    //emit response directly
    // this.emit(':tell', 'Ok, faster');
    this.response.speak('Ok, faster!');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video_fast.mp4';
    const metadata = {
      'title': 'Counting Stars',
      'subtitle': 'Practice Hero Backing Track @ 130BPM'
    };
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');

  },
  "DecreaseTempoIntent" : function() {
    //emit response directly
    this.response.speak('Ok, slower!');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video_slow.mp4';
    const metadata = {
      'title': 'Counting Stars',
      'subtitle': 'Practice Hero Backing Track @ 110BPM'
    };
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');
  },
  "GoBackToPartIntent" : function() {
    //emit response directly
    const partName = this.event.request.intent.slots.PartName.value;
    console.log(JSON.stringify(this.event.request.intent.slots.PartName));
    this.response.speak('Ok, go back to part ' + partName);

    //TODO play certain videos

    this.emit(':responseReady');
  }
};

exports.handlers = videoHandlers;