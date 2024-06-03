function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
      album["tracks"] = tracks;
    }
    return album;
  }
  
  console.log(make_album("Atif Aslam", "Jal pari"));
  console.log(make_album("Ali Zafar", "Masti"));
  console.log(make_album("Junoon", "Prvaaz", 6));