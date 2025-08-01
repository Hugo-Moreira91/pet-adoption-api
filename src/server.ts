import express from "express";
import petsRoutes from "./routes/petsRoutes";
import adoptersRoutes from "./routes/adoptersRoutes";
import adoptionsRoutes from "./routes/adoptionsRoutes";

const port = 3000;
const app = express();

app.use(express.json());

app.use("/pets", petsRoutes);
app.use("/adopters", adoptersRoutes);
app.use("/adoptions", adoptionsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
