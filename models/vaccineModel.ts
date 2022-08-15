
import { Document, model, Model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param YearWeekISO:string
 * @param ReportingCountry:string
 * @param Denominator:string
 * @param NumberDosesReceived:string
 * @param NumberDosesExported:string
 * @param FirstDose:string
 * @param SecondDose:string
 * @param DoseAdditional1:string
 * @param DoseAdditional2:string
 * @param UnknownDose:string
 * @param Region:string
 * @param TargetGroup:string
 * @param Vaccine:string
 * @param Population:string
 */

export interface Vaccine extends Document {
    YearWeekISO: string;
    ReportingCountry: string;
    Denominator: string;
    NumberDosesReceived: string;
    NumberDosesExported: string;
    FirstDose: string;
    SecondDose: string;
    DoseAdditional1: string;
    DoseAdditional2: string;
    UnknownDose: string;
    Region: string;
    TargetGroup: string;
    Vaccine: string;
    Population: string;
}

const vaccineSchema : Schema = new Schema({
    YearWeekISO:{type: String },
    ReportingCountry:{type: String },
    Denominator:{type: String },
    NumberDosesReceived:{type: String },
    NumberDosesExported:{type: String },
    FirstDose:{type: String },
    SecondDose:{type: String },
    DoseAdditional1:{type: String },
    DoseAdditional2:{type: String },
    UnknownDose:{type: String },
    Region:{type: String },
    TargetGroup:{type: String },
    Vaccine:{type: String },
    Population:{type: String },


});

const VaccineModel:  Model<Vaccine> = model('covid-data', vaccineSchema);

export default VaccineModel;