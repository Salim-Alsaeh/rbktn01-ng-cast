angular.module('video-player')

.component('app', {
  controller: function () {
    this.autoplay = 0;
    this.autoFlag = false;
    this.selectVideo = (video) => {
      if (!!this.autoFlag) {
        this.autoplay = 1;
      }
      this.currentVideo = video
    };
    this.searchResults = (result) => {
      this.videos = result;
      this.selectVideo(this.videos[0])
      this.autoFlag = true;
    };
    this.videos = window.exampleVideoData;
    this.currentVideo = !!this.videos ? this.videos[0] : {};
    this.test = (video) => {
      console.log(video)
    };
    
  },
  templateUrl: 'src/templates/app.html'
});
