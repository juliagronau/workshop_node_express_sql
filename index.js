import express from "express";
import { getUsers } from "./controllers/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable body parsing for JSON
app.use(express.json());

app.route("/users").get(getUsers);

app.listen(port, () => console.log(`Server running in port: ${port}`));
