var assert = chai.assert;
var should = chai.should();

describe('camelCase', function () {
    
    before(function () {
        console.log('start testing camelCase');
    });
    
    describe('test result', function () {
        it('error in camelCase', function () {
            var data = "to be or Not-to be_this isThe.problem";
            
            var res = _.camelCase("to be or Not-to be_this isThe.problem");
            assert.equal(res, "toBeOrNotToBeThisIsTheProblem");
        });
    });
});