"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petsRoutes_1 = __importDefault(require("./routes/petsRoutes"));
const adoptersRoutes_1 = __importDefault(require("./routes/adoptersRoutes"));
const adoptionsRoutes_1 = __importDefault(require("./routes/adoptionsRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use("/pets", petsRoutes_1.default);
app.use("/adopters", adoptersRoutes_1.default);
app.use("/adoptions", adoptionsRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
