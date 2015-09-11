var assert = chai.assert;
var should = chai.should();

describe('is.equalText', function () {
    
    before(function () {
        console.log('start testing is.equalText');
    });
    
    describe('is.equalText()', function () {
        
        it('error in is.equalText', function () {
            var data = "D!$034dfZSD";
            var toBe = "d!$034dfzsd";
            var res = _.is.string(data, toBe);
            assert.isTrue(res, "the value must true");
            
            
            var res = _.is.equalText(data, "dont");
            assert.isFalse(res, "the value must false"   );
        });
    });
});
