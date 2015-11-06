var assert = chai.assert;
var should = chai.should();

describe('prototype', function () {

    before(function () {
        console.log('start testing prototype');
    });

    describe('test result', function () {
        it('error in prototype', function () {
            var constructor = function () { };
            constructor.prototype.i = 0;
            var instance = new constructor();

            _.prototype.extend(instance, { a: 1 });
            _.prototype.extend(constructor, { b: 2 });

            assert.equal(instance.i, 0);
            assert.equal(instance.a, 1);
            assert.equal(instance.b, 2);
        });
    });
});

