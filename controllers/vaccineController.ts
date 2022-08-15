import { Request, Response } from "express";
import VaccineModel,{Vaccine} from "../models/vaccineModel"; 
import HttpStatusCodes from "http-status-codes";

export const getVaccineSummary = async (req: Request, res: Response) => {
    // console.log('query ', req.query)
    const country = req.query.c;
    const dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;
    const range = Number(req.query.range);
    const sort = req.query.sort;

    try {
    const vaccineSummary:Vaccine[] = await VaccineModel.aggregate([
        //   filter conditions
        {$match:{$and:[{YearWeekISO:{$gte:dateFrom} },{YearWeekISO:{$lte:dateTo}}
            ,{ReportingCountry:country} ]} },
            //  pick variable for export
            {$project:{_id:0, "weekStart":dateFrom, "weekEnd":dateTo,NumberDosesReceived:1}},
           //  set range
            {$limit: range},
            // sort by YearWeekISO
            {$sort:{YearWeekISO: 1}}
    ]);

     res.status(HttpStatusCodes.OK).json({summary: vaccineSummary})
        
    } catch (error) {
        res.status(HttpStatusCodes.BAD_REQUEST).json({error: 'query format error'})
    }



}


