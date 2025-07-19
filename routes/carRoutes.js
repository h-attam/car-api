const express = require("express");
const {
  getAllCars,
  getCar,
  deleteCar,
  updateCar,
  createCar,
} = require("../controllers");
const idControl = require("../middleware/idControl");

const router = express.Router();

router.route("/api/v1/cars").get(getAllCars).post(createCar);

router
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

module.exports = router;

//bu dosyada server.js dosyası dışında route tanımı yaptık
//server.js den buraya aktardığım verileri orada silmedim normalde kod kalabalığı olmaması için silinmesi gerekiyor ama ben örnek olarak göünmesi açısından silmeyip o şekilde bırakmayı tercih ettim
