const express = require("express");
const cors = require("cors");
const bodyParcser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParcser.json());



app.listen(13531, () => {
    console.log("Сервер запущен на порту 13531");
});