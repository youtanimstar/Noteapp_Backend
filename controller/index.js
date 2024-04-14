const Note = require("../model/note");

async function handleAllNotes(req,res){
    const getAllNotes = await Note.find({});
    return res.status(200).json(getAllNotes);
}
async function handleCreateNote(req,res)
{
    const body = req.body;
    if(!body|| !body.noteTitle || !body.noteDes)
    {
        return res.status(400).json({status: "failed", message: "Please provide the required data"})
    }
    const result = await Note.create(body);
    return res.status(201).json({status:"success",id: result._id})
}
async function handleReadNote(req,res)
{
    const getNote = await Note.findById(req.params.id);
    
    if(!getNote) return res.status(400).json({status:"success",message: "cannot find the note"})
    return res.status(200).json(getNote);
}
async function handleUpdateNote(req,res)
{
    const newNote = req.body;
    if(!newNote|| !newNote.noteTitle || !newNote.noteDes)
    {
        return res.status(400).json({status: "failed", message: "Please provide the required data"})
    }
    const result = await Note.findByIdAndUpdate(req.params.id,newNote);
    return res.status(200).json({status:"success",id: result._id})
}
async function handleDeleteNote(req,res)
{
    const result = await Note.findByIdAndDelete(req.params.id);
    if(!result) return res.status(400).json({status: "failed", message: "Cannot find the user"})
    return res.status(200).json({status:"success",id: result._id})
}

module.exports = {
    handleAllNotes,
    handleCreateNote,
    handleReadNote,
    handleUpdateNote,
    handleDeleteNote
}