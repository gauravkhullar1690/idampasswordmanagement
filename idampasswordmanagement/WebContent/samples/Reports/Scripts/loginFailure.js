// app.js
angular.module('sortApp', ['ngTable', 'ngTableExport'])

.controller('mainController', function($scope, NgTableParams, $sce) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.fname   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [{name: "002015", fname: "Moroni", lname: "Razor", system: "Account Closure", age: 50},
				{name: "003981", fname: "Tiancum", lname: "Kruzer", system: "Finn One", age: 43},
				{name: "007809", fname: "Jacob", lname: "Williams", system: "Prime Jobs", age: 27},
				{name: "005109", fname: "Nephi", lname: "Hughes", system: "Finn One", age: 29},
				{name: "003981", fname: "Tiancum", lname: "Kruzer", system: "Prime Jobs", age: 67},
				{name: "003981", fname: "Tiancum", lname: "Kruzer", system: "Account Closure", age: 119},
				{name: "002015", fname: "Moroni", lname: "Razor", system: "CSF", age: 89},
				{name: "006051", fname: "Nephi", lname: "Joles", system: "CSF", age: 199},
				{name: "019867", fname: "Enos", lname: "Grates", system: "Active Directory", age: 34},
				{name: "003981", fname: "Tiancum", lname: "Kruzer", system: "Active Directory", age: 167},
				{name: "007809", fname: "Jacob", lname: "Williams", system: "CSF", age: 227},
				{name: "005109", fname: "Nephi", lname: "Hughes", system: "Active Directory", age: 209},
				{name: "019867", fname: "Enos", lname: "Grates", system: "Finn One", age: 349},
				{name: "003981", fname: "Tiancum", lname: "Kruzer", system: "CSF", age: 197},
				{name: "007809", fname: "Jacob", lname: "Williams", system: "Active Directory", age: 327},
				{name: "005109", fname: "Nephi", lname: "Hughes", system: "Account Closure", age: 95},
				{name: "019867", fname: "Enos", lname: "Grates", system: "Finn One", age: 34}];
				
	
	$scope.tableParams = new NgTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: $scope.sushi.length, // length of $scope.sushi
                getData: function($defer, params) {
                    $defer.resolve($scope.sushi.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });
});