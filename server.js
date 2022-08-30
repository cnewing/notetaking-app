// R E Q U I R E  D E P E N D E N C I E S
const express = require("express");
const path = require("path");
const uuid = require("./Develop/uuid/uuid");

// E X P R E S S  S E R V E R  &  P O R T
const app = express();
const PORT = process.env.PORT || 5501;

// R O U T E  C O N N E C T I O N S
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");

// P A R S E  J S O N  D A T A
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
// F O L D E R  F O R  T H E  B R O W S E R  T O  S E E
app.use(express.static("public"));

// L I S T E N E R
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
