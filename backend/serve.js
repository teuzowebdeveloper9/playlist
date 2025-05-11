import express from "express";
import cors from "cors";
import { musics } from "../src/components/musics.js";

const app = express();
const port = 3010;

app.use(cors())

app.get("/api/musics", (req, res) => {
  res.json(musics);
});

app.listen(port, () => {
  console.log('servidor rodando na porta 3010') 
})
