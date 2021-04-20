const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://deepesh:18085021dA@cluster0.dbb0y.mongodb.net/myfirstdatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const reportsRouter = require('./routes/reports.js');

app.use('/reports', reportsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});