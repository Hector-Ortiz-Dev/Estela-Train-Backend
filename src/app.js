import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import journeyRoutes from "./routes/journeys.routes.js";
import payMethodRoutes from "./routes/payMethods.routes.js";
import ticketRoutes from "./routes/tickets.routes.js";
import cityRoutes from "./routes/cities.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/", authRoutes);
app.use("/api/", journeyRoutes);
app.use("/api/", payMethodRoutes);
app.use("/api/", ticketRoutes);
app.use("/api/", cityRoutes);

export default app;
