const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
   password: {
    type: String,
    required: true,
    min: 8,
  },
  registeredEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
