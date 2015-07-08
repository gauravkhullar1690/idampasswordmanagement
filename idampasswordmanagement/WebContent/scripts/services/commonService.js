idamapp.service('commonService', function() {
	this.customDialog = function(title, message, html, buttons) {
		message = message + ('\n') + html;
		bootbox.dialog({
			message : message,
			title : title,
			buttons : buttons
		});
	};

	this.ifEmptyAndNotNull = function(str) {
		if (str !== null && str === "") {
			return true;
		} else {
			return false;
		}
	};

	this.ifNotEmptyAndNotNull = function(str) {
		if (str !== null && str !== "") {
			return true;
		} else {
			return false;
		}
	};
});