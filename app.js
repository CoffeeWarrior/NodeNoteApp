const fs = require("fs");
const  _ = require("lodash");
const yargs = require("yargs");


const notes = require("./notes");

const title = {
    describe: "Title of note",
    demand: true,
    alias: "t"
};
const body = {
    describe: "Body of the note",
    demand: true,
    alias: "b"
}

const argv = yargs
    .command("add", "Add a new note", {
        title,
        body
    })
    .command("remove", "remove an existing note", {
        title
    }).command("list", "list all notes")
    .command("read", "read a specific note", {
        title
    })
    .help()
    .argv;


var command = argv._[0];


if( command === "add"){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note created");
        notes.logNote(note);
    }  else {
        console.log("this note already exists!");
    }

} else if (command === "list"){
    const noteArr = notes.getAll();
    const plural = noteArr.length > 1? "s":"";
    console.log(`Printing ${noteArr.length} note${plural}`)
    noteArr.forEach((note) => {
        notes.logNote(note);
    });

} else if (command === "remove"){
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved? "Note was removed" : "Note not found";
    console.log(message);

} else if (command === "read"){
    const note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    } else {
        console.log("no such note found");
    }
    

} else {
    console.log("command not recognized");

}