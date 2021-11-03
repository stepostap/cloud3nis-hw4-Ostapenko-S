export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const GET_NOTES = 'GET_NOTES';

export function create(note) {
  return { type: ADD_NOTE, note: note };
}

export function update(updatedNote, id) {
    return { type: UPDATE_NOTE, updated: updatedNote, id: id }
}

export function remove(id) {
  return { type: REMOVE_NOTE, id: id };
}

export function get() {
    return { type: GET_NOTES }
}