import React from "react";
import { useRequestContext } from "../components/Context/RequestContext";

const Requests = () => {
  const { requestedSongs } = useRequestContext();

  const handlePlayClick = async (songId) => {
    try {
      
      console.log('Requests - Play button clicked')
      // Logic to handle the Play button click
        // update the songPlayed to true on the songs table
        // reset the state of the landing table so that the request button is disabled and the song is grayed out
    } catch (err) {
      console.log('Requests - Play Button error:', err.message);
    }
  };

  return (
      <section className="song-list flex justify-center h-screen">
          <div className="overflow-x-auto">
      <table className="w-full bg-black border border-stone-600 shadow-lg">
        <thead>
          <tr className="bg-stone-600 text-white">
            <th className="py-3 px-6 border-b border-stone-600">Song Name</th>
            <th className="py-3 px-6 border-b border-stone-600">Artist</th>
            <th className="py-3 px-6 border-b border-stone-600">Instrument</th>
            <th className="py-3 px-6 border-b border-stone-600">Requesters Name</th>
            <th className="py-3 px-6 border-b border-stone-600">Tip Amount</th>
            <th className="py-3 px-6 border-b border-stone-600">Play</th>
          </tr>
        </thead>
        <tbody>
          {requestedSongs.map((song) => (
            <tr key={song.songId} className="border-b border-stone-600">
              <td className="py-4 px-6">{song.songName}</td>
              <td className="py-4 px-6">{song.songArtist}</td>
              <td className="py-4 px-6">{song.songInstrument}</td>
              {/* Future feature to get the requester's name from login or allowing user to enter at landing page */}
              <td className="py-4 px-6">Joey Person</td>
              {/* Future feature when tip system implemented */}
              <td className="py-4 px-6">$10.00</td>
              <td className="px-4 py-4 rounded bg-purple-900 text-white">
                {/* Add your Play button logic here */}
                <button onClick={() => handlePlayClick(song.songId)}>Play</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Requests;