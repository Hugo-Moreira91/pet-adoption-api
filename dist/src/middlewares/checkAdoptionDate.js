"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function checkAdoptionDate(req, res, next) {
    const { adoption_date } = req.body;
    try {
        if (!adoption_date) {
            return res.status(400).send({ message: "Adoption date is required" });
        }
        next();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (error) {
        return res.status(500).send({ message: "Internal server error" });
    }
}
exports.default = checkAdoptionDate;
