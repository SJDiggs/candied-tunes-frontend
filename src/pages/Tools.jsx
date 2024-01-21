import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewSongForm from './NewSongForm';
import DeleteSongForm from './DeleteSongForm';

const Tools = (props) => {
    const [showNewSongForm, setShowNewSongForm] = useState(false);
    const [showDeleteSongForm, setShowDeleteSongForm] = useState(false)
    const [songName, setSongName] = useState('')

    const toggleNewSongForm = () => {
        setShowNewSongForm(!showNewSongForm)
    }
    
    const toggleDeleteSongForm = () => {
        setShowDeleteSongForm(!showDeleteSongForm)
    }

    const handleResetPlaylist = () => {
        // Add logic for Reset Playlist action
        console.log("Resetting Playlist");
    }

    const handleRequestsPlaylist = () => {
        // Add logic for view requests
        console.log("View Audience Requests")
    }

    const handleAddSong = () => {
        toggleNewSongForm()
        // Add logic for Add Song action
        console.log("Adding a song to Playlist");
    }

    const handleDeleteSong = () => {
        toggleDeleteSongForm()
        // Add logic for Remove Song action
        console.log("Removing a song from Playlist");
    }

    const handleUpdateSong = () => {
        // Add logic for Update Song action
        console.log("Updating a song in Playlist");
    }

    const handleAddShow = () => {
        // Add logic for Add Show action
        console.log("Adding a show");
    }

    const handleDeleteShow = () => {
        // Add logic for Delete Show action
        console.log("Deleting a show");
    }

    const handleUpdateShow = () => {
        // Add logic for Update Show action
        console.log("Updating a show");
    }

    const handleUpdateAbout = () => {
        // Add logic for Update About action
        console.log("Updating About");
    }

    const handleSendEmail = () => {
        // Add logic for Send Email action
        console.log("Sending an email to fans");
    }

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold text-gray-400 mt-20 mb-2">Musician Tools</h1>
            
            {/* Songs Table */}
            <div className="flex justify-center">
            <table className="table-auto w-3/4 border border-gray-500 mb-8">
                <thead>
                    <tr className="bg-gray-500">
                        <th className="p-4 text-left w-1/2">Song Management</th>
                        <th className="p-4 w-1/2"></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                            <td className="p-4">See Requested Songs</td>
                            <td className="p-4">
                                <Link to="/requests">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRequestsPlaylist}>
                                        Requests
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    <tr>
                        <td className="p-4">Reset Playlist - Recommended after every show</td>
                        <td className="p-4"><button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleResetPlaylist}>Reset</button></td>
                    </tr>
                    <tr>
                        {/* ADD A SONG TO PLAYLIST */}
                            <td className="p-4 font-bold" onClick={handleAddSong} style={{ cursor: 'pointer', color: 'silver' }}>Add a song to your playlist - Click Here</td>
                            <td className="p-4"></td>
                        </tr>
                        {/* Conditionally render NewSongForm */}
                        {showNewSongForm && (
                            <tr>
                                <td colSpan="2">
                                    <NewSongForm />
                                </td>
                            </tr>
                        )}

                    {/* REMOVE A SONG FROM THE PLAYLIST */}
                    <tr>
                    <td className="p-4 font-bold" onClick={handleDeleteSong} style={{ cursor: 'pointer', color: 'silver' }}>Remove a song to your playlist - Click Here</td>
                            <td className="p-4"></td>
                        </tr>
                        {/* Conditionally render DeleteSongForm */}
                        {showDeleteSongForm && (
                            <tr>
                                <td colSpan="2">
                                    <DeleteSongForm />
                                </td>
                            </tr>
                        )}

                    <tr>
                        <td className="p-4">Update a song in your playlist</td>
                        <td className="p-4"><button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleUpdateSong}>Update</button></td>
                    </tr>
                </tbody>
            </table>
            </div>

            {/* Shows Table */}
            <div className="flex justify-center">
            <table className="table-auto w-3/4 border border-gray-500 mb-8">
                <thead>
                    <tr className="bg-gray-500">
                        <th className="p-4 text-left w-1/2">Show Management</th>
                        <th className="p-4 w-1/2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4">Add a show</td>
                        <td className="p-4"><button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleAddShow}>Add</button></td>
                    </tr>
                    <tr>
                        <td className="p-4">Delete a show</td>
                        <td className="p-4"><button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleDeleteShow}>Delete</button></td>
                    </tr>
                    <tr>
                        <td className="p-4">Update a show</td>
                        <td className="p-4"><button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleUpdateShow}>Update</button></td>
                    </tr>
                </tbody>
            </table>
            </div>

            {/* Admin Table */}
            <div className="flex justify-center">
            <table className="table-auto w-3/4 border border-gray-500 mb-8">
                <thead>
                    <tr className="bg-gray-500">
                        <th className="p-4 text-left w-1/2">Admin</th>
                        <th className="p-4 w-1/2"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-4">Update my About</td>
                        <td className="p-4"><button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleUpdateAbout}>Update</button></td>
                    </tr>
                    <tr>
                        <td className="p-4">Send my fans an email</td>
                        <td className="p-4"><button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSendEmail}>Send Email</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Tools;
