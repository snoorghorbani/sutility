var assert = chai.assert;
var should = chai.should();

describe('trim', function () {
    
    before(function () {
        console.log('start testing trim');
    });
    
    describe('test result', function () {
        it('error in trim', function () {
            var data = "    to be    orNot-to be_this is.problem    ";
            
            var res = _.trim(data);
            assert.equal(res, "to be    orNot-to be_this is.problem");
        });
    });
});