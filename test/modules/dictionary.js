var assert = chai.assert;
var should = chai.should();

describe('dictionary', function () {
    
    before(function () {
        console.log('start testing dictionary');
    });
    
    describe('test result', function () {
        it('error in init, add, data dictionary', function () {
            var toBe = { 1: 11, 2: 22 }
            
            var dic = _.dictionary.new({ 1: 11 });
            dic.add(2, 22);
            var res = dic.data();
            
            assert.deepEqual(res, toBe);
        });
        it('error in reset dictionary', function () {
            var toBe = { 1: 11, 2: undefined }
            
            var dic = _.dictionary.new({ 1: 11 });
            dic.add(1, 111);
            dic.add(2, 22);
            
            dic.reset(1);
            dic.reset(2);

            var res = dic.data();
            
            assert.deepEqual(res, toBe);
        });
    });
});