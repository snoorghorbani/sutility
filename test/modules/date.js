var assert = chai.assert;
var should = chai.should();

describe('date', function () {

    before(function () {
        console.log('start testing of date object');
    });

    describe('_.date.persian.to.julian', function () {
        it('should return 0 when the value is [1,1,1]', function () {
            console.log('_.date.persian.to.julian');

            var prediction = 0;
            var res = _.date.persian.to.julian(1, 1, 1);
            assert.equal(res, prediction);
        });
    });

    describe('_.date.julian.to.persian', function () {
        it('should return [1,1,1] when the value is 0', function () {
            console.log('_.date.julian.to.persian');

            var prediction = [1, 1, 1];
            var res = _.date.julian.to.persian(0);
            assert.deepEqual(res, prediction);
        });
    });
});