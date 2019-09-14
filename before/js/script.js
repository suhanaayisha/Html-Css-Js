$(   function(){                //Same as document.addEventListener("DOMContentLoaded")


	//$ also serves as a query selector
	$("#navbarToggle").blur(function(event){
		var screenWidth = window.innerWidth;
		if ( screenWidth <768){
			$("#collapsable-nav").collapse('hide');
		}

	});
});