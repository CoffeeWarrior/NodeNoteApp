// var obj = {
//     name: "Lucas"
// };

// var stringObj = JSON.stringify(obj)

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Lucas", "age": 18}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: "some Body"
}

originalNoteString = JSON.stringify(originalNote);
//originalNoteString: store the string in notes.json 
fs.writeFileSync("notes.json", originalNoteString, )

//read the stored note and convert to object

var noteString = fs.readFileSync("notes.json")

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);