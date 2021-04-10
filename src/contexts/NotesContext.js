import React, { createContext, useContext } from "react";
import createNotesStore from "../stores/createNotesStore";
import { useLocalStore } from "mobx-react";

const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const notesStore = useLocalStore(createNotesStore);

  return <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>;
};

export const useNotesStore = () => useContext(NotesContext);
