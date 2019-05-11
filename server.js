const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const db = require("./config/keys");

// mongoose
//   .connect(db)
//   .then(() => console.log("=== MongoDB: CONNECTED ==="))
//   .catch((err) => console.log(err));

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

app.get("/", (req, res) => res.send("It works"));

app.listen(port, () => console.log(`Servert started on port: ${port}`));
