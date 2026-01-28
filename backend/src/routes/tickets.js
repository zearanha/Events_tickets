import express from "express"
import * as controller from "../controllers/ticketController.js"

const router = express.Router()

router.post("/ingresso", controller.comprarIngresso)
router.get("/validar/:codigo", controller.validarIngresso)

module.exports = router
