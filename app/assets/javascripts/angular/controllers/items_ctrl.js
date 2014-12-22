app.controller('ItemsCtrl', ['$scope', '$resource', function($scope, $resource){
  var Items = $resource('/api/items');
  $scope.items = Items.query();


  $scope.progressRate = function(readPages, totalPages) {
    return (readPages / totalPages) * 100; 
  }

  $scope.dailyRate = 100; 
  $scope.startDate = "12/1/2014";

  $scope.finishDate = function() {
    return new Date(); 
  }

  $scope.website = ["http://sxywu.github.io/80k/#default/2PIC", "Annual salary and cost of living for a Station Agent depending on Bart and Union proposals"];

  $scope.p1 = "Shadow DOM";

  $scope.addToQueue = function() {
    $('.queue-body').append($("<tr><td>Title Here</td><td>Random, Tags</td></tr>"));
  }

  $scope.changeStatus = function(index, readingStatus) {
    console.log("selectedItem", $scope.items[index]);
    $scope.items[index].inProgress = readingStatus;
    // $scope.getCurrentStatus();
    console.log($scope.items);
  }

}]);