const {
  addEvent,
  getAllEvents
} = require("../controllers/eventController");

const router = require("express").Router();

router.post("/addevent", addEvent);
router.get("/allevents", getAllEvents);

module.exports = router;
