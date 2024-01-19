//     // display the songs that are clicked from the landing page
//     // display the songs in a table from most recent to oldest
//     // display a button (Play) next to the song that when clicked will:
//         // 1. change colors from purple to grey
//         // 2. disable the button and other instances of the requested song (you can have multiple people requesting the same song)
//         // 3. updates the songPlayed element on the MongoDB from false to true
//         // 4. updates the landing page song on the songlist

import React from 'react';

const Requests = (props) => {
  // Destructure props to get song details
//   const { requestedSongs, handlePlayButtonClick } = props;

  const renderSongTable = () => {
    return (
      <table className="min-w-full bg-black border border-stone-600 shadow-lg">
        <thead>
          <tr className="bg-stone-600 text-white">
            <th className="py-3 px-6 border-b border-stone-600">Song</th>
            <th className="py-3 px-6 border-b border-stone-600">Artist</th>
            <th className="py-3 px-6 border-b border-stone-600">Instrument</th>
            <th className="py-3 px-6 border-b border-stone-600">Play</th>
          </tr>
        </thead>
        <tbody>
          {/* {sortedSongs.map((song) => (
            <tr key={song._id} className="border-b border-stone-600">
              <td className="py-4 px-6">{song.songName}</td>
              <td className="py-4 px-6">{song.songArtist}</td>
              <td className="py-4 px-6">{song.songInstrument}</td> */}
              {/* <td className="py-4 px-6 text-center"> */}
                {/* Play button */}
                {/* <button */}
                  {/* className="px-3 py-1 rounded-full bg-purple-900 text-white" */}
                  {/* onClick={() => handlePlayButtonClick(song._id)} */}
                  {/* disabled={song.songPlayed} */}
                {/* > */}
                  {/* Play */}
                {/* </button> */}
              {/* </td> */}
            {/* </tr> */}
        </tbody>
      </table>
    );
  };

  // Display the songs that are clicked from the landing page
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-gray-400 mt-20 mb-2">Requests</h1>
      {renderSongTable()}
    </div>
  );
};

export default Requests;
