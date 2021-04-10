import { useObserver } from "mobx-react-lite";
import { NoteForm } from "./components/NoteForm";
import { useNotesStore } from "./contexts/NotesContext";

function App() {
  const notesStore = useNotesStore();

  return useObserver(() => (
    <div>
      <ul>
        {notesStore.notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
      <NoteForm />
    </div>
  ));
}

export default App;
