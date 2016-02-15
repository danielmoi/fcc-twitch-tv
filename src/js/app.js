function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'lirik', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404', 'test_channel'];


function getData() {
  $.each(arrChannels, function (index, value) {
    $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/' + value,
        dataType: 'json'
      })
      .always(function (response) {
        echo(response.stream);
        var status;
        if (response.stream === null) {
          status = 'offline';
        } else if (response.stream === undefined) {
          status = 'account closed';
        } else {
          status = 'online';
        }
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + value,
            dataType: 'json'
          })
          .always(function (response) {
          echo(response);
            var logo = response.logo ? response.logo : 'http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F',
                name = response.name ? response.name : value,
                game = (status === 'online') ? '<i class="fa fa-video-camera"></i> ' + response.game : '',
                url = (status !== 'account closed') ? response.url : '#',
              html = '<div class="row user ' + status + '"><a href="' + url + '" target="_blank">' 
            
            + '<div class="col-xs-2 logo">'
            + '<img src="' + logo + '" class="img-full">'
            + '</div>'
            
            + '<div class="col-xs-4 name">'
            + '<p class="name"><a href="' + url + '" target="_blank">' + name + '</a></p>'
            + '</div>'
            
            + '<div class="col-xs-6 status">'
            + '<p class="status">' + status + '</p>'
            + '<p class="game">' + game + '</p>'
            + '</div>'
            
            + '</a></div>';
            $('#one').append(html);


          });
      });
  });
}



getData();