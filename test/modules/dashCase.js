var assert = chai.assert;
var should = chai.should();

describe('dashCase', function () {
    
    before(function () {
        console.log('start testing dashCase');
    });
    
    describe('test result', function () {
        it('error in dashCase', function () {
            var data = "to be orNot-to be_this isThe.problem";
            
            var res = _.dashCase(data);
            assert.equal(res, "to-be-or-not-to-be-this-is-the-problem");
        });
    });
});