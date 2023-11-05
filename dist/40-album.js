"use strict";
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album = Object.assign(Object.assign({}, album), { tracks });
    }
    return album;
}
const album1 = make_album('Artist1', 'Album One');
const album2 = make_album('Artist2', 'Album Two', 12);
const album3 = make_album('Artist3', 'Album Three', 8);
console.log(album1);
console.log(album2);
console.log(album3);
