const Event = require("../models/eventModel");

module.exports.addEvent = async (req, res) => {
 try {
    const { title, description, date, time, location, category, organizer, image, registrationLink,technologies } = req.body;

    // Create a new event object
    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      technologies,
      category,
      organizer,
      image,
      registrationLink
    });

    // Save the new event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the event' });
  }
};


module.exports.getAllEvents = async (req, res) => {
   try {
    // Retrieve all events from the database
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

module.exports.getEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    // Retrieve the event from the database based on the eventId
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the event' });
  }
};