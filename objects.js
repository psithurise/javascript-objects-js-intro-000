var playlist = {
  LM: "Strip",
  DL: "Blow Your Mind (Mwah)"
}

function updatePlaylist(obj, key, val) {
  return obj.assign({}, obj, {[key]: val})
}

function removeFromPlaylist(obj, key) {
  delete obj.key
  return obj
}
