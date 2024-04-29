import { Router } from "express";
import {
  createTable,
  deleteNote,
  getData,
  postData,
  updateNote,
} from "../controllers/notesControllers.js";

const router = Router();
router.get("/setup", createTable);
router.get("/get-data", getData);
router.post("/add-note", postData);
router.delete("/delete-note/:id", deleteNote);
router.put("/update-note", updateNote);

export default router;
