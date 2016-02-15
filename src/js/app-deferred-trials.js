function echo(obj) {
  console.log(obj);
}
window.echo = console.log.bind(console);

var arrChannels = ['freecodecamp', 'trick2g', 'c9sneaky', 'storbeck', 'terakilobyte', 'brunofin', 'comster404'];

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

function getDetails2() {
  $.each(arrChannels, function (index, value) {
    arrDetails.push($.ajax({
        url: 'https://api.twitch.tv/kraken/channels/' + value,
        dataType: 'json'
      })
      .always(function (response) {
        echo('always for details');
      })
      .promise());
  });
  return arrDetails;
}

function getDetails3() {
  $.each(arrChannels, function (index, value) {
    arrDetails.push($.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json',
      success: function (response) {
        echo('always for details');
      }
    }));
    return arrDetails;
  });
}

function getDetails4() {
  return $.each(arrChannels, function (index, value) {
    arrDetails.push($.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json',
      success: function (response) {
        echo('always for details');
      }
    }));
  });
}

function ajaxMe() {
  return $.ajax({
      url: 'https://api.twitch.tv/kraken/channels/amazhs',
      dataType: 'json'
    })
    .always(function (response) {
      echo('ajaxMe');
    });
}

function getMe() {
  return $.get('https://api.twitch.tv/kraken/channels/amazhs', function () {
    echo('getMe');
  });
}

var getMe2 = function () {
  return $.get('https://api.twitch.tv/kraken/channels/amazhs', function () {
    echo('getMe2');
  });
};

var myFunc = function () {
  return $.getJSON('https://api.twitch.tv/kraken/channels/amazhs', function () {
    echo('myFunc');
  });
};

function getStatus() {
  return $.each(arrChannels, function (index, value) {
    arrStatus.push($.ajax({
        url: 'https://some/url',
        dataType: 'json'
      })
      .always(function (response) {
        echo('from getStatus');
      }));
  });
}


function getDetails() {
  return $.each(arr, function (index, value) {
    arrDetails.push($.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json',
      success: function (response) {
        console.log('from getDetails');
      }
    }));
  });
}

function getDetails5() {
  return $.map(arrChannels, function (index, value) {
    arrDetails.push($.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json',
      success: function (response) {
        echo('always for details');
      }
    }));
  });
}

function getStatus6() {
  return $.map(arrChannels, function (value, index) {
    return $.ajax({
      url: 'https://api.twitch.tv/kraken/channels/' + value,
      dataType: 'json',
      success: function (response) {
        arrDetails.push(response);
        echo('cmon');
      }
    });
  });
}

function getStatus7() {
  return $.map(arrChannels, function (value, index) {
    return arrDetails.push($.ajax({
        url: 'https://api.twitch.tv/kraken/channels/' + value,
        dataType: 'json'
      })
      .done(function (response) {
        echo('cmon');
      }));
  });
}

function getStatus8() {
  arrDetails = $.map(arrChannels, function (value, index) {
    return arrDetails.push($.ajax({
        url: 'https://api.twitch.tv/kraken/channels/' + value,
        dataType: 'json'
      })
      .done(function (response) {
        echo('cmon');
      }));
  });
  return arrDetails;
}

$.when.apply($, getStatus8()).then(function () {
  echo('hi');
});