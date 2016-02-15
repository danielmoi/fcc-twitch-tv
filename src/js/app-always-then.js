function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404', 'robotcaleb'];

var arrStatus = [];

var getStatus = function () {
  arrChannels.forEach(function (element) {
    $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/' + element,
        dataType: 'json'
      })
      .always(function (response) {
        arrStatus.push(response);
        echo('always');
      })
      .then(
        function (reponse) {
          echo('done');
          $.ajax({
              url: 'https://api.twitch.tv/kraken/channels/' + element,
              dataType: 'json'
            })
            .always(function (response) {
              arrStatus.push(response);
              echo('always');
            })
            .then(
              function (reponse) {
                echo('done');
              },
              function (response) {
                echo('fail');
              });
        },
        function (response) {
          echo('fail');
          $.ajax({
              url: 'https://api.twitch.tv/kraken/channels/' + element,
              dataType: 'json'
            })
            .always(function (response) {
              arrStatus.push(response);
              echo('always');
            })
            .then(
              function (reponse) {
                echo('done');
              },
              function (response) {
                echo('fail');
              });
        });
  });

};

getStatus();