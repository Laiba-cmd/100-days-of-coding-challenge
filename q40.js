function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Jal pari"));
console.log(make_album("Ali Zafar", "Masti"));
console.log(make_album("Junoon", "Prvaaz", 6));
