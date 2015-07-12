var assert = chai.assert;
var should = chai.should();

describe('is.closet', function () {

	before(function () {
		console.log('start testing is.closet');
	});

	describe('is.closet()', function () {

		it('error in is.closet', function () {
			var data = { a: 1, b: { bb: 2, bc: { cc: 3 } } }

			var res = _.is.closet(data, { b: { bc: { cc: 3 } } });
			assert.isTrue(res, "the value must true");

			var res = _.is.closet(data, { b: { bc: { cc: 4 } } });
			assert.isFalse(res, "the value must false");
		});
	});
});