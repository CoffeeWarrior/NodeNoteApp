console.log("Starting Notes.js");

const fs = require("fs");

//utility functions
const fetchNotes = () => {
    try{
        var notesString = fs.readFileSync("notes-data.json");
        return   notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

//exported functions

const addNote = (title, body) => {
    const notes = fetchNotes();
    var note = {
        title,
        body
    };
    

    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    console.log("getting all notes");
}

const getNote = (title) => {
    console.log("getting note ", title);
}

const removeNote = (title) => {
    const notes = fetchNotes();
    
    const  filteredNotes = notes.filter((note) => {
        return note.title !== title
    })

    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};