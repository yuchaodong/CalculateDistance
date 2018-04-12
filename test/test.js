const supertest = require('supertest');
const assert = require('assert');
const app = require('../server/server.js');
const getDistanceBetweenAirports = require('../server/getDistanceBetweenAirports.js');
const test_client = supertest(app);


it('should respond with the distance between the airports', function () {
    const distance = getDistanceBetweenAirports('Lehigh Valley International Airport', 'ABI');
    assert.equal(distance, 1265);
});


it('should respond with the distance between the airports', function (done) {
    test_client
    .get('/distance')
    .send({
        'airport1': 'Lehigh Valley International Airport',
        'airport2': 'ABI'
    })
    .expect(200)
    .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.distance, 1265)
        done();
    })
});