import * as songsAPI from "./songs-api";

// VIEW ALL SONGS
export async function getSongs() {
  try {
    const data = await songsAPI.index();
    // console.log('Songs-Service: ",data)
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

// CREATE A SONG 
export async function createSong(data){
    try {
        const newSong = await songsAPI.create(data)
        console.log('service/create ', newSong)
        return newSong
    }catch(err){
        console.log(err.message)
        throw new Error(err)
    }
}

// // DELETE A SONG
// export async function deleteSong() {
//     try {
//       const deletedSong = await songsAPI.destroy();
//       return deletedSong;
//     } catch (err) {
//       throw err;
//     }
//   }
// DELETE A SONG
export async function deleteSong(songName, songArtist) {
    try {
        const deletedSong = await songsAPI.destroy(songName, songArtist);
        return deletedSong;
    } catch (err) {
        throw err;
    }
}

// GET A SONG (SHOW)
export async function getSong(id) {
    try {
      const foundPerson = await songsAPI.detail(id);
      return foundSong;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }