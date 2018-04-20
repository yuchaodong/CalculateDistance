const supertest = require('supertest');
const assert = require('assert');
const app = require('../server/server.js');
const helpers = require('../server/getDistanceBetweenAirports.js');
const test_client = supertest(app);


it('should respond with the distance between the airports', function () {
    const distance = helpers.getDistanceBetweenAirports('ABE', 'ABI');
    assert.equal(distance, 1265);
});

it('should return an objec with lat and lon', function() {
    const coordinates = helpers.getAirportInfo('JFK');
    assert.equal(coordinates.lat, '40.6437');
    assert.equal(coordinates.lon, '-73.79');
})

it('should respond with the distance between the airports', function (done) {
    test_client
        .get('/airport_distance')
        .query({
            'airportCode1': 'ABE',
            'airportCode2': 'ABI'
        })
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            assert.equal(res.body.distance, 1265);
            done();
        })
});


it('should respond with airport coordinates', function (done) {
    test_client
    .get('/airport_info')
    .query({
        'airportCode': 'JFK'
    })
    .expect(200)
    .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.lat, '40.6437');
        assert.equal(res.body.lon, '-73.79');      
        done();
    })
});


it('should respond with count of airport selections', function (done) {
    test_client
    .get('/airport_selections')
    .expect(200)
    .end(function(err, res) {
        if (err) return done(err);
        const selectionCount = Object.keys(res.body.airportSelections).length;
        assert.equal(selectionCount, 735);
        done();
    })
});