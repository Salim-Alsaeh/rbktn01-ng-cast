angular.module('video-player')

.controller('SearchController', function() {
  this.handleClick = () => {
    this.service.search(this.input, (data) => {
      this.result(data);
    });
  };
})
.component('search', {

  bindings: {
    service: '<',
    result: '<'
  },
  controller: 'SearchController',
  templateUrl: 'src/templates/search.html'
  });
