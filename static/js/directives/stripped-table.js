app.directive("strippedTable", function () {
	return {
		restrict: "EA",
		scope: {
			gridList: "=gridList" //ng repeat is used on this by the directive
		},
		templateUrl: "templates/stripped-table.html"
	};
});