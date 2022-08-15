import { Vaccine } from './../../models/vaccineModel';
import request from "supertest";
import chai,{expect} from "chai";
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import app from '../../app';
import { response } from 'express';



describe("get vaccine summary", ()=> {
    it("expect  status OK and summary length greater than zero", (done)=> {
        chai.request(app).get('/vaccine-summary?c=AT&dateFrom=2020-W10&dateTo=2020-W53&range=5').then(response => {
            expect(response.body['summary']?.length).greaterThan(0)
            done();
        }).catch(done);
     
    });


    it("expect  status OK and summary length should be zero", (done)=> {
        chai.request(app).get('/vaccine-summary?c=AT&dateFrom=2017-W00&dateTo=2018-W02&range=5').then(response => {
            expect(response.body['summary']?.length).eql(0)
            done();
        }).catch(done);
     
    });
});