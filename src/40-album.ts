type Album = { artist: string; title: string; tracks?: number };

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
        album = { ...album, tracks }; 
    }
    return album;
}

const album1 = make_album('Artist1', 'Album One');
const album2 = make_album('Artist2', 'Album Two', 12);
const album3 = make_album('Artist3', 'Album Three', 8);

console.log(album1);
console.log(album2);
console.log(album3);
