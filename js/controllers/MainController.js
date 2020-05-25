app.controller('MainController', ['$scope', function($scope) { 
  	$scope.patient = {
  		title: "My List of Patients"
  		list: ["Hamilton, Margaret", "Hopper, Grace", "Lovelace, Ada"]
  	}

  	$scope.addItem = function(itemList, item) {
  		itemList.push(item);
  	}
}]);
