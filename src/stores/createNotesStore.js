import { nanoid } from "nanoid";

const createNotesStore = () => {
  return {
    notes: [],
    addNote(text) {
      this.notes.push({
        id: nanoid(),
        text,
      });
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  };
};

export default createNotesStore;
