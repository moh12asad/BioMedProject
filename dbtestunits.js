var request = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const app = require('./app.js')
const conn = require('./Database/database.js');

let server = require('./server.js');
var expect = chai.expect;
chai.use(chaiHttp);

var test = require('mocha').test;
//1

describe('Check if the routes goes to login page!', function() {

    test('responds to /Log-In', async() => {
        const res = await request(app).get('/Log-in.html');
        expect(res.should.have.status(200));
    });
});
//2

describe('Check if the routes goes to register page!', function() {

    test('responds to /Sign-Up', async() => {
        const res = await request(app).get('/Sign-Up.html');
        expect(res.should.have.status(200));
    });
});

//3

describe('Check if the routes goes to profile page!', function() {

    test('responds to /profile', async() => {
        const res = await request(app).get('/profile.ejs');
        expect(res.should.have.status(200));
    });
});

//4

describe('Check if the routes goes to Home Page', function() {

    test('responds to /Home', async() => {
        const res = await request(app).get('/Home.html');
        expect(res.should.have.status(200));
    });

});
//5
describe('Check if the routes goes to customer profile Page', function() {

    test('responds to /Profile-cos', async() => {
        const res = await request(app).get('/Profile-cos.html');
        expect(res.should.have.status(200));
    });

});
//6
describe('Check if the routes goes to volunteerreq Page', function() {
    test('responds to /volunteerreq', async() => {
        const res = await request(app).get('/volunteerreq.html');
        expect(res.should.have.status(200));
    });

});
//7
describe('Check if the routes goes to customer donation request page', function() {
    test('responds to //Customer-Donation-Request', async() => {
        const res = await request(app).get('/Customer-Donation-Request.html');
        expect(res.should.have.status(200));
    });

});
//8
describe('Check if the routes goes to volunteerdetail page', function() {
    test('responds to /volunteer-detail', async() => {
        const res = await request(app).get('/volunteer-detail.ejs');
        expect(res.should.have.status(200));
    });

});
//9
describe('Check if the routes goes to Employees page', function() {
    test('responds to /Employees', async() => {
        const res = await request(app).get('/Employees.ejs');
        expect(res.should.have.status(200));
    });

});
//10
describe('Check if the routes goes to add product Page', function() {
    test('responds to /add-product', async() => {
        const res = await request(app).get('/add-product.html');
        expect(res.should.have.status(200));
    });

});
//11
describe('Check if the routes goes to signup-service Page', function() {
    test('responds to /Sign-Up-Service', async() => {
        const res = await request(app).get('/Sign-Up-Service.html');
        expect(res.should.have.status(200));
    });

});
//12
describe('Check if the routes goes to profile service Page', function() {
    test('responds to /Profile-Service1', async() => {
        const res = await request(app).get('/Profile-Service1.ejs');
        expect(res.should.have.status(200));
    });

});
//13
describe('Check if the routes goes to Request-cu Page', function() {
    test('responds to /Request-cu', async() => {
        const res = await request(app).get('/Request-cu.html');
        expect(res.should.have.status(200));
    });

});
//14
describe('Check if the routes goes to products Page', function() {
    test('responds to /products', async() => {
        const res = await request(app).get('/products.ejs');
        expect(res.should.have.status(200));
    });

});
//15
describe('Check if the routes goes to requestpli Page', function() {
    test('responds to /requestapli', async() => {
        const res = await request(app).get('/requestapli.html');
        expect(res.should.have.status(200));
    });

});
//16
describe('Check if the routes goes to Customer details  Page', function() {
    test('responds to /Customer-details-sr', async() => {
        const res = await request(app).get('/Customer-details-sr.ejs');
        expect(res.should.have.status(200));
    });

});
//17
describe('Check if the routes goes to voluntreedeat Page', function() {
    test('responds to /volunteerdeat', async() => {
        const res = await request(app).get('/volunteerdeat.html');
        expect(res.should.have.status(200));
    });

});
//18
describe('Check if the routes goes to Log out Page', function() {
    test('responds to /Log-out', async() => {
        const res = await request(app).get('/Log-out.html');
        expect(res.should.have.status(200));
    });

});
//19
describe('Check if the routes goes to Scholarship-Approval for Volunteers Page', function() {
    test('responds to /Scholarship-Approval-for-Volunteers', async() => {
        const res = await request(app).get('/Scholarship-Approval-for-Volunteers.ejs');
        expect(res.should.have.status(200));
    });

});
//20
describe('Check if the routes goes to Admin Assistance Approval Page', function() {
    test('responds to /Admin-Assistance-Approval', async() => {
        const res = await request(app).get('/Admin-Assistance-Approval.ejs');
        expect(res.should.have.status(200));
    });

});
//21
describe('Check if the routes goes to Requests table Page', function() {
    test('responds to /Requests-table', async() => {
        const res = await request(app).get('/Requests-table.ejs');
        expect(res.should.have.status(200));
    });

});