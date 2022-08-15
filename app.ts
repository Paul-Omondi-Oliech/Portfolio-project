import express,{Request, Response} from  'express';
import {json}  from 'body-parser';
import morgan from 'morgan';
import vaccineRoutes from './routes/vaccineRoutes';
import rateLimit from 'express-rate-limit';


const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 5 requests per `window` (here, per 5 minutes) request + response  10/2=5
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


import connectDb from './config/database';
const app = express();

app.use(json());
app.use(morgan("tiny"));
app.use(limiter);
app.use('/',limiter, vaccineRoutes);

//  connect to database
connectDb();


const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`server is listening on ${port}`);
});


app.get('/', (req : Request, res:Response)=> {
    res.status(200).send("Welcome to Covid 19 Vaccine  server")
})


app.listen();
export default app;