var assert = chai.assert;
var should = chai.should();

describe('Report', function () {
    
    before(function () {
        console.log('start testing Report');
    });
    
    describe('_.report()', function () {
        
        it('error in _.report.skeleton', function () {
            var data = { a: [{ d: 1 }], b: { bb: 2, bc: { cc: 3 } } }
            var res = _.report.skeleton(data)
            assert.deepEqual(res, ["a.d", "b.bb", "b.bc.cc"]);
        });

        it('deep equal', function () {
            var data = { a: [{ d: 1 }], b: { bb: 2, bc: { cc: 3 } } }
            var toBe = [
                { name: "a", path: "a", depts: 1, type: "array", isLastNode: false },
                { name: "d", path: "a.d", depts: 2, type: "value", isLastNode: true },
                { name: "b", path: "b", depts: 1, type: "object", isLastNode: false },
                { name: "bb", path: "b.bb", depts: 2, type: "value", isLastNode: true }, 
                { name: "bc", path: "b.bc", depts: 2, type: "object", isLastNode: false },
                { name: "cc", path: "b.bc.cc", depts: 3, type: "value", isLastNode: true }
            ]
            var res = _.report(data);
            assert.deepEqual(res, toBe);
        });
    });
});