app.factory('Item', ['$resource', function($resource) {
  function Item() {
    this.service = $resource('/api/items/:itemId', {itemId: '@id'}); 
   };

   Item.prototype.all = function() {
    return this.service.query();
   };

   return new Item;
  }]);
