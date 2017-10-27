var playlist = { artistnames :"song titles"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {['Phil Ochs'] : "Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistNames ){
  delete playlist.artistnames
  playlist;
}
