import express from "express";
import {
  getUsers,
  getUserById,
  createNewUser,
  editUser,
  deleteUserById,
} from "./controllers/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable body parsing for JSON
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(
    "<h1>This is a user API</h1><br><h2>Those are the endpoints available:<h2/><p>To retrieve all users: /users</p><p>To retrieve a single user: /users/:id</p>"
  );
});

app.route("/users").get(getUsers).post(createNewUser);
app.route("/users/:id").get(getUserById).put(editUser).delete(deleteUserById);

app.listen(port, () => console.log(`Server running in port: ${port}`));
