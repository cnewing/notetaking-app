// R E Q U I R E  D E P E N D E N C I E S
const express = require("express");
const epress = require("express");

// C O N N E C T  R O U T E S  T O  S E R V E R
const apiRoutes = require("./Routes/apiroutes");
const htmlRoutes = require("./Routes/htmlroutes");

// E X P R E S S  S E R V E R
const app = express();

// P O R T
const PORT = process.env.PORT || 3000;
