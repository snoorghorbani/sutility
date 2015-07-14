var assert = chai.assert;
var should = chai.should();

describe('Multiply', function () {
    
    before(function () {
        console.log('start testing multiply');
    });
    
    describe('_.multiply()', function () {
        it('in simple usage', function () {
            assert.equal(_.multiply(2, 3), 6);
        });
    });
});