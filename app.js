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
app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const password_confirmation = req.body.password_confirmation;

    if (!email || !password || !password_confirmation) {
        res.status(400).send("Missing data");
        return;
    }

    //placeholder for account checking
    if (accountExists(email)) {
        res.status(403).send("Account already exists");
        return;
    }

    if (password !== password_confirmation) {
        res.status(400).send("passwords do not match");
        return;
    }

    if (password.length < 8) {
        res.status(400).send("password is not long enough");
        return;
    }

    createAccount(email, password);
    res.status(200).send("Account created");

    //placeholder for account checking
    const accountExists = (email) => {
        return false;
    };

    const createAccount = (email, password) => {
        //placeholder for account creation
    };
});

app.listen(3001, () => console.log("Server ready"));
