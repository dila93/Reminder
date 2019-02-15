const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
	title: { type: String, required: true },
	desciption: { type: String, required: true },
	type: { type: Number, required: true }
});

module.exports = mongoose.model('Note', NoteSchema);