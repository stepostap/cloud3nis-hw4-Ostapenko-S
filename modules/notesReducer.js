import { NOTES_GOT, NOTE_CREATED, NOTE_REMOVED, NOTE_UPDATED, SAGA_ERROR } from './sagas'

function notesReducer(notes = [], action) {
    switch (action.type) {
        case NOTES_GOT:
          return action.notes
        case NOTE_CREATED:
            return [...notes, action.note]
        case NOTE_REMOVED:
            return notes.filter((note, index) => note.id != action.id)
        case NOTE_UPDATED:
            const newNotes = [...notes]
            newNotes.map(note => {
                if (note.id === action.note.id) {
                    note.title = action.note.title
                    note.text = action.note.text
                    note.image = action.note.image
                }
            })
            return newNotes
        default:
            return notes;
    }
}
  
  export default notesReducer;

