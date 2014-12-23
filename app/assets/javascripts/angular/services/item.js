app.factory('Item', ['$resource', function($resource) {
  function Item() {
    this.service = $resource('/api/items/:itemId', {itemId: '@id'}, {'update': {method: 'PUT'}}); 
   };

   Item.prototype.all = function() {
    return this.service.query();
   };

   Item.prototype.delete = function(itemId) {
    console.log("Attempting to delete item #",itemId);
    this.service.remove({itemId: itemId});
   }

  Item.prototype.create = function(attr){
    console.log("create item..");
    return this.service.save(attr);
  }

  Item.prototype.update = function(attr){
    console.log("Attempting to update item #",attr);
    return this.service.update(attr);
  }
  
   return new Item;
  }]);
