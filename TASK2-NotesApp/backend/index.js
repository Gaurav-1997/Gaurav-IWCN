import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import NoteRoutes from "./notes/routes/noteRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/notes", NoteRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
