// R E Q U I R E  D E P E N D E N C I E S
const express = require("express");

// C O N N E C T  R O U T E S  T O  S E R V E R
const apiRoutes = require("./Routes/apiroutes");
const htmlRoutes = require("./Routes/htmlroutes");

// E X P R E S S  S E R V E R
const app = express();

// P O R T
const PORT = process.env.PORT || 5500;

// M I D D L E W A R E  T O  P A R S E  J S O N  D A T A
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// F O L D E R  F O R  T H E  B R O W S E R  T O  S E E
app.use(express.static("public"));

// R O U T E S
app.use("/api", apiroutes);
app.use("/", htmlRoutes);

// L I S T E N E R
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
