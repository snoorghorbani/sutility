var assert = chai.assert;
var should = chai.should();

describe('callWhen', function () {
    
    before(function () {
        console.log('start testing callWhen');
    });
    
    describe('test result', function () {
        it('error in callWhen', function () {
            var obj = { msg: "executed code" }
            var fn = _.callWhen(function () { return this.msg }, 3 , obj);
            
            assert.equal(fn(), "executed code");
            assert.equal(fn(), "executed code");
            assert.equal(fn(), "executed code");
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
        });
    });
});

