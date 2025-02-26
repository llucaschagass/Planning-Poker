const pokerService = require("../services/poker.service");

const createRoom = (req, res) => {
    try {
        const result = pokerService.createRoom();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const joinRoom = (req, res) => {
    try {
        const { roomId, playerName } = req.body;
        const result = pokerService.joinRoom(roomId, playerName);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getPlayersInRoom = (req, res) => {
    try {
        const { roomId } = req.params;
        const result = pokerService.getPlayersInRoom(roomId);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const resetVotes = (req, res) => {
    try {
        const { roomId } = req.params;
        const result = pokerService.resetVotes(roomId);
        res.json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

module.exports = {
    createRoom,
    joinRoom,
    getPlayersInRoom,
    resetVotes
};
