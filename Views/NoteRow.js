import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Button, Image } from 'react-native';

class NoteRow extends React.Component {
    
    constructor(props) {
        super(props)
        this.note = props.note
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <View style={styles.container}>
                        { this.note.image && (
                            <Image source={{uri: this.note.image}} style={styles.image} />
                        )}   
                        <View>
                            <Text style={styles.title}> {this.note.title}</Text>
                            <Text style={styles.text}> {this.note.text} </Text>
                        </View>
                    </View>
                    <Button 
                        color="#ff5c5c"
                        title="Delete" 
                        onPress={() => this.props.onDelete(this.note)} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    row: {
        marginBottom: 15,
        backgroundColor: '#689AD3',
        paddingHorizontal: 12,
        borderRadius: 8,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 20,
        marginBottom: 5
    },
    text: {
        maxHeight: 60
    },
    image: {
        width: 70,
        height: 70,
        marginTop: 5,
        marginRight: 15,
    },
    
})

export default NoteRow