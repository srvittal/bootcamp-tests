describe('Find items over tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal([], findItemsOver("CY 123 123",1));
    });

});