# A Simple Nodejs Express Typescript MongoDb Test App
T

## Requirements
* Nodejs 
* MongoDb

## How to run 
### `npm install` 
The above command will install all required dependencies.


### `npm start` 
The above command will start the application, ensure you have a mongoDb setup before starting this application. The application will run on [http://localhost:5000](http://localhost:5000)

On startup, the program check if data exist in database. If no data, the program will automatically load data to Database. This may take about 1 or 2 minute. This only happen on
first startup.

## testing
### `npm test` 
The above command will run a test for this application.
* Default url will be tested [http://localhost:5000](http://localhost:5000) ✔ Ensure server is created without error

* Testing [http://localhost:5000/vaccine-summary?c=AT&dateFrom=2020-W10&dateTo=2020-W53&range=5]
(http://localhost:5000/vaccine-summary?c=AT&dateFrom=2020-W10&dateTo=2020-W53&range=5)
Expected a return summary data to be more than zero

* Testing [http://localhost:5000/vaccine-summary?c=AT&dateFrom=2017-W00&dateTo=2018-W02&range=5]
(http://localhost:5000/vaccine-summary?c=AT&dateFrom=2017-W00&dateTo=2018-W02&range=5)
Expected return summary data to be empty


