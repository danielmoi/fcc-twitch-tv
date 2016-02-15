function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404', 'robotcaleb'];

var arrStatus = [];

var getStatus = function () {
  return arrChannels.forEach(function (element) {
    $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/' + element,
        dataType: 'json'
      })
      .always(function (response) {
        arrStatus.push(response);
        echo('always');
      });

  });
};


var arrDetails = [];

var getDetails = function () {
  arrChannels.forEach(function (element) {
    $.ajax({
        url: 'https://api.twitch.tv/kraken/channels/' + element,
        dataType: 'json'
      })
      .always(function (response) {
        arrDetails.push(response);
        echo('always');
      });

  });
};


$.when.apply($, getStatus, getDetails)
  .done(function (response1, response2) {
  echo('all done');
});