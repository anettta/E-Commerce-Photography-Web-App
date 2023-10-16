import express from "express";
import errorMiddleware from "./middlewares/error.js";
const app = express();
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  express.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(cookieParser());
app.use(fileUpload());
// const dotenv = require("dotenv");

// setting up config file
// dotenv.config({ path: "config.env" });
// setting up config file

if (process.env.NODE_ENV !== "PRODUCTION")
  dotenv.config({ path: "config.env" });

// Import all routes
import products from "./routes/product.js";
import auth from "./routes/auth.js";
import order from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";
import storyRoutes from "./routes/story.js";
import { fileURLToPath } from "url";

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", paymentRoutes);
app.use("/api/v1", storyRoutes);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/myapp/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/myapp/build/index.html"));
  });
}

// Middleware to handle errors globally
app.use(errorMiddleware);

export default app;
