import express from "express";
import { db } from "../configs/db.config";
import { router } from "../routes/route";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', router);
app.get('/', (req, res) => {
  res.json({ message: "Oi express!" })
})
db.then(() => {
  app.listen(7070, () => console.log('Server is running on port 7070'));
})