import { useState } from "react";
import { createSong } from "../utilities/songs-service";

export default function NewSongForm(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    songName: "",
    songArtist: "",
    songInstrument: "",
    songIsOriginal: "false",
    songPlayed: "false",
  })
  const [statusMessage, setStatusMessage] = useState(null)

  async function handleSubmit(e) {
    //take local state in form pass to api(service function call)
    e.preventDefault()
    console.log(newForm, 'current data')
    try{
        // invoke the service function to call the create api
        const newSong = await createSong(newForm) 
        console.log('Data written on API call: ', newSong)
        setStatusMessage('Song added successfully')

    }catch(err){
        console.log('Error deleting song: ', err.message)
        setStatusMessage('Song not found...')
    }

    //reset the form after user submitted it
    setNewForm({
        songName: "",
        songArtist: "",
        songInstrument: "",
        songIsOriginal: "false",
        songPlayed: "false",
    })
  }

  function handleChange(e) {
    // const mappedValue = e.target.value 
    // console.log('Mapped Value: ', mappedValue)
    setStatusMessage(null)
    setNewForm({...newForm, [e.target.name]: e.target.value})
  }

  return (
  
    <section>
      <div className="form-container">
        <form onSubmit={handleSubmit} 
            className="flex items-center space-x-4">
        <input className = "border h-full w-1/4 px-2 py-1"
            type="text"
            value={newForm.songName}
            name="songName"
            placeholder="Song Name"
            onChange={handleChange}
        />
        <input className = "border h-full w-1/2 px-2 py-1"
            type="text"
            value={newForm.songArtist}
            name="songArtist"
            placeholder="Artist"
            onChange={handleChange}
        />
        <select
            className="border px-2 py-1"
            value={newForm.songInstrument}
            name="songInstrument"
            onChange={handleChange}
        >
            <option value="">Select Instrument</option>
            <option value="Guitar">Guitar</option>
            <option value="Ukulele">Ukulele</option>
        </select>
        <select
            className="border px-2 py-1"
            value={newForm.songIsOriginal}
            name="songIsOriginal"
            onChange={handleChange}
        >
            <option value="false">Original Song</option>
            <option value="false">No</option>
          < option value="true">Yes</option>
        </select>
        <input 
            className = "bg-indigo-600 rounded-full py-0 px-2 mt-2 ml-10" 
            type="submit" 
            value="Add Song" 
          />
        </form>
      </div>
      
      <div className="status-message-container">
        {/* Display status message */}
        {statusMessage && (
          <p className="text-green-500 text-center mt-2 italic">
            {statusMessage}
          </p>
        )}
      </div>
    
  </section>
  )
}