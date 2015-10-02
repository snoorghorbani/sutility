var assert = chai.assert;
var should = chai.should();

describe('callIgnore', function () {
    
    before(function () {
        console.log('start testing callIgnore');
    });
    
    describe('test result', function () {
        it('error in callIgnore', function () {
            var obj = { msg: "executed code" }
            var fn = _.callIgnore(function () { return this.msg }, 3 , obj);
            
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), "executed code");
        });
        it('error in callIgnore reset == true', function () {
            var obj = { msg: "executed code" }
            var fn = _.callIgnore(function () { return this.msg }, 3 , obj,true);
            
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), "executed code");
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), "executed code");
        });
        it('error in callIgnore reset == undefined', function () {
            var obj = { msg: "executed code" }
            var fn = _.callIgnore(function () { return this.msg }, 3 , obj);
            
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), "executed code");
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
            assert.equal(fn(), undefined);
        });
    });
});

