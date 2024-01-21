import { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requestedSongs, setRequestedSongs] = useState([]);

  const addRequestedSong = (songInfo) => {
    setRequestedSongs((prevSongs) => [...prevSongs, songInfo]);
  };

  return (
    <RequestContext.Provider value={{ requestedSongs, addRequestedSong }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequestContext = () => {
  return useContext(RequestContext);
};
