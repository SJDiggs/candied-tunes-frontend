import { useState, useEffect } from "react"


const Landing = (props) => {

    const [isLoading, setIsLoading] = useState(true) //when page loads true, when loaded change to false
    const [songs, setSongs] = useState([])

    const BASE_URL = "http://localhost:4000/songs" //Dev environment
    // const BASE_URL = "<heroku link>" //Prod once Heroku is deployed

    const handleRequest = async () => {
        try {
            const resp = await fetch(BASE_URL)
            console.log(resp)
           
            if(resp.ok){
                //access data
                const respData = await resp.json()
                console.log(respData)
                setSongs(respData)
            } else {
                console.log('Fetch Error:')
                // error handling
                // pass data from response to error context
                // trigger a redirect using RR hooks

            }
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
    }
    // const renderSongs = () => (
    //     <section className="song-list">
    //       <h2>Loaded</h2>
    //       <table className="border-collapse border border-stone-600">
    //         <thead className="border border-stone-600">
    //           <tr >
    //             <th className="border border-stone-600">Song Name</th>
    //             <th className="border border-stone-600">Artist</th>
    //             <th className="border border-stone-600">Instrument</th>
    //             <th className="border border-stone-600">Request</th>
    //             <th className="border border-stone-600">Tip to the Top</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {songs?.map((s) => (
    //             <tr key={s._id}>
    //               <td className={`border border-stone-600
    //                 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} 
    //                 ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songName}
    //               </td> 
    //               <td className={`border border-stone-600
    //                 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} 
    //                 ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songArtist}
    //               </td> 
    //               <td className={`border border-stone-600
    //                 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} 
    //                 ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songInstrument}
    //               </td> 
    //               <td className="border border-stone-600">
    //                 <button className="bg-purple-900 text-white px-1 py-0 rounded-full ">Request</button>
    //                 {/* when button is clicked the song information needs to be sent to the musician portal (/tools/requests) */}
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </section>
    //   );

    const renderSongs = () => (
        <section className="song-list flex justify-center items-center h-screen">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black border border-stone-600 shadow-lg">
              <thead>
                <tr className="bg-stone-600 text-white">
                  <th className="py-3 px-6 border-b border-stone-600">Song Name</th>
                  <th className="py-3 px-6 border-b border-stone-600">Artist</th>
                  <th className="py-3 px-6 border-b border-stone-600">Instrument</th>
                  <th className="py-3 px-6 border-b border-stone-600">Request</th>
                  <th className="py-3 px-6 border-b border-stone-600">Tip to the Top</th>
                </tr>
              </thead>
              <tbody>
                {songs?.map((s) => (
                  <tr key={s._id} className="border-b border-stone-600">
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songName}</td>
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songArtist}</td>
                    <td className={`py-4 px-6 ${s.songIsOriginal ? "text-purple-600 font-bold" : ""} ${s.songPlayed ? "text-stone-700" : ""}`}>{s.songInstrument}</td>
                    <td className="py-4 px-6">
                      <button className="bg-purple-900 text-white px-3 py-1 rounded-full">Request</button>
                      {/* when the button is clicked, the song information needs to be sent to the musician portal (/tools/requests) */}
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