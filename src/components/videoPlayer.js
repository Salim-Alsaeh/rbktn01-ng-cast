angular.module('video-player')

.component('videoPlayer', {
  templateUrl:'src/templates/videoPlayer.html',
  bindings: {
    video: '=',
    autoplay: '<'
  }, 
  controller: function() {
    this.url = (id, auto = 0) => {
      return `https://www.youtube.com/embed/${id}?autoplay=${auto}`
    };
  },
});
