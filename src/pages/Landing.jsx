import { useState, useEffect } from "react";
import config from "./../config";
import { getSongs } from "../utilities/songs-service";
import { useRequestContext } from "../components/Context/RequestContext";

const Landing = (props) => {
  const { addRequestedSong, requestedSongs } = useRequestContext();
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);


  const handleRequest = async () => {
    try {
      const songsData = await getSongs();
      console.log("Songs fetch: ", songsData);
      if (songsData) {
        setSongs(songsData);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRequestClick = (songId, songName, songArtist, songInstrument, songPlayed) => {
    console.log("Button clicked:", songId, songName, songArtist, songInstrument, songPlayed);
    addRequestedSong({
      songId,
      songName,
      songArtist,
      songInstrument,
      songPlayed,
    });
  };

  const renderSongs = () => (
    <section className="song-list flex justify-center h-screen">
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
                        // : requestedSongs.includes(s._id)
                        : requestedSongs.some((requestedSong) => requestedSong.songId === s._id)
                        ? "bg-pink-800 text-white"
                        : "bg-purple-900 text-white"
                    }`}
                    onClick={() => handleRequestClick(s._id, s.songName, s.songArtist, s.songInstrument, s.songPlayed)}
                    disabled={s.songPlayed}
                  >
                    {/* {s.songPlayed ? "Played" : requestedSongs.includes(s._id) ? "Requested" : "Request"} */}
                    {s.songPlayed ? "Played" : requestedSongs.some((requestedSong) => requestedSong.songId === s._id) ? "Requested" : "Request"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderLoading = () => <h2>Loading Songs...</h2>;

  useEffect(() => {
    handleRequest();
  }, []);

  return isLoading ? renderLoading() : renderSongs();
};

export default Landing;
