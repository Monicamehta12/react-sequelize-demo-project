const express = require('express');
const bodyParser = require('body-parser')
const httpStatus = require('http-status');
const expressValidation = require("express-validation");
// const { validate, ValidationError, Joi } = require('express-validation')
const APIError = require('./helpers/APIError')
const app = express();
const { Sequelize, DataTypes } = require('sequelize')
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const cors = require('cors');

// set cors...
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const sequelize = require('./config/db');
const router = require('./index');
app.use('/api/', router);

//port
const PORT = process.env.PORT || 8080;

//testing api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Api'})
})

// validate errors
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    const error = new APIError(err.details, err.statusCode, true);
    console.log("error", error.message)
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(
      err.message,
      err.status,
      err.name === "UnauthorizedError" ? true : err.isPublic
    );
    return next(apiError);
  }
  return next(err);
});

// validate unknown routes
app.use((req, res, next) => {
  const error = new APIError("API Not Found", httpStatus.NOT_FOUND, true);
  return next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status).json({
    error: {
      message: err.isPublic ? err.message : httpStatus[err.status],
    },
  });
});


app.listen(PORT, () => {
    sequelize.sync().then(() => console.log('Successfully connected to DB')).catch(e => console.log(e));
    console.log(`server started on the port ${8080}`);
  });


