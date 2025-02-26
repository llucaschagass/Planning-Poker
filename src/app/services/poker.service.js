const { v4: uuidv4 } = require("uuid");

const rooms = {};

const createRoom = () => {
    const roomId = uuidv4();
    rooms[roomId] = { players: {} };
    return { roomId };
};

const joinRoom = (roomId, playerName) => {
    if (!rooms[roomId]) {
        throw new Error("Sala não encontrada");
    }

    const playerId = uuidv4();
    rooms[roomId].players[playerId] = { name: playerName, vote: null };
    
    return { playerId };
};

const getPlayersInRoom = (roomId) => {
    if (!rooms[roomId]) {
        throw new Error("Sala não encontrada");
    }

    return Object.values(rooms[roomId].players);
};

const resetVotes = (roomId) => {
    if (!rooms[roomId]) {
        throw new Error("Sala não encontrada");
    }

    Object.keys(rooms[roomId].players).forEach(playerId => {
        rooms[roomId].players[playerId].vote = null;
    });

    return { message: "Votação reiniciada" };
};

module.exports = {
    createRoom,
    joinRoom,
    getPlayersInRoom,
    resetVotes
};
