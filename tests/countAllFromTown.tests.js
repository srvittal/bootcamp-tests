describe('Count all from town tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), ['CL 124', 'CL 345', 'CL 341'])
    });

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'), ['CJ 456']);
    });

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.deepEqual(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF'), []);
    });

});