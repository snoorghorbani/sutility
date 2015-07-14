var assert = chai.assert;
var should = chai.should();

describe('is.closet', function () {
    
    before(function () {
        console.log('start testing is.closet');
    });
    
    describe('is.closet()', function () {
        
        it('error in is.closet', function () {
            var data = "a";
            
            var res = _.is.string(data, "a");
            assert.isTrue(res, "the value must true");
            
            var res = _.is.closet(data, 2);
            assert.isFalse(res, "the value must false");
        });
    });
});