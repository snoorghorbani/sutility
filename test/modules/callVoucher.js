var assert = chai.assert;
var should = chai.should();

describe('callVoucher', function () {
    
    before(function () {
        console.log('start testing callVoucher');
    });
    
    describe('test result', function () {
        it('error in callVoucher', function () {
            var fn = _.callVoucher(function () { return "executed code" }, 1000);
            assert.equal(fn(), "executed code");
        });
    });
});

