var assert = chai.assert;
var should = chai.should();

describe('Array', function () {
    
    before(function () {
        console.log('start testing Array');
    });
    //beforeEach(function () {
    //    console.log('invoke before each method');
    //});
    
    //afterEach(function () {
    //    console.log('invoke after each method');
    //});
    //after(function () {
    //    console.log('**********************************');
    //    console.log('*       done without error       *');
    //    console.log('**********************************');
    //});
    
    
    
    describe('_.map()', function () {
        
        it('should return same array', function () {
            console.log('_.map');
            var test = [1, 2];
            var res = _.map(test, _.i)
            assert.deepEqual(test, res);
        });
    });
    
    describe('#indexOf()', function () {
        
        it('should return -1 when the value is not present', function () {
            console.log('_.array.comapact');
            //_.array.compact([1, 2, 3 , 0]).should.deepEqual([1,2,3]);
            var test = [1, 2, 0, false, ""];
            var res = _.array.compact(test);
            assert.deepEqual(res, [1, 2]);

            //[1, 2, 3].indexOf(0).should.equal(-1);
        });
    });
});