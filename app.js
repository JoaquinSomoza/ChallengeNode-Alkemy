/* const express = require('express');
const port = 3000;


const personajesRouter = require('./src/routes/personajesRoutes');
const peliculasRouter = require('./src/routes/peliculasRoutes');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/characters', personajesRouter);
app.use('/movies', peliculasRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}) */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Require Routes
const personajesRouter = require("./src/routes/personajesRoutes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/characters", personajesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;