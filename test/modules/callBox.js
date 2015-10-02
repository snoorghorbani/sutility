var assert = chai.assert;
var should = chai.should();

describe('callBox', function () {
    
    before(function () {
        console.log('start testing callBox');
    });
    
    describe('test result', function () {
        it('error in callBox', function () {
            var fn = _.callBox(function () { return "executed code" }, 10);
            assert.equal(fn(), "executed code");
            assert.equal(fn(), undefined);
        });
    });
});

