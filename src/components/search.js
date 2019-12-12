angular.module('video-player')

.component('search', {
  templateUrl:'src/templates/search.html',
  controller: function(youTube){
    this.params = {
      maxResults: 5,
      query: '',
      key: window.YOUTUBE_API_KEY
    };
    this.result = (callback) => {
      youTube.search(callback, this.params);
    }
  },
  bindings:{
    search:'='
  }
});

angular.module('video-player').directive('ngEnter', function () {
  return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
          if(event.which === 13) {
              scope.$apply(function (){
                  scope.$eval(attrs.ngEnter);
              });

              event.preventDefault();
          }
      });
  };
});
