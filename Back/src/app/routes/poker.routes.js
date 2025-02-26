const express = require("express");
const pokerController = require("../controllers/poker.controller");

const router = express.Router();

router.post("/create-room", pokerController.createRoom);
router.post("/join-room", pokerController.joinRoom);
router.get("/room/:roomId/players", pokerController.getPlayersInRoom);
router.post("/room/:roomId/reset", pokerController.resetVotes);

module.exports = router;