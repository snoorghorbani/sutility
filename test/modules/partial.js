var assert = chai.assert;
var should = chai.should();

describe('Partial', function () {
    
    before(function () {
        console.log('start testing Partial');
    });
    
    describe('_.partial()', function () {
        it('in simple usage', function () {
            var data = { a: 3, b: { bb: 2, bc: { cc: 3 } }, c: { bb: 2, bc: { cc: 3 } } };
            var res = _.partial(data, { b: { bb: 2 }, c: { bb: 2 } });
            assert.deepEqual(res, { "b": { "bb": 2 }, "c": { "bb": 2 } });
        });
    });
});