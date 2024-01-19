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

