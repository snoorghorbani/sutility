var assert = chai.assert;
var should = chai.should();

describe('enableBackup', function () {
    
    before(function () {
        console.log('start testing enableBackup');
    });
    
    describe('test result', function () {
        it('error in enableBackup', function () {
            //var obj = { a : 1 };
            var obj  = _.enableBackup();
            
            //obj.backup('bk1');
            //obj.a = 2;
            //obj.backup('bk2');

            //obj.restore('bk1');
            //assert.equal(obj.a, 1);

            //obj.restore('bk2');
            ////assert.is(obj.a, 2);
        });
    });
});

