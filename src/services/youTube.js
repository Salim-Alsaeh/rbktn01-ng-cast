angular.module('video-player')
.service('youTube', function($http){
  this.search = (callback, {maxResults, query, key}) => {
    // console.log(callback, {maxResults, query, key})

    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: maxResults,
        key: key,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });

    // $http({
    //   method: 'GET',
    //   url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params.maxResults}&q=${!!params.query ? params.query : 'AngularJs'}&key=${params.key}`,
    //   data: 'parameters'
      
    //   }).then(function success(response) {
    //     console.log(response)
    //    callback(response.data.items);      
    //   }, function error(response) {
      
    //   // this function will be called when the request returned error status
      
    //   });
  }
});
