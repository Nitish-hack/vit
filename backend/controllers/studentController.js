const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');

// Sign up controller
module.exports.signup = async (req, res) => {
  const { name, rollNumber, email, password } = req.body;

  try {
    // Check if the rollNumber or email already exists
    const existingStudent = await Student.findOne({
      $or: [{ rollNumber }, { email }]
    });

    if (existingStudent) {
      return res.status(409).json({ error: 'Student already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student object
    const newStudent = new Student({
      name,
      rollNumber,
      email,
      password: hashedPassword
    });

    // Save the new student to the database
    const savedStudent = await newStudent.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register student' });
  }
};

// Login controller
module.exports.login = async (req, res) => {
  const { rollNumber, password } = req.body;

  try {
    // Find the student based on the rollNumber
    const student = await Student.findOne({ rollNumber });

    // Check if the student exists
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordMatched = await bcrypt.compare(password, student.password);

    // Check if the passwords match
    if (!isPasswordMatched) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is correct, student is authenticated

    // Create and sign a JWT token
    const token = jwt.sign(
      { studentId: student._id },
      'mysecretkeyislol',
      { expiresIn: '1h' }
    );

    // Send the token in the response as "user"
    res.status(200).json({ user: token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

