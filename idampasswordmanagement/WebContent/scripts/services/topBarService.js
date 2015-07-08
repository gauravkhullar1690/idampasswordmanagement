idamapp.service('topBarService', function() {
	//hide the top navigation bar
    this.hide = function () {
    	$('.navbar').hide();
    };
    //show the top navigation bar
    this.show = function () {
    	$('.navbar').show();
    };
});