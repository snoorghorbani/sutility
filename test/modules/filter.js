var assert = chai.assert;
var should = chai.should();

describe('Filter', function () {
    
    before(function () {
        console.log('start testing Filter');
    });
    
    describe('_.filter()', function () {
        
        it('in get function as second parameter', function () {
            var data = [1, 2, 3];
            var res = _.filter(data, function (i) {
                return i < 2;
            })
            assert.deepEqual(res, [1]);
        });
        
        it('in get object as second parameter', function () {
            var data = [{ a: 3, b: { bb: 2, bc: { cc: 1 } } }, { a: 2, b: { bb: 2, bc: { cc: 2 } } }];
            var res = _.filter(data, { b: { bc: { cc: 1 } } });
            assert.deepEqual(res, [{ a: 3, b: { bb: 2, bc: { cc: 1 } } }]);
        });

        it('in get object as second parameter', function () {
            var data = [{ a: 3, b: { bb: 2, bc: { cc: 1 } } }, { a: 3, b: { bb: 2, bc: { cc: 2 } } }];
            var res = _.filter(data, { b: { bb: 2 } });
            assert.deepEqual(res, data);
        });

        it('in get object as second parameter', function () {
            var data = [{ a: 3, b: { bb: 2, bc: { cc: 1 } } }, { a: 3, b: { bb: 3, bc: { cc: 2 } } }];
            var res = _.filter(data, { b: { bc: { cc: 3 } } });
            assert.deepEqual(res, []);
        });

    });
});