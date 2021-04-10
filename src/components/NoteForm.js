import React, { useEffect, useState } from "react";
import { useNotesStore } from "../contexts/NotesContext";

export const NoteForm = () => {
  const [note, setNote] = useState("");
  const notesStore = useNotesStore();

  useEffect(() => {
    console.log(`Notas actuales ${note}`);
  });

  return (
    <div>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={() => notesStore.addNote(note)}>Agregar Nota</button>
    </div>
  );
};
