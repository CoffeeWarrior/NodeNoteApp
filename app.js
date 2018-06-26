console.log("Starting App.js");

const fs = require("fs");
const  _ = require("lodash");
const yargs = require("yargs");


const notes = require("./notes");

const argv = yargs.argv;


var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs:", argv)


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
    noteArr.filter((note) => {
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