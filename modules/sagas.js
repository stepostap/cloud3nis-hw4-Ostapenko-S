import { takeLatest, takeEvery } from 'redux-saga/effects'
import { GET_NOTES, ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from './actions'
import { call, put } from "@redux-saga/core/effects"; 
import axios from "axios";

export const NOTES_GOT = 'NOTES_GOT'
export const NOTE_CREATED = 'NOTE_CREATED'
export const NOTE_REMOVED = 'NOTE_REMOVED'
export const NOTE_UPDATED = 'NOTE_UPDATED'

export function *rootSaga() {
    yield takeLatest(GET_NOTES, fetchNotes)
    yield takeEvery(ADD_NOTE, createNote)
    yield takeEvery(REMOVE_NOTE, deleteNote)
    yield takeEvery(UPDATE_NOTE, updateNote)
}

export function *createNote(action) {
    const note = action.note
    let res;

    try {
        res = yield call(axios.post, 'http://localhost:3000/notes/', note)
    } catch(e) {
        alert(e)
        return
    }

    yield put({ type: NOTE_CREATED, note: res.data })
}

export function *deleteNote(action) {
    const deleteID = action.id;
    let res;

    try {
        res = yield call(axios.delete, 'http://localhost:3000/notes/' + deleteID);
    } catch(e) {
        alert(e)
        return
    }

    yield put({ type: NOTE_REMOVED, id: deleteID })
}

export function *updateNote(action) {
    const noteUpdate = action.updated;
    const updateID = action.id;
    let res;

    try {
        res = yield call(axios.put, 'http://localhost:3000/notes/' + updateID, noteUpdate);
    } catch (e) {
        alert(e)
        return
    }

    yield put({type: NOTE_UPDATED, note: res.data})
}

export function *fetchNotes() {
    let allNotes;

    try {
        allNotes = yield call(axios.get, 'http://localhost:3000/notes/')
    } catch(e) {
        alert(e)
        return
    }

    yield put({type: NOTES_GOT,  notes: allNotes.data })
}