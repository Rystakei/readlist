app.factory('Item', ['$resource', function($resource) {
  function Item() {
    this.service = $resource('/api/items/:itemId', {itemId: '@id'}); 
   };

   Item.prototype.all = function() {
    return this.service.query();
   };

   Item.prototype.delete = function(itemId) {
    console.log("Attempting to delete item #",itemId);
    this.service.remove({itemId: itemId});
   }

   return new Item;
  }]);
