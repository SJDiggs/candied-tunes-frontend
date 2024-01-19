import { useState, useEffect } from "react"
import config from "./../config"
import { getSongs } from "../utilities/songs-service";
import Requests from "./Requests";

const Landing = (props) => {

    const [requestedSongs, setRequestedSongs] = useState([]);
    
    const [selectedSong, setSelectedSong] = useState({
        songName: "",
        songArtist: "",
        songInstrument: ""
      });

    const [isLoading, setIsLoading] = useState(true) //when page loads true, when loaded change to false
    const [songs, setSongs] = useState([])

    // const BASE_URL = "http://localhost:4000/songs" //Dev environment
    // const BASE_URL = "<heroku link>" //Prod once Heroku is deployed

    const handleRequest = async () => {
        try {
            const songsData = await getSongs()
            console.log("Songs fetch: ",songsData)
            if(songsData) {
                setSongs(songsData)
            }
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }


    const handleRequestClick = (songId, songName, songArtist, songInstrument) => {
        // Update the state to reflect that the song has been requested
        setRequestedSongs((previousState) => [...previousState, songId]);

        setSelectedSong({
            songName: songName,
            songArtist: songArtist,
            songInstrument: songInstrument
          });
    }

    const renderSongs = () => (
        <section className="song-list flex justify-center items-center h-screen">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black border border-stone-600 shadow-lg">
              <thead>
                <tr className="bg-stone-600 text-white">
                  <th className="py-3 px-6 border-b border-stone-600">Song Name</th>
                  <th className="py-3 px-6 border-b border-stone-600">Artist</th>
                  <th className="py-3 px-6 border-b border-stone-600">Instrument</th>
                  <th className="py-3 px-6 border-b border-stone-600" style={{ width: 'calc(10em + 3px)' }}>Request</th>
                  <th className="py-3 px-6 border-b border-stone-600">Tip to the Top</th>
                </tr>
              </thead>
              <tbody>
                {songs?.map((s) => (
                  <tr key={s._id} className="border-b border-stone-600">
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songName}</td>
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songArtist}</td>
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songInstrument}</td>
                    <td className="py-4 px-6 text-center">
                  <button
                    id={s._id}
                    className={`px-3 py-1 rounded-full ${
                      s.songPlayed
                        ? "bg-stone-900 text-stone-700"
                        : requestedSongs.includes(s._id)
                        ? "bg-pink-800 text-white"
                        : "bg-purple-900 text-white"
                    }`}
                    onClick={() => handleRequestClick(s._id, s.songName, s.songArtist, s.songInstrument)}
                    disabled={s.songPlayed}
                  >
                    {s.songPlayed ? "Played" : requestedSongs.includes(s._id) ? "Requested" : "Request"}
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
        handleRequest()
    }, [])


    // return <h1>Songs List {isLoading ? "is loading...": "is loaded"}</h1>
    return ( isLoading ? renderLoading() : renderSongs())
}

export default Landing;