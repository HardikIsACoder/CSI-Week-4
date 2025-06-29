const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Feed Route
app.get("/", (req, res) => {
  res.render("feed", { title: "Feed" });
});

// Profile Route
app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "My Profile",
    user: { name: "Hardik Agrawal", pass: 1234 },
  });
});

// Login Route
app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
