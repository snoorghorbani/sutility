var assert = chai.assert;
var should = chai.should();

describe('spliteAndTrim', function () {
    
    before(function () {
        console.log('start testing spliteAndTrim');
    });
    
    describe('test result', function () {
        it('error in spliteAndTrim', function () {
            var data = "    to be    orNot-to be_this is.problem    ";
            var assertValue = ["to", "be", "orNot-to", "be_this", "is.problem"];
            var res = _.spliteAndTrim(data);
            assert.deepEqual(res, assertValue);
        });
    });
});