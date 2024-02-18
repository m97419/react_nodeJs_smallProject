const express = require("express")
const router = express.Router()

const photoController = require("../controllers/photoController")

router.get("/", photoController.getAllPhotos)
router.post("/", photoController.createNewPhoto)
router.delete("/", photoController.deletePhoto)
router.put("/", photoController.updatePhoto)

module.exports = router