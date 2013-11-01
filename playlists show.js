var sp = getSpotifyApi();
var models = sp.require('$api/models');
var views = sp.require('$api/views');

var playlist = models.Playlist.fromURI("spotify:user:1177682833:playlist:5EGXLpo3mHPsOBhAJWHLPz");

var list = new views.List(playlist);

// note: you can also customize columns by using
// var list = new views.List(playlist , function (track) {
//    return new views.Track(track, views.Track.FIELD.STAR |
//          views.Track.FIELD.SHARE |
//          views.Track.FIELD.NAME |
//          views.Track.FIELD.ARTIST |
//          views.Track.FIELD.DURATION |
//          views.Track.FIELD.ALBUM);
// });

document.getElementById('playlist').appendChild(list.node);