//importing core module http
// const http = require("http");

const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const errorController = require("./controllers/error");
const db = require("./util/database");

// function requestListener(req, res) {

// }
const app = express();

//allows us to set a global configuration value on our app
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "pug");
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//allows us to add new middleware functions
//next is a function that will e passed to the function that app.use accepts
// *app.use((req, res, next) => {
//  * console.log("In the middleware");
//    we call next to allow to travel to the next middleware, otherwise it just dies, so it allows the request to continue to the next middleware in line
//   if we don't call next we should return a response
//  * next();
// *});

// *app.use((req, res, next) => {
//  * console.log("In another middleware");
//   *res.send("<h2>Hello from express</h2>");
// *});

//! the order of handling requests matter
// *app.use("/add-product", (req, res, next) => {
//  * res.send(
//   *  "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
//   *);
// *});

// *app.post("/product", (req, res, next) => {
//  * console.log(req.body);
//   *res.redirect("/");
// *});

//! every request that start with / will be handled with this handler, we do this if every request needs to be handled by this and we put it first, but in this case we don't need that so we put it last, so if the request does not match any other request handler it goes through this
// *app.use("/", (req, res, next) => {
//  * res.send("<h2>Hello from express</h2>");
// *});

//is called by nodejs whenever a request reaches our server
// const server = http.createServer(app);
app.listen(3000);

// server.listen(3000);
