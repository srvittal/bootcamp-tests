describe('Count all from Paarl tests', function () {

    it('Test uses CJ 123 123, CJ 321 321 as the numPlate', function () {
        assert.equal(['CJ 123 123','CJ 321 321'], allPaarl("CJ 123 123, CJ 321 321"));
    });

});