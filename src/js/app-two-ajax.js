function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404', 'robotcaleb'];

var arrStatus = [];


function getStatus() {
  return $.each(arrChannels, function (index, value) {
    arrStatus.push($.ajax({
        url: 'https://api.twitch.tv/kraken/streams/' + value,
        dataType: 'json'
      })
      .always(function (response) {
        echo('always for status');
      }));
  });
}



var arrDetails = [];


function getDetails() {
  return $.each(arrChannels, function (index, value) {
    arrDetails.push($.ajax({
        url: 'https://api.twitch.tv/kraken/channels/' + value,
        dataType: 'json'
      })
      .always(function (response) {
        echo('always for details');
      }));
  });
}





$.when.apply($, getStatus(), getDetails())
  .then(function () {
    echo('all done');
  })
.then(function() {
  echo('fail');
});