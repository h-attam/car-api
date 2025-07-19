const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

//bütün araçları al
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Araç verileri alındı",
    results: cars.length,
    cars,
  });
};

//yeni araç ekle
exports.createCar = (req, res) => {
  //araç verisine id ekle
  const newCar = { ...req, body, id: crypto.randomUUID() };

  //yeni aracı diziye ekle
  cars.push(newCar);

  // json dosyasını güncelle
  write(cars);

  // client'e cevap gönder
  res.status(201).json({
    message: "Yeni araç oluşturuldu",
    car: newCar,
  });
};

//bir aracı al
exports.getCar = (req, res) => {
  res.status(200).json({
    message: "Araç bulundu",
    car: req.car,
  });
};

//aracı sil
exports.deleteCar = (req, res) => {
  res.status(200).json({
    message: "Araç bulundu",
    car: found,
  });

  //id'si gelen aracı diziden kaldır
  cars = cars.filter((car) => car.id !== req.params.id);

  //json dosyasını güncelle
  write(cars);

  // client'a cevap gönder
  res.status(204).json({
    message: "Araç silindi",
  });
};

//bir aracı güncelle
exports.updateCar = (req, res) => {
  //isteğin body kısmındaki güncellenecek değerleri al
  const updateData = req.body;

  //aracın güncel değerlerine sahip yeni bir nesne oluştur
  const updateCar = { ...req.car, ...updateData };

  //güncellenecek elemanın sırasını bul
  const index = cars.findIndex((car) => car.id == updatedCar.id);

  //dizideki eski aracın yerine yenisini koy
  cars.splice(index, 1, updatedCar);

  //json dosyasını güncelle
  write(cars);

  //client'a cevap gönder
  res.status(200).json({
    message: "Araç güncellendi",
    car: updateCar,
  });
};
