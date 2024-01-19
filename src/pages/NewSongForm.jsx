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

  async function handleSubmit(e) {
    // take stae -> pass into a variable
    //take local state in form pass to api(service function call)
    e.preventDefault()
    console.log(newForm, 'current data')
    try{
        // invoke the service function to call the create api
        const newSong = await createSong(newForm) 
        console.log('Data written on API call: ', newSong)
        // alert("Song Added!")
        // add message here to let user know the song was added

    }catch(err){}

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
    const mappedValue = e.target.value 
    console.log('Mapped Value: ', mappedValue)
    setNewForm({...newForm, [e.target.name]: e.target.value})
  }

  return (
  
    <section>
        <form onSubmit={handleSubmit}>
        <input className = "border h-full w-1/4"
            type="text"
            value={newForm.songName}
            name="songName"
            placeholder="Song Name"
            onChange={handleChange}
        />
        <input className = "border h-full w-3/4"
            type="text"
            value={newForm.songArtist}
            name="songArtist"
            placeholder="Artist"
            onChange={handleChange}
        />
        <select
          className="border"
          value={newForm.songInstrument}
          name="songInstrument"
         
          onChange={handleChange}
        >
          <option value="">Select Instrument</option>
          <option value="Guitar">Guitar</option>
          <option value="Ukulele">Ukulele</option>
        </select>
        <select
          className="border"
          value={newForm.songIsOriginal}
          name="songIsOriginal"
          onChange={handleChange}
        >
          <option value="false">Original Song</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      <input className = "bg-indigo-600 rounded-full py-0 px-2 mt-2 ml-10" type="submit" value="Add Song" />
    </form>
  </section>
  )
}