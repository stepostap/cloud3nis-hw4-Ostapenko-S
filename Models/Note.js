import uuid from 'react-native-uuid';

class Note {
    constructor(title, text, image) {
        this.id = uuid.v4()
        this.title = title
        this.text = text
        this.image = image
    }
}

export default Note