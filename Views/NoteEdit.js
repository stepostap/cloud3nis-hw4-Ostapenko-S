import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, Button, Image } from 'react-native';
import Note from '../Models/Note'
import * as ImagePicker from 'expo-image-picker';

const NoteEdit = ({route, navigation}) => {
    const { noteAction } = route.params;
    
    const [image, setImage] = useState(route.params.note.image)
    const [title, setTitle] = React.useState(route.params.note.title)
    const [text, setText] = React.useState(route.params.note.text)

    const save = () => {
        noteAction(new Note(title, text, image), route.params.note.id)
        navigation.goBack()
    }


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                placeholder="Title" 
                onChangeText={setTitle} 
                value={title}
                style={[styles.titleInput]}/>
            <TextInput 
                multiline="true"
                placeholder="Text" 
                onChangeText={setText} 
                value={text}  
                style={[styles.textInput]}/>
            {image  && (
                <Image source={{uri: image}} style={styles.image} />
            )}
            <View style={styles.button}>
                <Button 
                    title="Pick image"
                    onPress={pickImage}
                    />
            </View>
            <View style={styles.button}>
                <Button 
                    title="Save"
                    onPress={save}
                    />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        
    }, 

    titleInput: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#689AD3',
        paddingLeft: 10,
        paddingBottom: 3,
        paddingTop: 3,
        textAlign: 'center',
        width: 300
    },
    textInput: {
        marginTop: 30,
        marginBottom: 10,
        width: 350,
        height: 300,
        
    },
    image: {
        width: 150,
        height: 150,
        marginTop: 30,
        marginBottom: 10
    }
})

export default NoteEdit