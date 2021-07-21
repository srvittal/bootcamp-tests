describe('Count all from town tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal([ 'CY 123 123' ], allFromTown("CY 123 123","CY"));
    });

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal([ 'CY 123 123' ], allFromTown("CY 123 123, CJ 123 123, CJ 321 321","CY"));
    });

});