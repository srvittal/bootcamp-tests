describe('Find items over 20 tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal([], findItemsOver20('1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5'));
    });

});