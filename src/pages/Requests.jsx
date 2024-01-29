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
    <section className="requested-song-list flex justify-center h-screen">
      <div className="overflow-x-auto w-full">
        <table className="w-full bg-black border border-stone-600 shadow-lg">
          <thead>
            <tr className="bg-stone-600 text-white">
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600">Song Name</th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600">Artist</th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600">Instrument</th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600">Requesters Name</th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600 sm:table-cell">Tip Amount</th>
              <th className="py-1 px-2 sm:py-2 sm:px-4 border-b border-stone-600">Play</th>
            </tr>
          </thead>
          <tbody>
            {requestedSongs.map((song) => (
              <tr key={song.songId} className="border-b border-stone-600">
                <td className="py-2 px-2 sm:py-4 sm:px-4">{song.songName}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">{song.songArtist}</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">{song.songInstrument}</td>
                {/* Future feature to get the requester's name from login or allowing user to enter at landing page */}
                <td className="py-2 px-2 sm:py-4 sm:px-4">Joey Person</td>
                {/* Future feature when the tip system is implemented */}
                <td className="py-2 px-2 sm:py-4 sm:px-4 sm:table-cell">$10.00</td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <button
                    onClick={() => handlePlayClick(song.songId)}
                    className="bg-purple-900 text-white px-3 py-1 rounded-full"
                  >
                    Play
                  </button>
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
