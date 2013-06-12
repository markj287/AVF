var searchTwitter = function (query) {
    $.ajax({
        url: 'https://api.twitter.com/1.1/search/tweets.json' + jQuery.param(query),
        dataType: 'jsonp',
        success: function(data) {
            var tweets = $('#tweets');
            tweets.html('');
            for (res in data['results']) {
                tweets.append('<div>' + data['results'][res]['from_user'] + ' wrote: <p>' + data['results'][res]['text'] + '</p></div><br />');
            }
        }
    });
}

$(document).ready(function() {
    $('#submit').click(function() {
        var params = {
            q: $('#query').val(),
            rpp: 15
        };
        // alert(jQuery.param(params));
        searchTwitter(params);
    });
});

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "waterfalls",
    tagmode: "any",
    format: "json"
  })
  .done(function( data ) {
    $.each( data.items, function( i, item ) {
      $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#images" );
      if ( i === 3 ) {
        return false;
      }
    });
  });
})();