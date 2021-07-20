describe('Reg check tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal(true, regCheck("CY 123 123","CY"));
    });

    it('Test uses CA 321 321 as the numPlate & CY as the provCode', function () {
        assert.equal(false, regCheck("CA 321 321","CY"));
    });

    it('Test uses ND500500 as the numPlate & ND as the provCode', function () {
        assert.equal(true, regCheck("ND500500","ND"));
    });


});