describe('Transport fee tests', function () {

    it('Test uses morning as the shift', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('Test uses afternoon as the shift', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('Test uses night as the shift', function () {
        assert.equal(transportFee('nightshift'), 'free');
    });

});