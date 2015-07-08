




function flipStatus(target, ruleId ,ruleOK)   {
	if(ruleOK === 1){
		$("."+target+ruleId).css("color","green");
	} else{
		$("."+target+ruleId).css("color","red"); 
	}	
}


function repeatCheck(valToCheck){
	//add additional \1 to raise or lower repeat check count.
    return !/(.)\1\1/.test(valToCheck)
}

 
//clears the password field when user fails auth step
function clearPassword() {
	var collButtons = document.getElementsByTagName('input');
	
	for (var iIdx=collButtons.length-1;iIdx>=0;iIdx--) {
		if (collButtons[iIdx].type == 'password')  {
			collButtons[iIdx].value = '';
		}
	}
}

function maincheck()
{
	changeNextAction();
	document.onkeydown = ValidateEnter;
}

function changeNextAction()
{
	var btnNext = document.body.getElementsByTagName("input"); 
	for(i=0; i < btnNext.length; i++) 
	{ 
		if(btnNext[i].value == "Next")
		{ 
			btnNext[i].onclick = validateForm; 
			break; 
		} 
	} 
} 

function ValidateEnter(e)
{
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	if(keycode == 13){
	validateForm();
	void(0);
	}
}

function validateForm() 
{ 
	/*$.each($ul,function(index,value){
		console.log("Hi");
	})*/
 	//Original Courion Next button function. 
	onSubmitRequest('wNext','true');   

}