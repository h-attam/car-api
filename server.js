const fs = require("fs");
const express = require("express");

// araba verilerini al
let cars = JSON.parse(fs.readFileSync(`${__dirname}/data/cars.json`, "utf-8"));

// Controllers (örnek)
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("./controllers");
const { logger } = require("./middleware");
const idControl = require("./middleware/idControl");
const carRoutes = require("./routes/carRoutes");

// Express kurulum
const app = express();
const PORT = 3000;

// JSON Body parse için middleware(arayazılım )
app.use(logger);

//isteklerin body/header/param bölümlerini isteyen middleware
app.use(express.json());

// Route tanımları
app.use(carRoutes);

// Server başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
