import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();

(async() => {
  await db.sync();
})();

app.use(cors());

app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);

app.listen(5000, () => {
  console.log('server up and running ...');
});
