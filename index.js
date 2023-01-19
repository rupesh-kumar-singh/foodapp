require("./db/conn");
const express = require("express");
const router = require("./Routes/createuser");
const routers = require("./Routes/display");
const routercart = require("./Routes/cart");
const orderdata = require("./Routes/Orderdata");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 5052;

app.use(cors());
app.use(express.json());
app.use(router);
app.use(routers);
app.use(routercart);
app.use(orderdata);
app.listen(port, () => {
  console.log(`done${port}`);
});
