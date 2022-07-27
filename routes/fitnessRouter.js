const express = require("express");
const fitnessController = require("./../controllers/fitnessController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, fitnessController.getAllRecords)
  .post(authController.protect, fitnessController.createNewFitnessClass);

router
  .route("/:id")
  .get(authController.protect, fitnessController.getOneRecord)
  .patch(authController.protect, fitnessController.updateData)
  .delete(authController.protect, fitnessController.delete);

module.exports = router;
