const express = require('express');
const morgan = require('morgan');
var app = express();

const { mongoose } = require('./databases/mongodb.js');

// Setings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Routes
app.use('/api/note', require('./routes/note.routes.js'));

//---
app.listen(app.get('port'), ()=>{
	console.log('server on port 3000')
})