// flickr function
var showpics = function (){

  var pic= $("#box").val();
  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + pic + "&tagmode=any&format=json&jsoncallback=?",
    function(data){ $("#images").hide().html(data).fadeIn('fast');

  $.each(data.items, function(i,item) {
    var img = $("<img/>");
      img.attr('margin','20px');
      img.attr('width','100%');
      img.attr('height','400px');
      img.attr("src", item.media.m).appendTo("#images");
    });
  });
}


