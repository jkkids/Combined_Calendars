'use strict'

const path = require('path');
const express = require('express');
const router = express.Router();

router.get("", function(req, res, next){
  res.send("Request Received and response sent!")
  next();
})

module.exports = router;
