import  config from "config";
import  {connect, ConnectionOptions, connection} from "mongoose";
import csvtojson from 'csvtojson';
import fs from 'fs';
import VaccineModel,{Vaccine} from "../models/vaccineModel";

const connectDb =async () => {

    try {
        const mongodb_uri: string = config.get('MONGODB_URI');
        const options: ConnectionOptions = {
            useNewUrlParser: true,
            // useCreateIndex: true
          };
        await connect(mongodb_uri,options);
        console.log("MongoDB Connected... to ", mongodb_uri);
        loadCsvData();
        
    } catch (error: any) {
        console.error('DB connection error ',error.message);
        // Exit process with failure
        process.exit(1);
    }
    
}


const loadCsvData = async()=> {

connection.db.collection('covid-datas').count((err, result)=> {
    console.log('total records in covid-data collection ', result)
    if(result === 0){
        console.log('loading csv data to database..........................')
        console.log('this may take up 2 minutes........please wait...')
        csvtojson().fromFile(__dirname + '/data.csv').then(newJsonData => {
            // console.log(newJsonData)
            VaccineModel.insertMany(newJsonData).then(()=> {
                console.log('data insertion was successful')
                console.log('Thank you for waiting.')

            }).catch(()=> {
                console.log('error inserting data to collection')
            })
        });
    }

});
}

export default connectDb;