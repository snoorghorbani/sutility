var assert = chai.assert;
var should = chai.should();

describe('is.closet', function () {
    
    before(function () {
        console.log('start testing is.closet');
    });
    
    describe('is.closet()', function () {
        
        it('error in is.closet', function () {
            var data = 2;
            
            var res = _.is.number(data, 2);
            assert.isTrue(res, "the value must true");
            
            var res = _.is.closet(data, "a");
            assert.isFalse(res, "the value must false");
        });
    });
});