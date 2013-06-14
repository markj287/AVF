// flickr function
var showpics = function (){

	var pic = $("#box").val();

	$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + pic + "&tagmode=any&format=json&jsoncallback=?",
	function(data){ $("#images").hide().html(data).fadeIn('fast');

		$.each(data.items, function(i,item) {
			var img = $("<img/>");
				img.attr('width','300px');
				img.attr('height','300px');
				img.attr("src", item.media.m).appendTo("#images");
		});
	});
}


//Instagam function 
$("#instaButton").click(function(){
    var tag = $("#instaBox").val();
    var url ="https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=c32e8abb91894ce392f242c97f8c66bf";

    $.getJSON(url, showInstPics);
      
});


var showInstPics = function(info){

    console.log(info);
  
    
    $.each(info.data, function(index, photo){
      var pic = "<li><img src=' " + photo.images.standard_resolution.url + " ' alt=' " + photo.user.id + " ' /></li>";
        
        $("#instaImages").append(pic);
        
    });
    
};