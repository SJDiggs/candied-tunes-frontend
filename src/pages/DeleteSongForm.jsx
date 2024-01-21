import { useState } from "react";
import { deleteSong } from "../utilities/songs-service";

export default function DeleteSongForm(props) {
  // state to hold formData and messages
  console.log('DeletedSongForm.jsx')
  const [deleteForm, setDeleteForm] = useState({
    songName: "",
    songArtist: "",
  })
  const [statusMessage, setStatusMessage] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    // console.log(deleteForm, 'current data')

    try{
        // Invoke the deleteSong function with songName and songArtist
        const response = await deleteSong(deleteForm.songName, deleteForm.songArtist)
        setStatusMessage('Song deleted successfully')
        
        
    }catch(err){
        console.log('Error deleting song: ', err.message)
        setStatusMessage('Song not found...')
    }

    // Reset the form afeer successfully sumitted
    setDeleteForm({
        songName: "",
        songArtist: "",
    })
  }

  function handleChange(e) {
    // Clear status message when user starts typing in another field
    setStatusMessage(null)
    setDeleteForm({...deleteForm, [e.target.name]: e.target.value})
  }

  return (
  
    <section>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input className = "border h-full w-1/4 px-2 py-1"
            type="text"
            value={deleteForm.songName}
            name="songName"
            placeholder="Song Name"
            onChange={handleChange}
        />
        <input className = "border h-full w-1/2 px-2 py-1"
            type="text"
            value={deleteForm.songArtist}
            name="songArtist"
            placeholder="Artist"
            onChange={handleChange}
        />
        
        <input 
            className = "bg-indigo-600 rounded-full py-0 px-2 mt-2 ml-auto" 
            type="submit" 
            value="Delete Song" 
        />
    </form>
    {/* Display status message */}
        {statusMessage && <p className="text-green-500 text-center mt-2 italic">{statusMessage}</p>}
  </section>
  )
}