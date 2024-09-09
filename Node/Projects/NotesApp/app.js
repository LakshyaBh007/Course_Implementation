const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//process shows the command as it is
//yargs makes the object

//add,remove,read,list commands needed

//create add command
yargs.command({
   command: 'add',
   describe: 'add a new note',
   builder: {
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    body:{
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
   },
   handler(argv){
       notes.addNote(argv.title,argv.body)
   } 
})

//create remove command
yargs.command({
   command: 'remove',
   describe: 'remove an existing note',
   handler: {
    title:{
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
   },
   handler(argv){
      notes.removeNote(argv.title);
   }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
        describe: 'note title',
        demandOption : true,
        type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse();
//console.log(yargs.argv);