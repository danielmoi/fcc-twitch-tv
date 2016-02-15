function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404', 'robotcaleb'];

var arrStatus = [];


$.each(arrChannels, function (index, value) {
  $.ajax({
      url: 'https://api.twitch.tv/kraken/streams/' + value,
      dataType: 'json'
    })
    .always(function (response) {
      arrStatus.push(response);
      echo('always for status');
    });

});


var arrDetails = [];


$.each(arrChannels, function (index, value) {
  $.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json'
    })
    .always(function (response) {
      arrDetails.push(response);
      echo('always for details');
    });

});



$.when.apply($, arrStatus, arrDetails)
  .done(function (response1, response2) {
    echo('all done');
  });