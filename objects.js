var playlist = { artistnames :"song titles"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {['Phil Ochs'] : "Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistName ){
  var playlist = {Kanye:"Gold Digger"}

  delete playlist.kanye;
return playlist
}
