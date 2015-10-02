var assert = chai.assert;
var should = chai.should();

describe('callConstantly', function () {
    
    before(function () {
        console.log('start testing callConstantly');
    });
    
    describe('test result', function () {
        it('error in callConstantly', function () {
            var obj = { msg: "executed code" }
            var fn = _.callConstantly(function () { return this.msg }, 3 , obj);
            
            assert.equal(fn(), "executed code");
            assert.equal(fn(), "executed code");
            assert.equal(fn(), "executed code");
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
        });
    });
});

