var assert = chai.assert;
var should = chai.should();

describe('Merge', function () {
    
    before(function () {
        console.log('start testing merge');
    });
    
    describe('_.merge()', function () {
        
        it('error in is.closet', function () {
            var data_1 = { a: 1 };
            var data_2 = { b: 2 };
            
            var res = _.merge(data_1, data_2);
            assert.deepEqual(res, { a: 1, b: 2 });
        });
    });
});