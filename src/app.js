const express = require("express");
const cors = require("cors");

const pokerRoutes = require("./app/routes/poker.routes");
const setupSwagger = require("./app/docs/swagger");

const app = express();

app.use(cors());
app.use(express.json());

// Configurando o Swagger
setupSwagger(app);

// Registrando as rotas
app.use("/api/poker", pokerRoutes);

app.get("/", (req, res) => {
    res.send("Planning Poker API rodando!");
});

module.exports = app;
