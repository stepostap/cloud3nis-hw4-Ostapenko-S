import React from 'react';
import { View, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, Button, Platform } from 'react-native';
import Note from '../Models/Note';
import NoteRow from './NoteRow';
import { Component, useState } from "react/cjs/react.development";
import store from "../modules/store";
import { create, remove, get, update } from "../modules/actions";

const Notes = ({navigation}) => {
    const [notes, setNotes] = useState([])

    store.subscribe(() => {
        setNotes(store.getState().Notes)
    })

    const removeNote = (note) => {
        if (note.id === undefined) {
            return
        }
        store.dispatch(remove(note.id))
    }

    const createNote = (note, id) => {
        store.dispatch(create(note))
    }  

    const updateNote = (note, id) => {
        store.dispatch(update(note, id))
    }


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.navPanel} >
                    <View>
                        <Button 
                            title="Create" 
                            onPress={() => 
                                {navigation.navigate('Create', {noteAction: createNote, note: new Note("", "", null)})}} />
                    </View>
                </View>
            )
        })
    }, [navigation]);

    React.useEffect(() => {
        store.dispatch(get())
    }, [])

    const renderItem = (note) => {
        return (
            <TouchableOpacity onPress={ () => {
                    navigation.navigate('Edit', {noteAction: updateNote, note: note.item});
                } 
            }>
                <NoteRow note={note.item} onDelete={removeNote}/>
            </TouchableOpacity>
        )
    };

    const extractKey = (note, index) => { 
        return note.id 
    }

    return (
        <FlatList
            data={notes}
            keyExtractor={extractKey}
            renderItem={renderItem}
            style={styles.noteList}
        />
    )
}

const styles = StyleSheet.create({
    noteList: {
        paddingLeft: Platform.OS === 'web' ? 40 : 10,
        paddingRight: Platform.OS === 'web' ? 40 : 10,
        paddingTop: 20,
    },
    navPanel: {
        flexDirection: 'row',
        marginRight: 15
    }
})

export default Notes