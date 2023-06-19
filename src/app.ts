import express from "express";
import { db } from "./configs/db.config";
// import { router } from "./routes/user.routes";

const app = express();

app.use(express.json());

// app.use('/api/v1/users', router);

db.then(() => {
  app.listen(7070, () => console.log('Server is running on port 7070'));
})