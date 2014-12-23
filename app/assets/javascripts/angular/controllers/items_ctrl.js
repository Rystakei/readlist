app.controller('ItemsCtrl', ['$scope', 'Item', function($scope, Item){
  $scope.items = Item.all(); 

  $scope.newItem = {title: 'AngularJS: Up and Running', 
  in_progress: true,
  current_page: 100,
  total_pages: 400
};


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

  $scope.changeStatus = function(item, readingStatus) {
    console.log("selectedItem", item);
    item.inProgress = readingStatus;
    // $scope.getCurrentStatus();
    console.log($scope.items);
  }

  $scope.deleteItem = function(id, index){
    console.log("Deleting item with index",index);
    $scope.items.splice(index, 1);
    return Item.delete(id); 
    $scope.$apply();
  }
  $scope.changeItemTemplate = $('#change-item-template').html();


  $scope.addItem = function(in_progress) {
    $('.add-new-item').fadeIn();
    $('.add-me').fadeOut();
  }

  $scope.createItem = function(){
    $scope.items.push(Item.create($scope.newItem));
    $('.add-new-item').hide().val('');
    $('.add-me').show();
  }

  $scope.updateItem = function(item,id, attr){
    var updatedItemIndex = $scope.items.indexOf(item);
    var itemToUpdate = $scope.items[updatedItemIndex];
    itemToUpdate.in_progress = attr;
    console.log("Just updated item in Angular", itemToUpdate);
    console.log("Step one, id--", id);
    Item.update({id: id, in_progress: attr});
  }

  $scope.discardItem = function(){
    console.log("discardme!");
    $('.add-new-item').fadeOut().val('');
    $('.add-me').fadeIn();
    console.log("Discarded?");
  }

}]);
