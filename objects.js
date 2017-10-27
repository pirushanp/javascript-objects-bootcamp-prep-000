var playlist = { artistnames :"song titles"}

function updatePlaylist(playlist, usher, bad) {
  return Object.assign({}, playlist, {[usher] : "bad"})
}
