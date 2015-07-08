function PasswordResetDrillDown($scope, $compile) {
	$scope.dataSource = {
		"chart" : {
			"caption" : "Password Reset Count per System",
			"subcaption" : "Click on a column to drill-down",
			"numberprefix" : "",
			"showvalues" : "0",
			"bgcolor" : "FFFFFF",
			"xaxisname" : "Connector Name",
			"plotgradientcolor" : "",
			"showalternatehgridcolor" : "0",
			"showplotborder" : "0",
			"divlinecolor" : "CCCCCC",
			"canvasborderalpha" : "0"
		},
		"data" : [ {
			"label" : "Account Closure",
			"value" : "1161000",
			"link" : "newchart-xml-accountclosure",
			"color" : "008ee4"
		}, {
			"label" : "Prime Jobs",
			"value" : "1043000",
			"link" : "newchart-xml-primejobs",
			"color" : "6baa01"
		}, {
			"label" : "Finn One",
			"value" : "1017000",
			"link" : "newchart-xml-finnone",
			"color" : "f8bd19"
		}, {
			"label" : "Active Directory",
			"value" : "1156000",
			"link" : "newchart-xml-activedirectory",
			"color" : "e44a00"
		} ],
		"linkeddata" : [
				{
					"id" : "accountclosure",
					"linkedchart" : {
						"chart" : {
							"caption" : "Account Closure Password Reset Dashboard",
							"subcaption" : "Click on a column to drill-down",
							"xaxisname" : "Role",
							"numberprefix" : "",
							"showvalues" : "0",
							"bgcolor" : "FFFFFF",
							"plotgradientcolor" : "",
							"showalternatehgridcolor" : "0",
							"showplotborder" : "0",
							"divlinecolor" : "CCCCCC",
							"canvasborderalpha" : "0"
						},
						"data" : [ {
							"label" : "Administrator",
							"value" : "274000",
							"link" : "newchart-xml-accloselocadmin",
							"color" : "008ee4"
						}, {
							"label" : "Management",
							"value" : "270000",
							"link" : "newchart-xml-accloselocmgnt",
							"color" : "008ee4"
						}, {
							"label" : "Finance",
							"value" : "318000",
							"link" : "newchart-xml-accloselocfin",
							"color" : "008ee4"
						}, {
							"label" : "HR",
							"value" : "299000",
							"link" : "newchart-xml-accloselochr",
							"color" : "008ee4"
						} ],
						"linkeddata" : [
								{
									"id" : "accloselocadmin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"xaxisname" : "Location",
											"numberprefix" : "",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "110000",
											"color" : "008ee4"
										}, {
											"label" : "Dubai",
											"value" : "76000",
											"color" : "008ee4"
										}, {
											"label" : "Qatar",
											"value" : "88000",
											"color" : "008ee4"
										} ]
									}
								},
								{
									"id" : "accloselocmgnt",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"xaxisname" : "Location",
											"numberprefix" : "",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "116000",
											"color" : "008ee4"
										}, {
											"label" : "Dubai",
											"value" : "92000",
											"color" : "008ee4"
										}, {
											"label" : "Qatar",
											"value" : "62000",
											"color" : "008ee4"
										} ]
									}
								},
								{
									"id" : "accloselocfin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"xaxisname" : "Location",
											"numberprefix" : "",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "114000",
											"color" : "008ee4"
										}, {
											"label" : "Dubai",
											"value" : "86000",
											"color" : "008ee4"
										}, {
											"label" : "Qatar",
											"value" : "118000",
											"color" : "008ee4"
										} ]
									}
								},
								{
									"id" : "accloselochr",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"xaxisname" : "Location",
											"numberprefix" : "",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "92000",
											"color" : "008ee4"
										}, {
											"label" : "Dubai",
											"value" : "102000",
											"color" : "008ee4"
										}, {
											"label" : "Qatar",
											"value" : "105000",
											"color" : "008ee4"
										} ]
									}
								} ]
					}
				},
				{
					"id" : "primejobs",
					"linkedchart" : {
						"chart" : {
							"caption" : "Prime Jobs Password Reset Dashboard",
							"subcaption" : "Click on a column to drill-down",
							"showvalues" : "0",
							"bgcolor" : "FFFFFF",
							"numberprefix" : "",
							"xaxisname" : "Role",
							"plotgradientcolor" : "",
							"showalternatehgridcolor" : "0",
							"showplotborder" : "0",
							"divlinecolor" : "CCCCCC",
							"canvasborderalpha" : "0"
						},
						"data" : [ {
							"label" : "Administrator",
							"value" : "306000",
							"link" : "newchart-xml-prmjbsadmin",
							"color" : "6baa01"
						}, {
							"label" : "Management",
							"value" : "203000",
							"link" : "newchart-xml-prmjbsmgmt",
							"color" : "6baa01"
						}, {
							"label" : "Finance",
							"value" : "270000",
							"link" : "newchart-xml-prmjbsfin",
							"color" : "6baa01"
						}, {
							"label" : "HR",
							"value" : "264000",
							"link" : "newchart-xml-prmjbshr",
							"color" : "6baa01"
						} ],
						"linkeddata" : [
								{
									"id" : "prmjbsadmin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "370000",
											"color" : "6baa01"
										}, {
											"label" : "Dubai",
											"value" : "290000",
											"color" : "6baa01"
										}, {
											"label" : "Qatar",
											"value" : "320000",
											"color" : "6baa01"
										} ]
									}
								},
								{
									"id" : "prmjbsmgmt",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "370000",
											"color" : "6baa01"
										}, {
											"label" : "Dubai",
											"value" : "290000",
											"color" : "6baa01"
										}, {
											"label" : "Qatar",
											"value" : "320000",
											"color" : "6baa01"
										} ]
									}
								},
								{
									"id" : "prmjbsfin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "370000",
											"color" : "6baa01"
										}, {
											"label" : "Dubai",
											"value" : "290000",
											"color" : "6baa01"
										}, {
											"label" : "Qatar",
											"value" : "320000",
											"color" : "6baa01"
										} ]
									}
								},
								{
									"id" : "prmjbsfin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group Location",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "$",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "370000",
											"color" : "6baa01"
										}, {
											"label" : "Dubai",
											"value" : "290000",
											"color" : "6baa01"
										}, {
											"label" : "Qatar",
											"value" : "320000",
											"color" : "6baa01"
										} ]
									}
								} ]
					}
				},
				{
					"id" : "finnone",
					"linkedchart" : {
						"chart" : {
							"caption" : "FinnOne Password Reset Dashboard",
							"subcaption" : "Click on a column to drill-down",
							"showvalues" : "0",
							"bgcolor" : "FFFFFF",
							"numberprefix" : "",
							"xaxisname" : "Role",
							"plotgradientcolor" : "",
							"showalternatehgridcolor" : "0",
							"showplotborder" : "0",
							"divlinecolor" : "CCCCCC",
							"canvasborderalpha" : "0"
						},
						"data" : [ {
							"label" : "Administrator",
							"value" : "241000",
							"link" : "newchart-xml-finnoneadmin",
							"color" : "f8bd19"
						}, {
							"label" : "Management",
							"value" : "280000",
							"link" : "newchart-xml-finnonemgmt",
							"color" : "f8bd19"
						}, {
							"label" : "Finance",
							"value" : "255000",
							"link" : "newchart-xml-finnonefin",
							"color" : "f8bd19"
						}, {
							"label" : "HR",
							"value" : "241000",
							"link" : "newchart-xml-finnonehr",
							"color" : "f8bd19"
						} ],
						"linkeddata" : [
								{
									"id" : "finnoneadmin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "87000",
											"color" : "f8bd19"
										}, {
											"label" : "Dubai",
											"value" : "89000",
											"color" : "f8bd19"
										}, {
											"label" : "Qatar",
											"value" : "65000",
											"color" : "f8bd19"
										} ]
									}
								},
								{
									"id" : "finnonemgmt",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "130000",
											"color" : "f8bd19"
										}, {
											"label" : "Dubai",
											"value" : "44000",
											"color" : "f8bd19"
										}, {
											"label" : "Qatar",
											"value" : "106000",
											"color" : "f8bd19"
										} ]
									}
								},
								{
									"id" : "finnonefin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "85000",
											"color" : "f8bd19"
										}, {
											"label" : "Dubai",
											"value" : "103000",
											"color" : "f8bd19"
										}, {
											"label" : "Qatar",
											"value" : "67000",
											"color" : "f8bd19"
										} ]
									}
								},
								{
									"id" : "finnonehr",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "59000",
											"color" : "f8bd19"
										}, {
											"label" : "Dubai",
											"value" : "69000",
											"color" : "f8bd19"
										}, {
											"label" : "Qatar",
											"value" : "113000",
											"color" : "f8bd19"
										} ]
									}
								} ]
					}
				},
				{
					"id" : "activedirectory",
					"linkedchart" : {
						"chart" : {
							"caption" : "Active Directory Password Reset Dashboard",
							"subcaption" : "Click on a column to drill-down",
							"showvalues" : "0",
							"bgcolor" : "FFFFFF",
							"numberprefix" : "",
							"xaxisname" : "Role",
							"plotgradientcolor" : "",
							"showalternatehgridcolor" : "0",
							"showplotborder" : "0",
							"divlinecolor" : "CCCCCC",
							"canvasborderalpha" : "0"
						},
						"data" : [ {
							"label" : "Administrator",
							"value" : "269000",
							"link" : "newchart-xml-adadmin",
							"color" : "e44a00"
						}, {
							"label" : "Management",
							"value" : "270000",
							"link" : "newchart-xml-admgmt",
							"color" : "e44a00"
						}, {
							"label" : "Finance",
							"value" : "318000",
							"link" : "newchart-xml-adfin",
							"color" : "e44a00"
						}, {
							"label" : "HR",
							"value" : "299000",
							"link" : "newchart-xml-adhr",
							"color" : "e44a00"
						} ],
						"linkeddata" : [
								{
									"id" : "adadmin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "105000",
											"color" : "e44a00"
										}, {
											"label" : "Dubai",
											"value" : "76000",
											"color" : "e44a00"
										}, {
											"label" : "Qatar",
											"value" : "88000",
											"color" : "e44a00"
										} ]
									}
								},
								{
									"id" : "admgmt",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "116000",
											"color" : "e44a00"
										}, {
											"label" : "Dubai",
											"value" : "92000",
											"color" : "e44a00"
										}, {
											"label" : "Qatar",
											"value" : "62000",
											"color" : "e44a00"
										} ]
									}
								},
								{
									"id" : "adfin",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "114000",
											"color" : "e44a00"
										}, {
											"label" : "Dubai",
											"value" : "86000",
											"color" : "e44a00"
										}, {
											"label" : "Qatar",
											"value" : "118000",
											"color" : "e44a00"
										} ]
									}
								},
								{
									"id" : "adhr",
									"linkedchart" : {
										"chart" : {
											"caption" : "Location of User Group",
											"subcaption" : "Dashboard per Location of User Group",
											"showvalues" : "0",
											"bgcolor" : "FFFFFF",
											"numberprefix" : "",
											"xaxisname" : "Location",
											"plotgradientcolor" : "",
											"showalternatehgridcolor" : "0",
											"showplotborder" : "0",
											"divlinecolor" : "CCCCCC",
											"canvasborderalpha" : "0"
										},
										"data" : [ {
											"label" : "India",
											"value" : "92000",
											"color" : "e44a00"
										}, {
											"label" : "Dubai",
											"value" : "102000",
											"color" : "e44a00"
										}, {
											"label" : "Qatar",
											"value" : "105000",
											"color" : "e44a00"
										} ]
									}
								} ]
					}
				} ]
	}
};

