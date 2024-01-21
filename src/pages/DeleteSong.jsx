import { useState, useEffect } from "react"
import config from "./../config"
import { getSongs, deleteSong } from "../utilities/songs-service";
import Requests from "./Requests";

const DeleteSong = (props) => {


    const [isLoading, setIsLoading] = useState(true) //when page loads true, when loaded change to false
    const [songs, setSongs] = useState([])


    const fetchSongs = async () => {
        try {
            const songsData = await getSongs()
            console.log("Songs fetch: ",songsData)
            if(songsData) {
                setSongs(songsData)
            }
            setIsLoading(false)
        }catch(err){
            console.log("Error fetching songs ", err.message)
        }
    }

    const handleDeleteClick = async (songId) => {
        try {
          const deletedSong = await deleteSong(songId);
          console.log('Deleted Song = ', deletedSong)
          // After successful deletion, update the songs state without the deleted song
          setSongs((prevSongs) => prevSongs.filter((song) => song._id !== songId));
        } catch (err) {
          console.log('Error deleting song:', err.message);
        }
      };
    
    
    const renderSongs = () => (
        <section className="song-list flex justify-center items-center h-screen">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black border border-stone-600 shadow-lg">
              <thead>
                <tr className="bg-stone-600 text-white">
                  <th className="py-3 px-6 border-b border-stone-600">Song Name</th>
                  <th className="py-3 px-6 border-b border-stone-600">Artist</th>
                  <th className="py-3 px-6 border-b border-stone-600">Instrument</th>
                  <th className="py-3 px-6 border-b border-stone-600" style={{ width: 'calc(10em + 3px)' }}>Delete</th>
                
                </tr>
              </thead>
              <tbody>
                {songs?.map((s) => (
                  <tr key={s._id} className="border-b border-stone-600">
                    <td className="py-4 px-6 text-natural-100">{s.songName}</td>
                    <td className="py-4 px-6 text-natural-100">{s.songArtist}</td>
                    <td className="py-4 px-6 text-natural-100">{s.songInstrument}</td>
                    <td className="py-4 px-6 text-center">
                  <button
                    id={s._id}
                    className="px-3 py-1 rounded-full bg-purple-900 text-white"
                    onClick={() => handleDeleteClick(s._id, s.songName, s.songArtist, s.songInstrument)}
                  >
                    Delete
                  </button>
                </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    const renderLoading = () => <h2>Loading Songs...</h2>

    useEffect( ()=> {
        fetchSongs()
    }, [])


    // return <h1>Songs List {isLoading ? "is loading...": "is loaded"}</h1>
    return ( isLoading ? renderLoading() : renderSongs())
}

export default DeleteSong;