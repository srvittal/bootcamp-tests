describe('Reg check tests', function () {

    it('Test uses CY 123 123 as the numPlate & CY as the provCode', function () {
        assert.equal(true, regCheck("CY 123 123", "CY"));
    });

    it('Test uses CA 321 321 as the numPlate & CY as the provCode', function () {
        assert.equal(false, regCheck("CA 321 321", "CY"));
    });

    it('Test uses ND500500 as the numPlate & ND as the provCode', function () {
        assert.equal(true, regCheck("ND500500", "ND"));
    });

    it('Test uses DC 55 YU GP as the numPlate & GP as the provCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('Test uses DC 55 YU GP as the numPlate & EC as the provCode', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('Test uses 5566 L as the numPlate & L as the provCode', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('Test uses 5566 L as the numPlate & M as the provCode', function () {
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('Test uses ERT 123 EC as the numPlate & EC as the provCode', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('Test uses ERT 123 EC as the numPlate & GP as the provCode', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('Test uses FGT 123 MP as the numPlate & MP as the provCode', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('Test uses FGT 123 MM as the numPlate & MP as the provCode', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});