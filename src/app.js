const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// setting the view engine
app.set("view engine", "hbs");
// now the path of views has been changed
app.set("views", template_path);
// registering the partials
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));

app.get("", (req,res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        errMsg : "Oops Page Not Found"
    });
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});