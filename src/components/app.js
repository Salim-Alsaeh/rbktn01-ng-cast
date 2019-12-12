angular.module('video-player')

.controller('AppCtrl', function(youTube) {

  this.searchService = youTube;
  this.searchResults = (data) => {
    this.videos = data;
    this.currentVideo = this.videos[0];
  };

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  youTube.search('javascript tutorial', this.searchResults);
})
.component('app', {

  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
  });
