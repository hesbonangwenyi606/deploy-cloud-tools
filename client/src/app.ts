import express from "express";
import cors from "cors";
import toolRoutes from "./routes/toolRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tools", toolRoutes);

export default app;
