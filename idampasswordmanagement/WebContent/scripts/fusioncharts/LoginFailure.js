function LoginFailure($scope, $compile) {
$scope.dataSource = {
	    "chart": {
	        "caption": "Login Failure Percentage Dashboard",
	        "lowerlimit": "0",
	        "upperlimit": "100",
	        "lowerlimitdisplay": "Low Risk",
	        "upperlimitdisplay": "High Risk",
	        "palette": "1",
	        "numbersuffix": "%",
	        "tickvaluedistance": "10",
	        "showvalue": "0",
	        "gaugeinnerradius": "0",
	        "bgcolor": "FFFFFF",
	        "pivotfillcolor": "333333",
	        "pivotradius": "8",
	        "pivotfillmix": "333333, 333333",
	        "pivotfilltype": "radial",
	        "pivotfillratio": "0,100",
	        "showtickvalues": "1",
	        "showborder": "0"
	    },
	    "colorrange": {
	        "color": [
	            {
	                "minvalue": "0",
	                "maxvalue": "45",
	                "code": "6baa01"
	            },
	            {
	                "minvalue": "45",
	                "maxvalue": "75",
	                "code": "f8bd19"
	            },
	            {
	                "minvalue": "75",
	                "maxvalue": "100",
	                "code": "e44a00"
	            }
	        ]
	    },
	    "dials": {
	        "dial": [
	            {
	                "value": "92",
	                "rearextension": "15",
	                "radius": "100",
	                "bgcolor": "333333",
	                "bordercolor": "333333",
	                "basewidth": "8"
	            }
	        ]
	    }
	}
};

