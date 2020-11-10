var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈

describe('Tutorial', function() {
    describe('#basic', function () {
        it('배열내에 해당 값이 없으면 -1을 반환', function () {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });

    describe('#done', function (){
        it('이중 콜백시 에러', function (done){
           setImmediate(done);
        });
    })
});
