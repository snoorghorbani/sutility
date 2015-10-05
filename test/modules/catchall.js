var assert = chai.assert;
var should = chai.should();

describe('catchall', function () {
    
    before(function () {
        console.log('start testing catchall');
    });
    
    describe('catchall', function () {
        it('define key', function () {
            var catchall = _.catchall({
                prefix: '/f',
                partialPrefix: '/f/r'
            });
            
            assert.equal(catchall.getUrl(), "http://localhost:9876");
        });
        it('check reset', function () {
            var catchall = _.catchall({
                prefix: '/f',
                partialPrefix: '/f/r'
            });
            
            //assert.equal(catchall.getUrl(), "http://localhost:9876");
            
            catchall.key("k1", { multi: false, "default": 111 });
            catchall.key("k2", { multi: true, "default": 222 });
            catchall.add.k1(1);
            catchall.reset.k1();
            catchall.add.k2(2);
            catchall.add.k2(22);
            catchall.reset.k2();
            assert.equal(catchall.getUrl(), "http://localhost:9876/k1-111/k2-222");

            catchall.add.k1(1);
            catchall.add.k1(11);
            catchall.add.k2(2);
            catchall.add.k2(22);
            assert.equal(catchall.getUrl(), "http://localhost:9876/k1-11/k2-222/k2-2/k2-22");
        });
    });
});