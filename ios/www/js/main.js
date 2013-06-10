
var mjTwitterApi = function searchTwitter(query) {
    $.ajax({
        url: 'http://search.twitter.com/search.json?' + jQuery.param(query),
        dataType: 'jsonp',
        success: function(data) {
            var tweets = $('#tweets');
            tweets.html('');
            for (res in data['results']) {
                tweets.append('<ul data-role="listview">' + data['results'][res]['from_user'] + ' wrote: <li>' + '<a>' + data['results'][res]['text'] + '</a>' + '</li></ul><br />');
            }
        }
    });
}

$(document).ready(function() {
    $('#submit').click(function() {
        var params = {
            q: $('#query').val(),
            rpp: 5
        };
        //alert(jQuery.param(params));
        mjTwitterApi (params);
    });
});