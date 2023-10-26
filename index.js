import express from "express";
import * as userRoute from "./src/routes/userRoute.js";

const app = express();

app.use(userRoute.router);


app.listen(8000);