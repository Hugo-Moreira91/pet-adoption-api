import express from "express";
import petsRoutes from "./routes/petsRoutes";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/pets", petsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
