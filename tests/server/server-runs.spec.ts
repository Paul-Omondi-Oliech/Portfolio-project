import request from "supertest";
import {expect} from "chai";
import app from "../../app";

describe("server checks", ()=> {
    it("server is created without error", (done)=> {
       request(app).get('/').expect(200, done);
    });
});