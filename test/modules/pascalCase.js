var assert = chai.assert;
var should = chai.should();

describe('pascalCase', function () {
    
    before(function () {
        console.log('start testing pascalCase');
    });
    
    describe('test result', function () {
        it('error in pascalCase', function () {
            var data = "to be or Not-to be_this isThe.problem";
            
            var res = _.pascalCase(data);
            assert.equal(res, "ToBeOrNotToBeThisIsTheProblem");
        });
    });
});