import React from "react";
import { useRequestContext } from "../components/Context/RequestContext";

const Requests = () => {
  const { requestedSongs } = useRequestContext();

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
            <th className="py-3 px-6 border-b border-stone-600">Play</th>
          </tr>
        </thead>
        <tbody>
          {requestedSongs.map((song) => (
            <tr key={song.songId} className="border-b border-stone-600">
              <td className="py-4 px-6">{song.songName}</td>
              <td className="py-4 px-6">{song.songArtist}</td>
              <td className="py-4 px-6">{song.songInstrument}</td>
              {/* Assuming you have a requester's name in your song object */}
              <td className="py-4 px-6">{song.requestersName}</td>
              <td className="px-6 py-1 rounded-full bg-purple-900 text-white">
                {/* Add your Play button logic here */}
                <button onClick={() => handlePlayClick(song)}>Play</button>
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