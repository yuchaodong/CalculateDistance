const supertest = require('supertest');
const assert = require('assert');
const app = require('../server/server.js');
const helpers = require('../server/getDistanceBetweenAirports.js');
const test_client = supertest(app);


it('should respond with the distance between the airports', function () {
    const distance = helpers.getDistanceBetweenAirports('Lehigh Valley International Airport', 'ABI');
    assert.equal(distance, 1265);
});

it('should return an objec with lat and lon', function() {
    const coordinates = helpers.getAirportCoordinates('JFK');
    assert.equal(coordinates.latitude, '40.6437')
    assert.equal(coordinates.longitude, '-73.79')
})

it('should respond with the distance between the airports', function (done) {
    test_client
    .get('/distance')
    .query({
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


it('should respond with airport coordinates', function (done) {
    test_client
    .get('/coordinates')
    .query({
        'airport': 'JFK'
    })
    .expect(200)
    .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.latitude, '40.6437')
        assert.equal(res.body.longitude, '-73.79')        
        done();
    })
});