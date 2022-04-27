const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello from the server!"));
app.post("/login", (req, res) => {
    console.log("received login data");
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    if (email === "test@test.com" && password === "test") {
        console.log("we have a member!");
        res.redirect("http://localhost:3000/members");
        return;
    } else {
        console.log("not a member");
        res.redirect("http://localhost:3000/login");
    }
});

app.listen(3001, () => console.log("Server ready"));
