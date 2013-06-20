$(document).on("pageinit", function(){

	$("#create-a-note").on("pageshow", function(){
		navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
	});
	
	// tap event is jqm specific event, better than using click event. Its more effcient
	$("#addphoto").bind("tap",function(){
		// creates an object for options
		// sourceType lets the user switch between using the camera of the photo library
		// destinationType lets the me reference the file in the file or as a data url, use file uri instead for best results
		var options = {sourceType:Camera.PictureSourceType.PHOTOLIBRARY, 
		destinationType: Camera.DestinationType.FILE_URI};
		
		// the method take 3 parameters. function that is call if sucessful, function that is called if failed and the options function we created above
		navigator.camera.getPicture(onCameraSuccess, onError, options);
	});
	
}); // end pageinit funtion

var onLoad = function (){
	document.addEventListener("deviceready", onDeviceReady, false);
}

var onDeviceReady = function (){
	navigator.notification.alert("yay it works");
}

var onGeoSuccess = function (position){
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	var currentposition = new google.maps.LatLng(lat,lon);

	var mapoptions = {
		zoom: 12,
		center: currentposition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map"), mapoptions);

	var marker = new google.maps.Marker({
		position: currentposition,
		map: map
	});
}

var onGeoError = function (error){
	if(error == 1){
		alert("Please turn on your GPS");
	}
}

var onCameraSuccess = function (imageURI){
	// create note image id
	$("#noteimage").attr("src", imageURI);
	$("#noteimage").css("display", "block");
}

var onError = function (message){
	alert(message);
}






