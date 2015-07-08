function GlobalConfigController($scope, $compile, $http) {

	
	$scope.selectedItems = [];
	$scope.name;
	$scope.value;
	$scope.id;
	$scope.edit = false;
	
	$scope.filterOptions = {
		filterText : "",
		useExternalFilter : false
	};
	
	$scope.totalServerItems = 0;
	$scope.pagingOptions = {
		pageSizes : [ 10, 20, 50 ],
		pageSize : 10,
		currentPage : 1
	};
	$scope.setPagingData = function(data, page, pageSize) {
		var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
		$scope.myData = pagedData;
		$scope.totalServerItems = data.length;
		if (!$scope.$$phase) {
			$scope.$apply();
		}
	};
	$scope.getPagedDataAsync = function(pageSize, page, searchText) {
		setTimeout(
				function() {
					var data;
					if (searchText) {
						var ft = searchText.toLowerCase();
						$http
								.get(
										'/idampasswordmanagement/json/home/setup/configuration-parameters.json')
								.success(
										function(largeLoad) {
											data = largeLoad.filter(function(
													item) {
												return JSON.stringify(item)
														.toLowerCase().indexOf(
																ft) != -1;
											});
											$scope.setPagingData(data, page,
													pageSize);
										});
					} else {
						$http
								.get(
										'/idampasswordmanagement/json/home/setup/configuration-parameters.json')
								.success(
										function(largeLoad) {
											$scope.setPagingData(largeLoad,
													page, pageSize);
										});
					}
				}, 100);
	};

	$scope.getPagedDataAsync($scope.pagingOptions.pageSize,
			$scope.pagingOptions.currentPage);

	$scope.$watch('pagingOptions', function(newVal, oldVal) {
		if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize,
					$scope.pagingOptions.currentPage,
					$scope.filterOptions.filterText);
		}
	}, true);
	$scope.$watch('filterOptions', function(newVal, oldVal) {
		if (newVal !== oldVal) {
			$scope.getPagedDataAsync($scope.pagingOptions.pageSize,
					$scope.pagingOptions.currentPage,
					$scope.filterOptions.filterText);
		}
	}, true);

	$scope.gridOptions = {
		data : 'myData',
		enablePaging : true,
		showFooter : true,
		totalServerItems : 'totalServerItems',
		pagingOptions : $scope.pagingOptions,
		jqueryUITheme: true,
		enableCellSelection: true,
		selectedItems:  $scope.selectedItems,
		filterOptions : $scope.filterOptions,
		showFilter: true,
		multiSelect : true,
		columnDefs : [ {field : 'id',visible : false}, 
		               {field : 'name',displayName: 'Parameter Name'}, 
		               {field : 'value',displayName: 'Value'} 
		              ]
	};
	
	$scope.editParameter = function(){
		if($scope.selectedItems.length === 0){
			return;
		} else if($scope.selectedItems.length > 1){
			bootbox.alert("Please select only one parameter for Modification");
		} else{
			$scope.edit = true;
			$scope.id = $scope.selectedItems[0].id;
			$scope.name = $scope.selectedItems[0].name;
			$scope.value = $scope.selectedItems[0].value;
		}
	}
	
	$scope.createNewParameter = function(){
		$scope.edit = false;
	}
	
	$scope.saveParameter = function(){
		if($scope.edit){
			var currentList = $scope.myData;
			$.each(currentList,function(index,value){
				if(typeof(value) !== 'undefined' &&  value.id === $scope.selectedItems[0].id){
					value.name = $scope.name;
					value.value = $scope.value;
				}
			})
		} else{
			var parameter = {
					"id":"test",
					"name":$scope.name,
					"value":$scope.value
			}
			$scope.myData.push(parameter);
		}
	}
	
	$scope.deleteParameter = function(){
		var currentList = $scope.myData;
		$.each(currentList,function(index,value){
			if(typeof(value) !== 'undefined' &&  value.id === $scope.selectedItems[0].id){
				$scope.myData.splice(index,1);
			}
		})
	}
}
