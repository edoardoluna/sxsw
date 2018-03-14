const _ = require('lodash')
const parts = require('./partIntent.json')

const generateVideoMeta = (bpm) => {
  return {
    'title': 'Get Lucky',
    'subtitle': `Practice Hero Backing Track @ ${bpm}BPM`
  };
}

const videoHandlers = {
  "StartPracticeIntent" : function() {
    //emit response directly
    // this.emit(':tell', 'Ok, now I will play the video');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video.mp4';
    const metadata = generateVideoMeta(116);
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');
  },
  "IncreaseTempoIntent" : function() {
    //emit response directly
    // this.emit(':tell', 'Ok, faster');
    this.response.speak('Ok, faster!');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video.mp4';
    const metadata = generateVideoMeta(126);
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');

  },
  "DecreaseTempoIntent" : function() {
    //emit response directly
    this.response.speak('Ok, slower!');
    const videoSource = 'https://s3.amazonaws.com/practicehero/example_video_slow.mp4';
    const metadata = generateVideoMeta(106);
    this.response.playVideo(videoSource, metadata);
    this.emit(':responseReady');
  },
  "GoBackToPartIntent" : function() {
    //emit response directly
    const partName = this.event.request.intent.slots.PartName.value;
    console.log(JSON.stringify(this.event.request.intent.slots.PartName));

    const isIntro = _.find(
                      _.get(this.event, 'request.intent.slots.PartName.resolutions.resolutionsPerAuthority.0.values', []), 
                      (item) => {
                        return _.get(item, 'value.name', '').indexOf('intro') > -1
                      }
                    )

    const isChorus = _.find(
                      _.get(this.event, 'request.intent.slots.PartName.resolutions.resolutionsPerAuthority.0.values', []), 
                      (item) => {
                        return _.get(item, 'value.name', '').indexOf('chorus') > -1
                      }
                    )

    const isInstrumental = _.find(
                      _.get(this.event, 'request.intent.slots.PartName.resolutions.resolutionsPerAuthority.0.values', []), 
                      (item) => {
                        return _.get(item, 'value.name', '').indexOf('instrumental') > -1
                      }
                    )

    if(isIntro) {
      const videoSource = parts['introStart&End'];
      const metadata = generateVideoMeta(116);
      this.response.playVideo(videoSource, metadata);
    } else if(isChorus) {
      const videoSource = parts['chorusStart&End'];
      const metadata = generateVideoMeta(116);
      this.response.playVideo(videoSource, metadata);
    } else if(isInstrumental) {
      const videoSource = parts['instrumentalStart&End'];
      const metadata = generateVideoMeta(116);
      this.response.playVideo(videoSource, metadata);
      
    }

    // this.response.speak('Ok, go back to part ' + partName);

    //TODO play certain videos

    this.emit(':responseReady');
  }
};

exports.handlers = videoHandlers;