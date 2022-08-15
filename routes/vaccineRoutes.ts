
import express,{Request, Response} from  'express';
import {getVaccineSummary} from  '../controllers/vaccineController';
const vaccineRoutes = express.Router();


vaccineRoutes.get('/vaccine-summary', getVaccineSummary )


// module.exports = { router}
export default vaccineRoutes;