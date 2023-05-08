import express from "express";
import {
  getSingleTour,
  createTour,
  deleteTour,
  updateTour,
  getAllTour,
} from "../controllers/tourController.js";

const router = express.Router();

router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTourr);

export default router;
