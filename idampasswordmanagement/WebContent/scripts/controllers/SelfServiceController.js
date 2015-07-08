function SelfServiceController($scope, $compile, $http,dataService,$state) {
	
	$scope.ad = {};
	$scope.db= {};
	$scope.fromFirstPage = false;
	
	//overall length requirements	
	$scope.BoolCheckLen = 1;

	//Upper case constarints	
	$scope.goodUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	//Lower case constraints	
	$scope.goodLowerCase = "abcdefghijklmnopqrstuvwxyz";

	//Number constraints
	$scope.goodNumbers = "0123456789";
	
	//Special Character Constraints
	$scope.goodSpecial = "\"<>$~\'`!@#%^&*()-+{}[]=:,.?/|\\";
	$scope.badSpecial = "";
	
//Repeating Char Constraints		'AAA, 111, etc.
	
//Sequential Char Constraints		'abc, 123, etc.
	$scope.intSequenceMax = 4;

//Pattern Constraints		'A..A etc.
	$scope.BoolCheckPattern   = 0;
	
//variables that monitor if the required components are found	
	$scope.boolSequenceFound = false;
  
	$scope.targets = [];
	$scope.targets.push('AD');
	$scope.targets.push('DB');

	$scope.targetInfo = {};
	$scope.targetInfo['AD'] = {name : "AD"};
	$scope.targetInfo['DB'] = {name : "DB"};


	$scope.validationMap = {};
	$scope.validationMap['AD'] = { size: [8,20] , upper: [1,5] , lower : [1,7], number : [1,5] , notSameAsuserName : true , special : [1,999]};
	$scope.validationMap['DB'] = { size: [10,20] , upper: [1,5] , lower : [0,7], number : [1,5] ,special : [1,999]};
	
	$scope.adList = [];
	$scope.dbList = [];
	
	$scope.checkPW = function(event){
			var target = "";
			var passwordIndex = 0;
			var verifyIndex = 0; 
			var bVerifyField = false;
			var alertBoxMsg = "";
			
				
			$.each($scope.targets,function(i,v){
				if(event.currentTarget.name.indexOf($scope.targetInfo[v].name) > -1){
					target = v;
				}
			})
			var valToCheck = "";
			var valToVerify = ""
			if(target === 'AD'){
				valToCheck = $scope.ad.password;
				valToVerify = $scope.ad.passwordVerify;
			} else{
				valToCheck = $scope.db.password
				valToVerify = $scope.db.passwordVerify;
			}
			
			if(valToCheck === valToVerify){
				$scope.flipStatus(target,"verify", 1);
			} else{
				$scope.flipStatus(target,"verify", 0);
			}
			
			//now start checking the rules...

			var intUpperCount	= 0;
			var intLowerCount	= 0;
			var intNumberCount	= 0;
			var intSpecialCount	= 0;

			var charToCheck = ""
			  
			//loop through the value of PW

			for( var x = 0; x < valToCheck.length; x++ )	{		//x=0; x < Password.8; x++ 

				var charToCheck = valToCheck.charAt(x)

				//check UPPER case:
				if ($scope.goodUpperCase.indexOf(charToCheck, 0) > -1) 	{
						intUpperCount++;
				}		
				////
				
				//check lower case
					if ($scope.goodLowerCase.indexOf(charToCheck,0) > -1) 	{
						intLowerCount++;
					}
				////
				
				//ch3ck numb3r5:
					if ($scope.goodNumbers.indexOf(charToCheck,0) > -1) 	{
						intNumberCount++;
					}
				////

				//check speci@!:
					if ($scope.goodSpecial.indexOf(charToCheck,0) > -1) 	{
						intSpecialCount++;
					}
					
					if ($scope.badSpecial.indexOf(charToCheck,0) > -1) 	{
						illegalChar = charToCheck
						window.alert("Character: " + charToCheck + " is not allowed.");
					}
				/////
			}


			//Set status for completed items	
			//UPPER CASE
			if (intUpperCount >= $scope.validationMap[target].upper[0] && intUpperCount <= $scope.validationMap[target].upper[1]) {
				$scope.flipStatus(target,"upper", 1);
				}
				else {
				$scope.flipStatus(target,"upper", 0);
				}


			//lower case
			if (intLowerCount >= $scope.validationMap[target].lower[0] && intLowerCount <= $scope.validationMap[target].lower[1]) {
				$scope.flipStatus(target,"lower", 1);
			}
			else {
				$scope.flipStatus(target,"lower", 0);
			}

			//numb3r5
			if (intNumberCount >= $scope.validationMap[target].number[0] && intNumberCount <= $scope.validationMap[target].number[1]) {
				$scope.flipStatus(target,"number", 1);
			}

			else {
				$scope.flipStatus(target,"number", 0);
			}

			//$peci@! [h@r@cter$	
			if (intSpecialCount >= $scope.validationMap[target].special[0] && intSpecialCount <= $scope.validationMap[target].special[1]) {
				$scope.flipStatus(target,"special", 1);
			}

			else {
				$scope.flipStatus(target,"special", 0);
			}
			////

			// check length
			if ($scope.BoolCheckLen == 1) {
				
				if (valToCheck.length >= $scope.validationMap[target].size[0] && valToCheck.length <= $scope.validationMap[target].size[1]) {
					$scope.flipStatus(target,"size", 1);
				}
				else {
					$scope.flipStatus(target,"size", 0);
				}
			}
			// Check pattern

			if ($scope.BoolCheckPattern == 1) {

			var strAllLetters = $scope.goodUpperCase+$scope.goodLowerCase;

				if ((valToCheck != "") && (strAllLetters.indexOf(valToCheck.charAt(0)) >-1) && (strAllLetters.indexOf(valToCheck.charAt(valToCheck.length-1))> -1)) {
					$scope.flipStatus("infoPattern", 1);
				}
				else {
					$scope.flipStatus("infoPattern", 0);
				}
			}

			if (boolSequenceCheck = 1) {
				$scope.boolSequenceFound = false;
				var subStrCheck = ""
				if (valToCheck.length >= $scope.intSequenceMax) {
					 for (var i=0; i < valToCheck.length - $scope.intSequenceMax + 1; i++)  {
						subStrCheck = valToCheck.substring(i, i + $scope.intSequenceMax);
						
//							window.alert(subStrCheck + "\n" + goodUpperCase);
//							window.alert(goodUpperCase.indexOf(subStrCheck, 0));
						
						if ($scope.goodUpperCase.indexOf(subStrCheck, 0) > -1) {
							$scope.boolSequenceFound = true;
						}
						if ($scope.goodLowerCase.indexOf(subStrCheck, 0) > -1) {
							$scope.boolSequenceFound = true;
						}
						if ($scope.goodNumbers.indexOf(subStrCheck, 0) > -1) {
							$scope.boolSequenceFound = true;
						}				
					}
				}
				if ($scope.boolSequenceFound == false) {
					$scope.flipStatus("infoSequence", 1);
				}
					else{
					$scope.flipStatus("infoSequence", 0);
				}
			}
				
			//////
			//Check password and verify password fields match
				if (valToVerify == valToCheck && valToVerify.length > 0 && valToCheck.length > 0) {
					$scope.flipStatus(target,"verify", 1);
					}
				else {
					$scope.flipStatus(target,"verify", 0);
				}

			///end of function	
	}
	
	$scope.flipStatus = function(target, ruleId ,ruleOK){
		
			if(ruleOK === 1){
				$("."+target+ruleId).css("color","green");
			} else{
				$("."+target+ruleId).css("color","red"); 
			}	
	}
	
	
	$scope.formList = function(){
		$.each($scope.targets, function( index, value ) {
			var list = [];
			$.each( $scope.validationMap[value], function(i, n){
				if(i === "size")
				{
					list.push({name : "Must be between "+n[0]+" and "+n[1]+" characters in length.",target :value, ruleId : "size"});
				}
				else if(i === "upper")
				{
					list.push({name : "Must contain at least "+n[0]+" and no more than "+n[1]+" UPPER CASE characters.",target :value, ruleId : "upper"});				
				}
				else if(i === "lower")
				{
					list.push({name : "Must contain at least "+n[0]+" and no more than "+n[1]+" lower case characters.",target :value, ruleId : "lower"});						
				}
				else if(i === "number")
				{
					list.push({name : "Must contain at least "+n[0]+" and no more than "+n[1]+" numbers.",target :value, ruleId : "number"});
				}
				else if(i === "special")
				{
					if(n[0] === 1 && n[1] === 999)
					{
						list.push({name : "May contain these characters:\" < > $ ~ ' ` ! @ # % ^ & * ( ) - + { } [ ] = : , . ? / \ | ",target :value, ruleId : "special"});
					}
					else
					{
						list.push({name : "Must contain at least "+n[0]+" and no more than "+n[1]+" special characters:\" < > $ ~ ' ` ! @ # % ^ & * ( ) - + { } [ ] = : , . ? / \ |  .",target :value, ruleId : "special"});
					}
				}
				else if(i === "notSameAsuserName")
				{
					list.push({name : "Must not be same as the Username"});
				}			
			});
			list.push({name : "Must match the verify password field.",target :value, ruleId : "verify"});
			if(value === 'AD'){
				$scope.adList = list;
			} else if(value === 'DB'){
				$scope.dbList = list;
			}
		});
	}

	$scope.formList();

	$scope.processForm = function() {

		var masterUser = {};
		masterUser.helpDesk = "false";
		masterUser.ad = $scope.ad.password;
		masterUser.db = $scope.db.password;

		$http.post('rest/user/resetPasswordIdAM', masterUser).success(
				function(data, status, headers, config) {
					$scope.ad.result = data.ad.status;
					$scope.ad.message = data.ad.msg;
					$scope.db.result = data.db.status;
					$scope.db.message = data.db.msg;
					$state.go('self-service.result');
					
				}).error(function(data, status, headers, config) {
					$scope.ad.result = data.ad.status;
					$scope.ad.message = data.ad.msg;
					$scope.db.result = data.db.status;
					$scope.db.message = data.db.msg;
					$state.go('self-service.result');
		});

	};
	
	$scope.goinside = function(){
		$scope.fromFirstPage = true;
		$state.go('self-service.auth2');
	};
	
	$scope.navigate = function(){
		if($scope.fromFirstPage){
			$state.go('login');
		} else{
			$state.go('home');
		}
	};
}
