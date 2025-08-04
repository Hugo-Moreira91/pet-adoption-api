import express from "express";
import petsRoutes from "./routes/petsRoutes";
import adoptersRoutes from "./routes/adoptersRoutes";
import adoptionsRoutes from "./routes/adoptionsRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/pets", petsRoutes);
app.use("/adopters", adoptersRoutes);
app.use("/adoptions", adoptionsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
