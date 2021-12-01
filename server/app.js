require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./models");
const fs = require("fs");
const https = require("https");
const path = require("path");

//1. initial setting
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
  })
);

//2. routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const kakaoRoutes = require("./routes/kakaoRoutes");
const puppyRoutes = require("./routes/puppyRoutes");

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/kakao", kakaoRoutes);
app.use("/puppy", puppyRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    data: null,
    message: "not found",
  });
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    data: null,
    message: "something wrong",
  });
});

//3. connection
const PORT = process.env.HTTPS_PORT || 5000;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const options = {
    key: fs.readFileSync(path.resolve("key.pem"), "utf8"),
    cert: fs.readFileSync(path.resolve("cert.pem"), "utf8"),
  };
  https.createServer(options, app).listen(PORT, () => console.log(`now listening port ${PORT}`));
} else {
  app.listen(PORT, () => {
    console.log(`now listening port : ${PORT}`);
  });
}

db.sequelize
  .sync({ force: false, alter: true })
  .then(async () => {
    // db.Customer.bulkCreate([{ name: "joe" }, { name: "una" }, { name: "hori" }, { name: "dori" }]);

    // const targetCustomer = await db.Customer.findOne({ where: { id: 3 } });
    // const otherCustomer = await db.Customer.findOne({ where: { id: 1 } });
    // targetCustomer.addExile(otherCustomer);

    // console.log(targetCustomer.addExile, targetCustomer.getExile);

    //await db.Pinpointer.create({});

    console.log("successfully initialized sequelize");
  })
  .catch((err) => console.log(err));
